import axios from "axios";

// Example using Vite
const baseURL = import.meta.env.VITE_API_BASE_URL;

// Example using Create React App / Next.js
// const baseURL = process.env.REACT_APP_API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL;

fetch(`${baseURL}/api/users`)
  .then(res => res.json())
  .then(data => console.log(data));

export const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

let logoutHandler: (() => void) | null = null;

export const setLogoutHandler = (fn: () => void) => {
  logoutHandler = fn;
};

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    // If the refresh request itself fails, stop immediately and clear state.
    // DO NOT hard redirect to /login here.
    if (originalRequest.url === "/refresh") {
      isRefreshing = false;
      logoutHandler?.();
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => api(originalRequest))
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        await api.post("/refresh");
        processQueue(null);
        isRefreshing = false;
        return api(originalRequest);
      } catch (err) {
        processQueue(err, null);
        isRefreshing = false;
        logoutHandler?.(); 
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);
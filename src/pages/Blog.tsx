import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { TbCategory } from "react-icons/tb";

interface Post {
  _id: string;
  title: string;
  category?: string;
  createdAt: string;
  previewImage?: string | null;
  previewText?: string;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

interface ApiResponse {
  success: boolean;
  posts: Post[];
  pagination: Pagination;
}

interface CardItemProps {
  post: Post;
}

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60";

const CardItem = ({ post }: CardItemProps) => {
  const imageSrc = post.previewImage || FALLBACK_IMAGE;

  return (
    <motion.div whileHover={{ scale: 1.02 }} className="w-full">
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
        <img src={imageSrc} alt={post.title || "Blog post preview"} className="h-40 w-full object-cover" />

        {/* Removed justify-between to fix the awkward empty middle gap */}
        <div className="flex flex-1 flex-col p-4">
          
          {/* flex-grow ensures this upper zone establishes a stable baseline */}
          <div className="flex-grow space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-pink-500">
                <TbCategory size={14} />
              </span>
              <span className="font-semibold text-gray-500 uppercase tracking-wider">
                {post.category || "General"}
              </span>
            </div>

            {/* Changed line-clamp to 2 so longer titles wrap nicely without ruining the layout */}
            <h3 className="text-base font-bold text-gray-800 line-clamp-2 leading-snug">
              {post.title || "Untitled"}
            </h3>
          </div>

          {/* Fixed top margin creates a clean, uniform separation above the footer action bar */}
          <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-1 text-[11px] text-gray-400">
              <Calendar size={12} />
              {new Date(post.createdAt).toLocaleDateString()}
            </div>

            <Link to={`/blog/detail/${post._id}`}>
              <button className="cursor-pointer rounded-full border border-greensage px-3 py-1 text-xs font-bold text-greensage transition hover:bg-greensage hover:text-white">
                See more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 8,
    total: 0,
    totalPages: 1,
  });

  const [loading, setLoading] = useState(true);
  const [changingPage, setChangingPage] = useState(false);
  const [error, setError] = useState("");

  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const fetchPosts = async (page: number, initial = false) => {
    try {
      if (initial) setLoading(true);
      else setChangingPage(true);

      setError("");

      const res = await axios.get<ApiResponse>(`${baseURL}/posts`, {
        params: { page, limit: pagination.limit },
      });

      if (!res.data.success) throw new Error("Failed to fetch posts");

      setPosts(res.data.posts || []);
      setPagination(res.data.pagination);
    } catch (err: any) {
      setError(err?.message || "Something went wrong");
    } finally {
      if (initial) setLoading(false);
      else setChangingPage(false);
    }
  };

  useEffect(() => {
    fetchPosts(1, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goPrev = () => {
    if (pagination.page > 1 && !changingPage) {
      fetchPosts(pagination.page - 1);
    }
  };

  const goNext = () => {
    if (pagination.page < pagination.totalPages && !changingPage) {
      fetchPosts(pagination.page + 1);
    }
  };

  if (loading) {
    return (

<section className="px-4 py-8 sm:px-8  md:min-h-[600px]">
  <h2 className="mb-8   text-2xl font-bold">最新</h2>
    {loading ? (
      <div className="mx-auto max-w-7xl grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm animate-pulse"
          >
            <div className="h-40 w-full bg-gray-200" />

            <div className="p-4">
              <div className="mb-3 h-3 w-20 rounded bg-gray-200" />
              <div className="mb-2 h-5 w-full rounded bg-gray-200" />
              <div className="mb-6 h-5 w-3/4 rounded bg-gray-200" />

              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                <div className="h-3 w-24 rounded bg-gray-200" />
                <div className="h-7 w-20 rounded-full bg-gray-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : error ? (
      <div className="mx-auto mb-6 max-w-3xl rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
        {error}
      </div>
    ) : posts.length === 0 ? (
      <div className="flex min-h-[450px] items-center justify-center">
        <div className="text-center font-medium text-gray-400">
         投稿がありません
        </div>
      </div>
    ) : (
      <>
        <div className="mx-auto max-w-7xl grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {posts.map((post) => (
            <CardItem key={post._id} post={post} />
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-7xl items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
          <p className="text-sm text-gray-600">
            Page <span className="font-medium">{pagination.page}</span> of{" "}
            <span className="font-medium">{pagination.totalPages}</span> (
            {pagination.total} posts)
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={goPrev}
              disabled={pagination.page <= 1 || changingPage}
              className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronLeft size={16} />
              Prev
            </button>

            <button
              onClick={goNext}
              disabled={
                pagination.page >= pagination.totalPages || changingPage
              }
              className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </>
    )}
  </section>
);
  }

  return (
    <section className="px-4 mt-10 py-12 sm:px-8 min-h-[600px] ">
      <h2 className="mb-8 mt-30 text-center text-2xl font-bold">最新</h2>

      {error ? (
        <div className="mx-auto mb-6 max-w-3xl rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      ) : null}

      {posts.length === 0 ? (
      <div className="flex min-h-[400px] w-full flex-col items-center justify-center">
    <div className="text-center font-medium text-gray-400">
     投稿がありません
    </div>
  </div>
      ) : (
        <>
          <div className="mx-auto max-w-7xl grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {posts.map((post) => (
              <CardItem key={post._id} post={post} />
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-7xl items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
            <p className="text-sm text-gray-600">
              Page <span className="font-medium">{pagination.page}</span> of{" "}
              <span className="font-medium">{pagination.totalPages}</span> (
              {pagination.total} posts)
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                disabled={pagination.page <= 1 || changingPage}
                className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ChevronLeft size={16} />
                Prev
              </button>

              <button
                onClick={goNext}
                disabled={pagination.page >= pagination.totalPages || changingPage}
                className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import { TiThMenuOutline } from "react-icons/ti";
import { IoCloseCircleOutline } from "react-icons/io5";
import bambooLogo from "../assets/bamboo.png";

const Nav = () => {
  const [cartopen, iscartopen] = useState(false);
  const location = useLocation();

  const pill = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-[#D1E7D1] text-greensage"
        : "text-gray-700 hover:bg-[#F2F7F2] hover:text-greensage"
    }`;

  const aboutActive = location.pathname.startsWith("/about");

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex h-25 max-w-7xl items-center justify-between px-6">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center">
            <img className="w-36 md:w-40" src={bambooLogo} alt="Bamboo Logo" />
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-2 md:flex">
            <NavLink to="/" end className={pill}>
              Home
            </NavLink>

            <NavLink to="/blog" className={pill}>
              Blog
            </NavLink>

            <NavLink to="/course" className={pill}>
              Course
            </NavLink>

            <NavLink to="/school" className={pill}>
              Partner School
            </NavLink>

            {/* ABOUT DROPDOWN */}
            <div
              className={`relative group rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                aboutActive
                  ? "bg-[#D1E7D1] text-greensage"
                  : "text-gray-700 hover:text-greensage"
              }`}
            >
              <span className="cursor-pointer">About</span>

              <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-2xl bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <NavLink
                  to="/about/speech"
                  className="block rounded-lg px-4 py-2 text-greensage hover:bg-greensage hover:text-white"
                >
                  Speech
                </NavLink>

                <NavLink
                  to="/about/schooloverview"
                  className="block rounded-lg px-4 py-2 text-greensage hover:bg-greensage hover:text-white"
                >
                  School Overview
                </NavLink>

                <NavLink
                  to="/about/inquiry"
                  className="block rounded-lg px-4 py-2 text-greensage hover:bg-greensage hover:text-white"
                >
                  Inquiry
                </NavLink>
              </div>
            </div>

            <NavLink to="/map" className={pill}>
              Map
            </NavLink>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="text-3xl text-greensage md:hidden"
            onClick={() => iscartopen(true)}
          >
            <TiThMenuOutline />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      {cartopen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => iscartopen(false)}
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
          cartopen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-5 text-3xl text-greensage">
          <IoCloseCircleOutline onClick={() => iscartopen(false)} />
        </div>

        {/* LINKS */}
        <nav className="flex flex-col gap-2 px-6 text-gray-700">
          <NavLink to="/" end className={pill} onClick={() => iscartopen(false)}>
            Home
          </NavLink>

          <NavLink to="/blog" className={pill} onClick={() => iscartopen(false)}>
            Blog
          </NavLink>

          <NavLink to="/course" className={pill} onClick={() => iscartopen(false)}>
            Course
          </NavLink>

          <NavLink to="/school" className={pill} onClick={() => iscartopen(false)}>
            Partner School
          </NavLink>

          <NavLink
            to="/about/speech"
            className={pill}
            onClick={() => iscartopen(false)}
          >
            About — Speech
          </NavLink>

          <NavLink
            to="/about/schooloverview"
            className={pill}
            onClick={() => iscartopen(false)}
          >
            About — Overview
          </NavLink>

          <NavLink
            to="/about/inquiry"
            className={pill}
            onClick={() => iscartopen(false)}
          >
            About — Inquiry
          </NavLink>

          <NavLink to="/map" className={pill} onClick={() => iscartopen(false)}>
            Map
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Nav;
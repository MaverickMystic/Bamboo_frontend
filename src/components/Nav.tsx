import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import { TiThMenuOutline } from "react-icons/ti";
import { IoCloseCircleOutline } from "react-icons/io5";


const Nav = () => {
  const [cartopen, iscartopen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); 
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Compact pill padding for tighter nav architecture
  const pill = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-[#D1E7D1] text-greensage"
        : "text-gray-700 hover:bg-[#F2F7F2] hover:text-greensage"
    }`;

  const aboutActive = location.pathname.startsWith("/about");

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* HEADER */}
     
        {/* 
          1. h-18 reduces the height of the bar.
          2. max-w-5xl pulls logo and nav links closer toward the center screen axis.
        */}
        <div className="mx-auto flex h-18 max-w-5xl items-center justify-between px-6">
          
          {/* LOGO */}
          <NavLink to="/" className="flex items-center">
            <img className="w-28 md:w-32 object-contain" src={"https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782146382/bamboo_lzfnf2.png"} alt="Bamboo Logo" />
          </NavLink>

          {/* DESKTOP/TABLET NAV */}
          <nav className="hidden items-center gap-1.5 md:flex">
            <NavLink to="/" end className={pill}>
              Home
            </NavLink>

            <NavLink to="/blog" className={pill}>
              Blogs
            </NavLink>

            <NavLink to="/course" className={pill}>
              Courses
            </NavLink>

            <NavLink to="/school" className={pill}>
              Partner Schools
            </NavLink>

            {/* ABOUT DROPDOWN */}
            <div
              ref={dropdownRef}
              className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer select-none ${
                aboutActive
                  ? "bg-[#D1E7D1] text-greensage"
                  : "text-gray-700 hover:text-greensage"
              }`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>About</span>

              <div
                className={`absolute left-1/2 top-full z-50 mt-2 w-56 -translate-x-1/2 rounded-2xl bg-white p-2 shadow-xl transition-all duration-200 ${
                  dropdownOpen
                    ? "visible opacity-100 translate-y-0"
                    : "invisible opacity-0 -translate-y-1"
                }`}
              >
                <NavLink
                  to="/about/speech"
                  className="block rounded-lg px-4 py-2 text-greensage hover:bg-greensage hover:text-white"
                  onClick={() => setDropdownOpen(false)}
                >
                  Speech
                </NavLink>

                <NavLink
                  to="/about/schooloverview"
                  className="block rounded-lg px-4 py-2 text-greensage hover:bg-greensage hover:text-white"
                  onClick={() => setDropdownOpen(false)}
                >
                  School Overview
                </NavLink>

                <NavLink
                  to="/about/inquiry"
                  className="block rounded-lg px-4 py-2 text-greensage hover:bg-greensage hover:text-white"
                  onClick={() => setDropdownOpen(false)}
                >
                  Inquiry
                </NavLink>
              </div>
            </div>

            <NavLink to="/map" className={pill}>
              Map
            </NavLink>

            <NavLink to="/about/inquiry" className={pill}>
              Inquiry
            </NavLink>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="text-2xl text-greensage md:hidden p-1 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => iscartopen(true)}
          >
            <TiThMenuOutline />
          </button>
        </div>
  

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
        <div className="flex justify-end p-5 text-2xl text-greensage">
          <button onClick={() => iscartopen(false)} className="p-1 rounded-full hover:bg-gray-50">
            <IoCloseCircleOutline />
          </button>
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
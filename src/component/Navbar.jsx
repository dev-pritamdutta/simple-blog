import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    // Retrieve the saved theme from localStorage or default to 'light'
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    // Save the theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <div className="navbar bg-base-100 fixed shadow-md mx-auto px-24 z-10 ">
        <div className="flex-1">
          <Link to="/" className="gap-0 text-3xl font-medium text-[#FF748B]">
            Bold
            <span className="text-[#4DA1A9]">Bytes</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal gap-3  font-bold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/bookmarks"
              className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
              }
            >
              BookMark
            </NavLink>

            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                onChange={handleToggle}
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                checked={theme === "synthwave"} // Sync checkbox state with the theme
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

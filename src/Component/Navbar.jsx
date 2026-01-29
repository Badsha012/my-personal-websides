import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Skills", path: "/skill" },
  { name: "Projects", path: "/project" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const baseLink =
    "px-3 py-1.5 rounded-md font-medium transition-all duration-200";

  return (
    <header
      className={`sticky top-0 z-50 border-b ${
        dark
          ? "bg-gray-900 border-gray-800 text-gray-300"
          : "bg-white border-gray-200 text-gray-700"
      }`}
    >
      <div className="max-w-9xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <NavLink
            to="/"
            className={`text-2xl font-bold ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            Badsha<span className="text-blue-500">.</span>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `${baseLink} ${
                    isActive
                      ? dark
                        ? "bg-blue-500/20 text-blue-400 shadow-sm"
                        : "bg-blue-50 text-blue-600 shadow-sm"
                      : dark
                      ? "text-gray-300 hover:bg-gray-800"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Buttons */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="text-xl"
              aria-label="Toggle Theme"
            >
              {dark ? "🌙" : "☀️"}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${baseLink} block ${
                    isActive
                      ? dark
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-blue-50 text-blue-600"
                      : dark
                      ? "text-gray-300 hover:bg-gray-800"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

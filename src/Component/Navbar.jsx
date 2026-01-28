import { useState } from "react";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState("Home");

  return (
    <header className={`${dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"} sticky top-0 z-50 border-b`}>
      <div className="max-w-9xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <h1 className={`text-2xl font-bold ${dark ? "text-white" : "text-gray-900"}`}>
            Badsha<span className="text-blue-500">.</span>
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActive(item)}
                className={`font-medium transition ${
                  active === item
                    ? "text-blue-500"
                    : dark
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Buttons */}
          <div className="flex items-center space-x-4">
            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className={`${dark ? "text-yellow-400" : "text-gray-700"} text-xl`}
            >
              {dark ? "🌙" : "☀️"}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden text-2xl ${dark ? "text-gray-300" : "text-gray-700"}`}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu (Animated) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-3">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  setActive(item);
                  setOpen(false);
                }}
                className={`block font-medium transition ${
                  active === item
                    ? "text-blue-500"
                    : dark
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

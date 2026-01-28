import { Github, Linkedin, Facebook, Mail } from "lucide-react";

const Footer = ({ dark }) => {
  return (
    <footer
      className={`border-t ${
        dark
          ? "bg-gray-900 text-gray-300 border-gray-800"
          : "bg-gray-100 text-gray-700 border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Top Section */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2
              className={`text-2xl font-bold ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              Badsha<span className="text-blue-500">.</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Passionate web developer focused on building clean, modern and
              user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-blue-500 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>

            <div className="flex items-center gap-2 text-sm">
              <Mail size={16} />
              <span>badsha@email.com</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5">
              <a href="#" className="social-icon" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`mt-12 pt-6 text-center text-sm border-t ${
            dark
              ? "border-gray-800 text-gray-400"
              : "border-gray-200 text-gray-500"
          }`}
        >
          © {new Date().getFullYear()} Badsha. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

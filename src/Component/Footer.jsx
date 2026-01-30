import { Github, Linkedin, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Top */}
        <div className="flex flex-col md:flex-row gap-8 md:justify-between">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Badsha<span className="text-blue-400">.</span>
            </h2>
            <p className="mt-3 text-sm max-w-xs text-slate-400">
              Just a developer who enjoys building simple, useful and clean web experiences.
            </p>
          </div>

          {/* Contact + Social */}
          <div>
            <p className="text-sm mb-3 text-slate-400">Stay connected</p>

            <div className="flex items-center gap-3 mb-4">
              <Mail size={16} />
              <a
                href="mailto:badsha@email.com"
                className="text-sm hover:text-blue-400 transition"
              >
                mdbadshasheikh2022@gmail.com
              </a>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/Badsha012" target="_blank" className="hover:text-white transition">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/md-badsha-sheikh/" target="_blank" className="hover:text-white transition">
                <Linkedin size={18} />
              </a>
              <a href="https://web.facebook.com/md.badsha.sheikh.423531/" target="_blank" className="hover:text-white transition">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-4 border-t border-slate-800 text-center text-xs text-slate-500">
          © {year} Badsha — built with care 🤍
        </div>
      </div>
    </footer>
  );
};

export default Footer;

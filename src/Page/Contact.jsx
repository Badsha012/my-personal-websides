import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-200 px-4 py-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-white">
            Contact<span className="text-blue-400">.</span>
          </h1>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Want to talk, collaborate, or just say hi?  
            Feel free to reach out — I’d love to hear from you.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          
          {/* Left Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Get in touch
              </h2>
              <p className="text-sm text-slate-400">
                I’m always open to discussing new ideas, projects or opportunities.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <span>mdbadshasheikh2022@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span>+880 1998414834</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 pt-2">
              <a href="https://github.com/your-username" target="_blank" className="hover:text-white transition">
                <Github />
              </a>
              <a href="https://linkedin.com/in/your-username" target="_blank" className="hover:text-white transition">
                <Linkedin />
              </a>
              <a href="https://facebook.com/your-username" target="_blank" className="hover:text-white transition">
                <Facebook />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <form className="space-y-5">
              <div>
                <label className="text-sm text-slate-400">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-1 px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-slate-400">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full mt-1 px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-slate-400">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full mt-1 px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 transition text-white py-2 rounded-lg font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

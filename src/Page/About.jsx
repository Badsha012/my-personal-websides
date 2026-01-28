import { motion } from "framer-motion";
import { Code, Layers, Briefcase, Star, Clock, Award, ShieldCheck } from "lucide-react";

import profilePic from "../assets/badsha.jpg"; 

const About = () => {
  return (
    <section id="about" className="bg-slate-950 text-slate-200 px-4 py-24 overflow-hidden relative">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
            About Me<span className="text-blue-500">.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            A deep dive into my professional journey and the technical expertise 
            I bring to the table.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* Left Side: Bio & Stats (5 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8 bg-slate-900/20 p-8 rounded-[2rem] border border-slate-800/50 backdrop-blur-sm"
          >
            {/* User Info with Profile Image */}
            <div className="flex items-center gap-6">
              <div className="relative group">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-500">
                  <img 
                    src={profilePic} 
                    alt="Badsha" 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-blue-600 p-2 rounded-full border-4 border-slate-950 shadow-lg">
                  <ShieldCheck size={16} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white tracking-tight">Badsha</h3>
                <p className="text-blue-400 font-medium flex items-center gap-2">
                  <Briefcase size={14} /> Full-Stack Developer
                </p>
              </div>
            </div>

            {/* Bio Text */}
            <div className="space-y-4 text-slate-400 leading-relaxed text-base">
              <p>
                Hello! I'm <span className="text-blue-400 font-semibold">Badsha</span>, a passionate and results-driven developer specializing in building highly performant web applications.
              </p>
              <p>
                My technical stack is centered around <span className="text-white font-medium italic underline decoration-blue-500/50">MERN Stack</span>. I excel at converting complex requirements into elegant, scalable code solutions.
              </p>
            </div>

            {/* Stat Cards Area */}
            <div>
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Stat Cards</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 text-center hover:border-blue-500/30 transition-colors">
                  <h5 className="text-2xl font-bold text-blue-500">5+</h5>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Years Exp.</p>
                </div>
                <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 text-center hover:border-blue-500/30 transition-colors">
                  <Star size={20} className="mx-auto mb-1 text-yellow-500 fill-yellow-500" />
                  <h5 className="text-xl font-bold text-white">50+</h5>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Finished</p>
                </div>
                <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 text-center hover:border-blue-500/30 transition-colors">
                  <Clock size={20} className="mx-auto mb-1 text-green-500" />
                  <h5 className="text-xl font-bold text-white">100%</h5>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Satisfaction</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Feature Cards (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
             <h3 className="text-xl font-bold text-white mb-6 pl-2 flex items-center gap-3">
               Feature Cards <span className="h-[2px] w-12 bg-blue-500/50"></span>
             </h3>

            {[
              {
                icon: <Code size={30} className="text-blue-400" />,
                title: "Technical Expertise",
                desc: "Modern development using React, Node.js, and industry-standard tools to build powerful apps."
              },
              {
                icon: <Layers size={30} className="text-blue-400" />,
                title: "Clean Architecture",
                desc: "Focusing on modular, maintainable, and highly reusable code structures for scalability."
              },
              {
                icon: <Award size={30} className="text-blue-400" />,
                title: "Quality Assurance",
                desc: "Ensuring pixel-perfect UI and bug-free logic with rigorous testing and best practices."
              },
              {
                icon: <Briefcase size={30} className="text-blue-400" />,
                title: "Professional Workflow",
                desc: "Agile methodology and clear communication for timely delivery and project success."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group flex gap-6 p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 hover:bg-slate-900/60 hover:border-blue-500/40 transition-all duration-300 cursor-default"
              >
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-blue-500 transition-colors shadow-2xl">
                  {feature.icon}
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-white text-lg font-bold mb-1 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
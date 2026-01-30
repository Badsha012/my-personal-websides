import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Life from "../Component/Life";

export default function PersonalHomePage() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "JavaScript", level: 92 },
  ];

  const timeline = [
    {
      year: "2022",
      title: "Started CSE Journey",
      desc: "Began Computer Science & Engineering studies and programming journey.",
    },
    {
      year: "2023",
      title: "Web Development Focus",
      desc: "Started learning full‑stack development and building projects.",
    },
    {
      year: "2024",
      title: "Professional Projects",
      desc: "Built dashboards, authentication systems and real web apps.",
    },
    {
      year: "2025",
      title: "Full Stack Developer",
      desc: "Working toward professional career and freelance opportunities.",
    },
  ];

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern responsive portfolio with animation and clean UI.",
    },
    {
      title: "Dashboard System",
      desc: "Role‑based dashboard with authentication and data management.",
    },
    {
      title: "E‑commerce App",
      desc: "Full‑stack shopping platform with admin panel.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Hi, I'm <span className="text-emerald-400">Badsha</span>
          </h1>

          <p className="text-slate-400 mb-6">
            A passionate Full Stack Developer from Bangladesh who loves
            building modern web applications and continuously learning new
            technologies.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-emerald-500 px-6 py-2 rounded-xl font-semibold hover:opacity-90">
              My Resume
            </button>
            <button className="border border-slate-600 px-6 py-2 rounded-xl hover:bg-slate-800">
              Contact Me
            </button>
          </div>

          <div className="flex gap-4 mt-6 text-slate-400">
            <Github className="cursor-pointer" />
            <Linkedin className="cursor-pointer" />
            <Mail className="cursor-pointer" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-72 h-72 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-2xl shadow-xl flex items-center justify-center text-3xl font-bold">
            Developer
          </div>
        </motion.div>
      </section>

      {/* ABOUT LIFE */}
      <Life></Life>

      {/* LIFE TIMELINE */}
      <section className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Life Journey</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {timeline.map((item, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-emerald-400 font-semibold mb-2">
                {item.year}
              </h3>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

     
     

     

    

    </div>
  );
}

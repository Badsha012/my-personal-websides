import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImg from "../assets/badsha.jpg"
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
<section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
  {/* LEFT CONTENT */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
      Hi, I'm <span className="text-emerald-400">Badsha</span>
    </h1>

    <p className="text-slate-400 mb-6 max-w-xl">
      A passionate <span className="text-emerald-400">Full Stack Developer</span>{" "}
      from Bangladesh who loves building modern, scalable web applications and
      continuously learning new technologies.
    </p>

    <div className="flex gap-4 flex-wrap">
      <a
        href="/public/Full stack.pdf"
        target="_blank"
        className="bg-emerald-500 text-slate-900 px-6 py-2 rounded-xl font-semibold hover:opacity-90 transition"
      >
        My Resume
      </a>

      <a
        href="/contact"
        className="border border-slate-700 px-6 py-2 rounded-xl text-slate-200 hover:bg-slate-800 transition"
      >
        Contact Me
      </a>
    </div>

    {/* Social Icons */}
    <div className="flex gap-5 mt-6 text-slate-400">
      <Github className="cursor-pointer hover:text-white transition" />
      <Linkedin className="cursor-pointer hover:text-blue-400 transition" />
      <Mail className="cursor-pointer hover:text-emerald-400 transition" />
    </div>
  </motion.div>

  {/* RIGHT IMAGE */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="flex justify-center"
  >
    <div className="relative">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-cyan-500 blur-2xl opacity-30 rounded-full"></div>

      {/* Image */}
      <img
        src={profileImg}
        alt="Badsha"
        className="relative w-72 h-72 object-cover rounded-2xl border border-slate-800 shadow-xl"
      />
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

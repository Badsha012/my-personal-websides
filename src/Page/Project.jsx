import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// Images
import portfolioImg from "../assets/portfilo.png";
import appImg from "../assets/apps.png";
import foodImg from "../assets/texi.png";
import teaImg from "../assets/tea.png";
import payoneImg from "../assets/payone.png";
import foodloverImg from "../assets/foodlover.png";
import claImg from "../assets/calcutor.png";
import pawImg from "../assets/paw.png";
import emergencyImg from "../assets/emrgency.png";
import englishImg from "../assets/english.png";

const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio showcasing skills, projects, and achievements with smooth animations.",
    techStack: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/Badsha012",
    live: "https://my-portfolio-pied-ten-85.vercel.app/",
    image: portfolioImg,
  },
  {
    title: "App Gallery",
    description:
      "A responsive app gallery showcasing multiple applications with clean UI.",
    techStack: ["React", "Tailwind"],
    github: "https://github.com/Badsha012",
    live: "https://app-galary.vercel.app/",
    image: appImg,
  },
  {
    title: "English জানালা",
    description:
      "An interactive English learning platform for beginners.",
    techStack: ["React", "Tailwind"],
    github: "https://github.com/Badsha012",
    live: "https://english-janala-rho.vercel.app/",
    image: englishImg,
  },
  {
    title: "Food Service",
    description:
      "Food ordering website with cart system and responsive UI.",
    techStack: ["React", "Tailwind"],
    github: "https://github.com/Badsha012/texi_burger",
    live: "https://texi-burger.vercel.app/",
    image: foodImg,
  },
  {
    title: "Tea House",
    description:
      "Elegant landing page for a tea brand.",
    techStack: ["HTML", "Tailwind"],
    github: "https://github.com/Badsha012/tea_house",
    live: "https://badsha012.github.io/tea_house/",
    image: teaImg,
  },
  {
    title: "Payone Mobile App",
    description:
      "Digital payment mobile app inspired UI.",
    techStack: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/Badsha012/Payoo_Mobile_App",
    live: "https://payoo-mobile-app-lyart.vercel.app/",
    image: payoneImg,
  },
  {
    title: "Emergency Service",
    description:
      "Quick access emergency service web app.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Badsha012/Emergency-_Service",
    live: "https://badsha012.github.io/Emergency-_Service/",
    image: emergencyImg,
  },
  {
    title: "Calculator App",
    description:
      "Modern calculator with smooth interaction.",
    techStack: ["HTML", "Tailwind", "JavaScript"],
    github: "https://github.com/Badsha012/simple_calculator",
    live: "https://simple-calculator-one-rosy.vercel.app/",
    image: claImg,
  },
  {
    title: "Local Food Lovers",
    description:
      "Food discovery platform built with MERN stack.",
    techStack: ["React", "Node", "MongoDB"],
    github:
      "https://github.com/Badsha012/Local_Food_Loers_Network_Client_Side",
    live: "https://soft-speculoos-46237b.netlify.app/",
    image: foodloverImg,
  },
  {
    title: "Warm Paws",
    description:
      "Pet care and adoption platform.",
    techStack: ["React", "Tailwind", "Node", "MongoDB"],
    github: "https://github.com/Badsha012",
    live: "https://clinquant-pegasus-bec19e.netlify.app/",
    image: pawImg,
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="relative bg-slate-950 text-slate-200 py-24 px-4 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Projects<span className="text-blue-500">.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A collection of projects that reflect my experience in frontend
            development and modern UI design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-2xl bg-slate-900/30 border border-slate-800/50 backdrop-blur-sm hover:bg-slate-900/60 hover:border-blue-500/40 transition-all"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-100 text-slate-900 rounded-lg text-sm font-medium flex items-center gap-1 hover:scale-105 transition"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-1 hover:bg-blue-700 hover:scale-105 transition"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-950 border border-slate-800 text-slate-300 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

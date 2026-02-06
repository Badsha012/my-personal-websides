import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

/* ===================== Images ===================== */
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

/* ===================== Projects Data ===================== */
const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "Modern animated portfolio built with React and Tailwind.",
    techStack: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/Badsha012",
    live: "https://my-portfolio-pied-ten-85.vercel.app/",
    image: portfolioImg,
  },
  {
    title: "App Gallery",
    description: "Responsive app gallery with clean UI design.",
    techStack: ["React", "Tailwind"],
    github: "https://github.com/Badsha012",
    live: "https://app-galary.vercel.app/",
    image: appImg,
  },
  {
    title: "English Janala",
    description: "Interactive English learning platform.",
    techStack: ["React", "Tailwind"],
    github: "https://github.com/Badsha012",
    live: "https://english-janala-rho.vercel.app/",
    image: englishImg,
  },
  {
    title: "Food Service",
    description: "Food ordering system with cart functionality.",
    techStack: ["React", "Tailwind"],
    github: "https://github.com/Badsha012/texi_burger",
    live: "https://texi-burger.vercel.app/",
    image: foodImg,
  },
  {
    title: "Tea House",
    description: "Elegant tea brand landing page.",
    techStack: ["HTML", "Tailwind"],
    github: "https://github.com/Badsha012/tea_house",
    live: "https://badsha012.github.io/tea_house/",
    image: teaImg,
  },
  {
    title: "Payone App",
    description: "Digital payment inspired UI application.",
    techStack: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/Badsha012/Payoo_Mobile_App",
    live: "https://payoo-mobile-app-lyart.vercel.app/",
    image: payoneImg,
  },
  {
    title: "Emergency Service",
    description: "Quick access emergency services web app.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Badsha012/Emergency-_Service",
    live: "https://badsha012.github.io/Emergency-_Service/",
    image: emergencyImg,
  },
  {
    title: "Calculator App",
    description: "Modern calculator with smooth UI.",
    techStack: ["HTML", "Tailwind", "JavaScript"],
    github: "https://github.com/Badsha012/simple_calculator",
    live: "https://simple-calculator-one-rosy.vercel.app/",
    image: claImg,
  },
  {
    title: "Local Food Lovers",
    description: "MERN stack food discovery platform.",
    techStack: ["React", "Node", "MongoDB"],
    github:
      "https://github.com/Badsha012/Local_Food_Loers_Network_Client_Side",
    live: "https://soft-speculoos-46237b.netlify.app/",
    image: foodloverImg,
  },
  {
    title: "Warm Paws",
    description: "Pet care and adoption platform.",
    techStack: ["React", "Tailwind", "Node", "MongoDB"],
    github: "https://github.com/Badsha012",
    live: "https://clinquant-pegasus-bec19e.netlify.app/",
    image: pawImg,
  },
];

/* ===================== Component ===================== */
const Project = () => {
  return (
    <section className="bg-slate-950 text-white py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            My Projects<span className="text-blue-500">.</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            A showcase of my frontend and full-stack development work.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500 transition duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-3 py-2 rounded-lg text-sm flex items-center gap-1 hover:scale-105 transition"
                  >
                    <Github size={16} /> GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 px-3 py-2 rounded-lg text-sm flex items-center gap-1 hover:bg-blue-700 hover:scale-105 transition"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-800 px-2 py-1 rounded-md"
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

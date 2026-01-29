import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing my skills, education, projects, and achievements built with React and Tailwind CSS.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://my-portfolio-pied-ten-85.vercel.app/",
    image: "../assets/portfilo.png",
  },
  {
    title: "App Galary",
    description: "Admin dashboard for e-commerce platform with analytics, charts, and product management features.",
    techStack: ["React", "Chart.js", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/ecommerce-dashboard",
    live: "https://app-galary.vercel.app/",
    image: "/images/ecommerce.png",
  },
  {
    title: "Social Media App",
    description: "Full-stack social media application allowing users to post, like, comment and follow others.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/social-media-app",
    live: "#",
    image: "/images/social.png",
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with private rooms and emoji support.",
    techStack: ["React", "Socket.io", "Node.js"],
    github: "#",
    live: "#",
    image: "/images/chat.png",
  },
  {
    title: "Task Manager",
    description: "Task management application with deadlines, priorities and notifications.",
    techStack: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    image: "/images/task.png",
  },
  {
    title: "Blog Platform",
    description: "Full-stack blog platform with Markdown support, comments, and admin panel.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    live: "#",
    image: "/images/blog.png",
  },
  {
    title: "Weather App",
    description: "Weather forecast application using OpenWeatherMap API and responsive UI.",
    techStack: ["React", "Tailwind CSS", "API"],
    github: "#",
    live: "#",
    image: "/images/weather.png",
  },
  {
    title: "Calculator App",
    description: "Simple calculator application with modern UI and keyboard support.",
    techStack: ["React", "Tailwind CSS"],
    github: "#",
    live: "#",
    image: "/images/calculator.png",
  },
  {
    title: "Food Delivery App",
    description: "Food ordering and delivery app with cart, payment and order tracking.",
    techStack: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    image: "/images/food.png",
  },
  {
    title: "Portfolio Admin Panel",
    description: "Admin panel to manage portfolio content, projects, and blog posts.",
    techStack: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    image: "/images/admin.png",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-blue-600">Projects</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Some of my recent projects showcasing my skills and experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col justify-between"
          >
            <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-500 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-700 hover:text-black font-medium"
                >
                  GitHub
                </a>
              )}
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-700 hover:text-black font-medium"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project
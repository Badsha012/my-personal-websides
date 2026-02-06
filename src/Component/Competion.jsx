import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const competitionsData = [
  {
    year: "2024",
    title: "ICPC DIU Dhaka Regional Contest",
    organization: "ICPC Asia Dhaka Regional",
    description:
      "Participated as a team competitor solving advanced algorithmic challenges.",
  },
  {
    year: "2025",
    title: "ICPC BUBT Dhaka Regional Contest",
    organization: "ICPC Asia Dhaka Regional",
    description:
      "Strengthened competitive programming, problem-solving, and teamwork skills.",
  },
  {
    year: "2024",
    title: "IUPAC DUET Programming Contest",
    organization: "DUET / IUPc",
    description:
      "Focused on algorithmic problem solving and optimized coding efficiency.",
  },
  {
    year: "2025",
    title: "Data Analysis Contest",
    organization: "DIU",
    description:
      "Applied analytical and data-driven approaches to solve real-world challenges.",
  },
];

const Competition = () => {
  return (
    <section className="mt-24 px-6">
      {/* Title */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold flex items-center justify-center gap-2 text-white">
          <Trophy className="w-7 h-7 text-yellow-400" />
          Programming Competitions
        </h3>
        <p className="text-slate-400 mt-2">
          ICPC and competitive programming participation.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {competitionsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl 
            bg-slate-900/60 backdrop-blur-lg 
            border border-slate-800 
            hover:border-blue-500/40 
            shadow-lg hover:shadow-blue-500/10 
            transition-all duration-300"
          >
            <span className="text-sm font-semibold text-blue-400">
              {item.year}
            </span>

            <h4 className="text-lg font-semibold text-white mt-1">
              {item.title}
            </h4>

            <p className="text-sm font-medium text-slate-300">
              {item.organization}
            </p>

            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Competition;

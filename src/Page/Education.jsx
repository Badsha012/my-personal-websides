import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  BookOpen,
  FlaskConical,
  Building2,
} from "lucide-react";

/* ===================== Education Data ===================== */
const educationData = [
  {
    year: "2010",
    title: "Primary Education",
    institute: "Chulkati Palash Kindergarten",
    icon: BookOpen,
    description:
      "Built foundational academic skills and completed primary education up to Class 4.",
  },
  {
    year: "2012",
    title: "Primary Completion Examination",
    institute: "Ranjitpur Secondary School",
    icon: School,
    description:
      "Successfully passed the equivalent Primary Completion Examination.",
  },
  {
    year: "2015",
    title: "Junior School Certificate (JSC)",
    institute: "Chulkati Ghanshyampur Secondary School",
    icon: School,
    description:
      "Completed lower secondary education and passed JSC examination.",
  },
  {
    year: "2018",
    title: "Secondary School Certificate (SSC) – Science",
    institute: "Chulkati Ghanshyampur Secondary School",
    icon: FlaskConical,
    description:
      "Specialized in Science group and successfully completed SSC.",
  },
  {
    year: "2020",
    title: "Higher Secondary Certificate (HSC) – Science",
    institute: "Shipyard School & College",
    icon: GraduationCap,
    description:
      "Completed Higher Secondary education while developing programming fundamentals.",
  },
  {
    year: "2022 - Present",
    title: "B.Sc. in Computer Science & Engineering",
    institute: "City University",
    icon: Building2,
    description:
      "Pursuing Bachelor's degree with focus on software development, algorithms, and professional skill growth.",
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative py-28 px-6 bg-slate-950 text-slate-200 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-extrabold flex items-center justify-center gap-3 text-white">
            <GraduationCap className="w-9 h-9 text-blue-500" />
            Education Journey
          </h2>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">
            A progressive academic journey shaping my technical foundation and professional growth.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-blue-500/40 ml-4 pl-10 space-y-14">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[30px] top-1 flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/30">
                  <Icon size={20} />
                </div>

                {/* Card */}
                <div
                  className="p-6 rounded-2xl 
                  bg-slate-900/60 backdrop-blur-xl 
                  border border-slate-800 
                  hover:border-blue-500/50 
                  hover:shadow-blue-500/10 
                  shadow-lg transition-all duration-300"
                >
                  <span className="text-sm font-semibold text-blue-400">
                    {edu.year}
                  </span>

                  <h3 className="text-lg font-semibold text-white mt-1">
                    {edu.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-300">
                    {edu.institute}
                  </p>

                  <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

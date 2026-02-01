import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  BookOpen,
  FlaskConical,
  Building2,
  Trophy,
} from "lucide-react";

/* ===================== Education Data ===================== */
const educationData = [
  {
    title: "Primary Education",
    institute: "Chulkati Palash Kindergarten",
    icon: BookOpen,
    description:
      "Started academic journey and completed studies up to Class 4, building the foundation of education.",
  },
  {
    title: "Equivalent Primary Completion Exam",
    institute: "Ranjitpur Secondary School",
    icon: School,
    description:
      "Successfully passed equivalent primary completion examination.",
  },
  {
    title: "Junior School Certificate (JSC)",
    institute: "Chulkati Ghanshyampur Secondary School",
    icon: School,
    description:
      "Admitted in Class 6 and successfully passed JSC examination in 2015.",
  },
  {
    title: "Secondary School Certificate (SSC) – Science",
    institute: "Chulkati Ghanshyampur Secondary School",
    icon: FlaskConical,
    description:
      "Continued studies in Science group and successfully completed SSC examination in 2018.",
  },
  {
    title: "Higher Secondary Certificate (HSC) – Science",
    institute: "Shipyard School & College",
    icon: GraduationCap,
    description:
      "Completed Higher Secondary education in Science group and passed in 2020 while developing technical and programming skills.",
  },
  {
    title: "Bachelor's Degree",
    institute: "City University",
    icon: Building2,
    description:
      "Admitted to City University in 2022 and continuing higher education alongside professional skill development.",
  },
];

/* ===================== Competitions ===================== */
const competitionsData = [
  {
    year: "2024",
    title: "ICPC Dhaka Regional Contest",
    organization: "ICPC Asia Dhaka Regional",
    description:
      "Participated as a team competitor solving algorithmic challenges.",
  },
  {
    year: "2025",
    title: "ICPC Dhaka Regional Contest",
    organization: "ICPC Asia Dhaka Regional",
    description:
      "Strengthened competitive programming and teamwork experience.",
  },
  {
    year: "2024",
    title: "IUPAC DUET Programming Contest",
    organization: "DUET / IUPc",
    description:
      "Focused on algorithmic problem solving and coding efficiency.",
  },
  {
    year: "2025",
    title: "Data Analysis Contest",
    organization: "DIU",
    description:
      "Applied analytical skills to solve real-world data problems.",
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-4 bg-slate-950 text-slate-200 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* ================= Title ================= */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold flex items-center justify-center gap-2 text-white">
            <GraduationCap className="w-8 h-8 text-blue-500" />
            Education Journey
          </h2>
          <p className="text-slate-400 mt-2 max-w-2xl mx-auto">
            My academic path and learning progression over the years.
          </p>
        </div>

        {/* ================= Timeline ================= */}
        <div className="relative ml-4">
          {/* Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-0 top-0 w-[2px] h-full bg-blue-500/60 origin-top"
          />

          <div className="space-y-10 pl-6">
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Dot */}
                  <span className="absolute -left-[34px] top-6 flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full shadow-lg">
                    <Icon size={18} />
                  </span>

                  {/* Card */}
                  <div className="p-6 rounded-2xl bg-slate-900/40 backdrop-blur border border-slate-800 hover:border-blue-500/40 transition">
                    <h3 className="text-lg font-semibold text-white">
                      {edu.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-300">
                      {edu.institute}
                    </p>
                    <p className="text-sm text-slate-400 mt-2">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= Competitions ================= */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold flex items-center justify-center gap-2 text-white">
              <Trophy className="w-7 h-7 text-yellow-400" />
              Programming Competitions
            </h3>
            <p className="text-slate-400 mt-2">
              ICPC and competitive programming participation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {competitionsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/40 backdrop-blur border border-slate-800 hover:border-blue-500/40 transition"
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
                <p className="text-sm text-slate-400 mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

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
    year: "2007 – 2011",
    title: "Primary Education",
    institute: "Chulkati Palash Kindergarten",
    icon: BookOpen,
    description:
      "Started academic journey and completed studies up to Class 4, building the foundation of education.",
  },
  {
    year: "2012",
    title: "Equivalent Primary Completion Exam",
    institute: "Ranjitpur Secondary School",
    icon: School,
    description:
      "Successfully passed equivalent primary completion examination.",
  },
  {
    year: "2013 – 2015",
    title: "Junior School Certificate (JSC)",
    institute: "Chulkati Ghanshyampur Secondary School",
    icon: School,
    description:
      "Admitted in Class 6 and successfully passed JSC examination in 2015.",
  },
  {
    year: "2016 – 2018",
    title: "Secondary School Certificate (SSC) – Science",
    institute: "Chulkati Ghanshyampur Secondary School",
    icon: FlaskConical,
    description:
      "Continued studies in Science group and successfully completed SSC examination in 2018.",
  },
  {
    year: "2018 – 2020",
    title: "Higher Secondary Certificate (HSC) – Science",
    institute: "Shipyard School & College",
    icon: GraduationCap,
    description:
      "Completed Higher Secondary education in Science group and successfully passed in 2020 while developing technical and programming skills.",
  },
  {
    year: "2022 – Present",
    title: "Bachelor's Degree",
    institute: "City University",
    icon: Building2,
    description:
      "Admitted to City University in 2022 and continuing higher education alongside professional skill development.",
  },
];

/* ===================== Competition / ICPC Data ===================== */
const competitionsData = [
  {
    year: "2024",
    title: "ICPC Dhaka Regional Contest",
    organization: "ICPC Asia Dhaka Regional",
    description:
      "Participated in ICPC Asia Dhaka Regional Programming Contest 2024 as a team competitor, solving algorithmic and problem-solving challenges.",
  },
  {
    year: "2025",
    title: "ICPC Dhaka Regional Contest",
    organization: "ICPC Asia Dhaka Regional",
    description:
      "Participated again in ICPC Asia Dhaka Regional Programming Contest 2025, strengthening competitive programming and teamwork experience.",
  },
  {
    year: "2024",
    title: "IUPAC DUET Programming Contest",
    organization: "DUET / IUPc",
    description:
      "Participated in IUPAC DUET programming contest focusing on algorithmic problem solving and coding efficiency.",
  },
  {
    year: "2025",
    title: "Data Analysis Contest",
    organization: "DIU",
    description:
      "Participated in Data Analysis Contest 2025 at DIU, applying analytical and technical skills to solve real-world data problems.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-16 px-4 max-w-5xl mx-auto">
      {/* ================= Education Title ================= */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center gap-2">
          <GraduationCap className="w-8 h-8" /> Education Journey
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          My academic path and learning progression over the years.
        </p>
      </div>

      {/* ================= Timeline ================= */}
      <div className="relative ml-4">
        {/* Animated Progress Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute left-0 top-0 w-[2px] h-full bg-blue-600 origin-top"
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
                {/* Timeline Dot with Icon */}
                <span className="absolute -left-[34px] top-5 flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full shadow-lg">
                  <Icon size={18} />
                </span>

                {/* Content */}
                <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition bg-white">
                  <span className="text-sm font-semibold text-blue-600">
                    {edu.year}
                  </span>

                  <h3 className="text-lg font-semibold mt-1">
                    {edu.title}
                  </h3>

                  <p className="text-sm font-medium text-gray-700">
                    {edu.institute}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ================= Competitions Section ================= */}
      <div className="mt-20">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2">
            <Trophy className="w-7 h-7" /> Programming Competitions
          </h3>
          <p className="text-gray-500 mt-2">
            Participation in ICPC and competitive programming contests.
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
              className="p-6 rounded-2xl shadow-md hover:shadow-xl transition bg-white"
            >
              <span className="text-sm font-semibold text-blue-600">
                {item.year}
              </span>

              <h4 className="text-lg font-semibold mt-1">
                {item.title}
              </h4>

              <p className="text-sm font-medium text-gray-700">
                {item.organization}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

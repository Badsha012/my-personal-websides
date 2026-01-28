import { motion } from "framer-motion";
import { 
  SiC, 
  SiCplusplus, 
  SiPython, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss, 
  SiGit,
  SiHtml5, // সঠিক নাম SiHtml5
  SiCss3   // CSS এর জন্য SiCss3 যোগ করা হয়েছে
} from "react-icons/si";

const skillsData = [
  {
    category: "Programming Languages",
    description: "আমি problem-solving এবং high-performance code জন্য languages ব্যবহার করি।",
    skills: [
      { name: "C", icon: <SiC className="text-red-500" />, level: 80 },
      { name: "C++", icon: <SiCplusplus className="text-blue-600" />, level: 85 },
      { name: "Python", icon: <SiPython className="text-yellow-400" />, level: 90 },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" />, level: 85 },
    ],
  },
  {
    category: "Frontend",
    description: "Responsive এবং modern UI বানানোর জন্য React & Tailwind CSS ব্যবহার করি।",
    skills: [
      { name: "React", icon: <SiReact className="text-blue-400" />, level: 80 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, level: 80 },
      { name: "HTML/CSS", icon: <div className="flex gap-1"><SiHtml5 className="text-orange-500" /><SiCss3 className="text-blue-500" /></div>, level: 90 },
    ],
  },
  {
    category: "Backend & Database",
    description: "Node.js & MongoDB দিয়ে scalable backend systems বানাই।",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, level: 80 },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: 80 },
    ],
  },
  {
    category: "Tools",
    description: "Version control এবং deployment tools ব্যবহার করি।",
    skills: [
      { name: "Git & GitHub", icon: <SiGit className="text-orange-500" />, level: 90 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-950 text-slate-200 px-4 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white">
            My Skills<span className="text-blue-500">.</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400">
            নিচে আমার professional skill set এবং proficiency level দেখতে পারছো।
            প্রতিটি category ও skill এর icon সহ।
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-14">
          {skillsData.map((group) => (
            <div key={group.category}>
              {/* Category Header */}
              <h3 className="text-2xl font-semibold text-white mb-2">{group.category}</h3>
              <p className="text-slate-400 mb-5">{group.description}</p>

              {/* Skills List */}
              <div className="grid gap-6 md:grid-cols-2">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-3">
                      <motion.div
                        className="bg-blue-500 h-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
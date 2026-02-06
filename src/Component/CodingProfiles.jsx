import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import codeforcesImg from "../assets/codeforces.png";
import leetcodeImg from "../assets/leatcode.png";
import githubImg from "../assets/github.png";
import codechefImg from "../assets/codechef.png";
import tophImg from "../assets/toph.png";
import beecrowdImg from "../assets/beecrowd.png";

const CodingProfiles = () => {
  const profiles = [
    {
      name: "GitHub",
      link: "https://github.com/Badsha012",
      desc: "Open-source projects and full-stack applications.",
      image: githubImg,
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/u/badsha061/",
      desc: "Solved 30+ problems in Data Structures & Algorithms.",
      image: leetcodeImg,
    },
    {
      name: "Codeforces",
      link: "https://codeforces.com/profile/mdbadshasheikh2022",
      desc: "Pupil • Active competitive programmer.",
      extra: "Rating: Pupil | 300+ Problems",
      image: codeforcesImg,
    },
    {
      name: "CodeChef",
      link: "https://www.codechef.com/users/badsha061",
      desc: "2★ Coder • Competitive programming contests.",
      extra: "2 Star | 800+ Problems Solved",
      image: codechefImg,
    },
    {
      name: "Toph",
      link: "https://toph.co/u/badshasheikh361",
      desc: "Active problem solver in national contests.",
      image: tophImg,
    },
    {
      name: "Beecrowd",
      link: "https://judge.beecrowd.com/en/profile/906475",
      desc: "Solved algorithmic and beginner-friendly problems.",
      image: beecrowdImg,
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-14 
          bg-gradient-to-r from-cyan-400 to-blue-500 
          bg-clip-text text-transparent"
        >
          Coding Profiles
        </motion.h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 border border-slate-800 
              rounded-2xl p-6 shadow-lg 
              hover:border-cyan-400 
              hover:shadow-cyan-500/20 
              transition-all duration-300"
            >
              {/* Logo */}
              <div className="flex justify-center mb-4">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="h-16 w-16 object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-center mb-2">
                {profile.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm text-center mb-2">
                {profile.desc}
              </p>

              {/* Extra Info */}
              {profile.extra && (
                <p className="text-cyan-400 text-xs text-center mb-4">
                  {profile.extra}
                </p>
              )}

              {/* Button */}
              <div className="flex justify-center">
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 
                  text-cyan-400 font-medium 
                  hover:text-white transition"
                >
                  Visit Profile <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;

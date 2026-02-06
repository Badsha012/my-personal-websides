import { Github, ExternalLink } from "lucide-react";
import codeforcesImg from "../assets/codeforces.png";
import leetcodeImg from "../assets/leatcode.png"; 
import githubImg from "../assets/github.png"; 

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
      link:"https://leetcode.com/u/badsha061/",
      desc: "Solved 30+ problems in Data Structures & Algorithms.",
      image: leetcodeImg,
    },
    {
      name: "Codeforces",
      link: "https://codeforces.com/profile/mdbadshasheikh2022",
      desc: "Active competitive programmer with contest experience.",
      image: codeforcesImg,
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-14 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Coding Profiles
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 
              hover:scale-105 hover:border-cyan-400 transition-all duration-300 
              shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Image */}
              <img
                src={profile.image}
                alt={profile.name}
                className="h-16 w-16 object-contain mb-4"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {profile.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-5">
                {profile.desc}
              </p>

              {/* Button */}
              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-white transition"
              >
                Visit Profile <ExternalLink size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;

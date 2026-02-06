import { Github, ExternalLink } from "lucide-react";

const CodingProfiles = () => {
  const profiles = [
    {
      name: "GitHub",
      link: "https://github.com/yourusername",
      desc: "Open-source projects and full-stack applications.",
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/yourusername",
      desc: "Solved 300+ problems in Data Structures & Algorithms.",
    },
    {
      name: "Codeforces",
      link: "https://codeforces.com/profile/yourusername",
      desc: "Active competitive programmer.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Coding Profiles
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3">
              {profile.name}
            </h3>
            <p className="text-gray-600 mb-4">{profile.desc}</p>

            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
            >
              Visit Profile <ExternalLink size={18} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingProfiles;

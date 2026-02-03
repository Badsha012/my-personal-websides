import React from "react";

const LifeNav = () => {
  const items = [
    { id: "intro", label: "01 Introduction" },
    { id: "childhood", label: "02 Childhood" },
    { id: "education", label: "03 Education" },
    { id: "challenges", label: "04 Challenges" },
    { id: "future", label: "05 Future" },
  ];

  return (
    <div className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2">
      <ul className="space-y-4 text-sm font-bold text-blue-500">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-slate-400 hover:text-blue-400 transition"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LifeNav;

import React from 'react';

// Professional Section Title Component
const SectionTitle = ({ number, title }) => {
  return (
    <div className="mb-6">
      <span className="text-blue-400 font-semibold tracking-widest">
        {number}
      </span>
      <h3 className="text-3xl font-bold text-white mt-1">
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;

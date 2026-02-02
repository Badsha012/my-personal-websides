import React from "react";
import Introduction from "./Introduction";
import Childhood from "./Childhood";
import Educational from "./Educational";
import Challenges from "./Challenges";
import Future from "./Future";

import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import LifeNav from "./LifeNav";

const Life = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24">

      {/* Sticky Navigation */}
      <LifeNav />

      {/* Page Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          About My Life
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          My journey, values, education, challenges, and future vision.
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-12 space-y-24 shadow-xl">

        <SectionWrapper id="intro">
          <SectionTitle number="01" title="Introduction" />
          <Introduction />
        </SectionWrapper>

        <SectionWrapper id="childhood">
          <SectionTitle number="02" title="Childhood & Family" />
          <Childhood />
        </SectionWrapper>

        <SectionWrapper id="education">
          <SectionTitle number="03" title="Educational Journey" />
          <Educational />
        </SectionWrapper>

        <SectionWrapper id="challenges">
          <SectionTitle number="04" title="Challenges & Lessons" />
          <Challenges />
        </SectionWrapper>

        <SectionWrapper id="future">
          <SectionTitle number="05" title="Future Goals" />
          <Future />
        </SectionWrapper>

      </div>
    </section>
  );
};

export default Life;

import React, { useState } from "react";
import profileImg from "../assets/badsha.jpg";

const Introduction = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="bg-slate-900 rounded-xl p-6 md:p-10 shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-8">
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profileImg}
            alt="Sheikh Badsha"
            className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-500 shadow-md"
          />
        </div>

        {/* Text Content */}
        <div>
          <p className="text-slate-300 leading-relaxed text-justify">
            আমার নাম{" "}
            <span className="text-white font-semibold">শেখ বাদশা</span>। আমি একজন
            স্বপ্নবান, পরিশ্রমী ও লক্ষ্যনিষ্ঠ শিক্ষার্থী, যার প্রধান লক্ষ্য হলো
            জ্ঞান ও দক্ষতার মাধ্যমে নিজেকে একজন দায়িত্বশীল ও সক্ষম পেশাজীবী
            হিসেবে গড়ে তোলা।
          </p>

          {/* Read More Content */}
          {readMore && (
            <p className="text-slate-300 leading-relaxed text-justify mt-4">
              শৈশব থেকেই সততা, পরিশ্রম ও আত্মসম্মানকে জীবনের মূল মূল্যবোধ হিসেবে
              ধারণ করে বেড়ে উঠেছি, যা আমার চিন্তাভাবনা ও সিদ্ধান্ত গ্রহণে গভীর
              প্রভাব ফেলেছে।
              <br /><br />
              প্রযুক্তিনির্ভর এই আধুনিক বিশ্বে টিকে থাকার জন্য বাস্তব দক্ষতার
              গুরুত্ব আমি গভীরভাবে উপলব্ধি করেছি। এজন্য প্রোগ্রামিং, প্রযুক্তি
              এবং যুক্তিভিত্তিক সমস্যা সমাধানের প্রতি আমার আগ্রহ ক্রমশ বৃদ্ধি
              পেয়েছে।
              <br /><br />
              ভবিষ্যতে উচ্চশিক্ষা ও গবেষণার মাধ্যমে জ্ঞানচর্চায় অবদান রাখা এবং
              এমন কাজ করা—যা সমাজ ও মানুষের জীবনে ইতিবাচক পরিবর্তন আনবে—এটাই
              আমার দীর্ঘমেয়াদি লক্ষ্য।
            </p>
          )}

          {/* Read More Button */}
          <button
            onClick={() => setReadMore(!readMore)}
            className="mt-4 text-blue-400 hover:text-blue-300 font-medium transition"
          >
            {readMore ? "Read Less ↑" : "Read More ↓"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

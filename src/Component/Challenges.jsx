import React, { useState } from "react";
import img1 from "../assets/challenges-1.jpg";
import img2 from "../assets/challenes-02.webp";
import img3 from "../assets/challenes-3.jpg";

const Challenges = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="bg-slate-900 rounded-2xl p-5 md:p-10 shadow-xl">
      
   

      {/* Text First (Better for Mobile UX) */}
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-justify mb-5">
        জীবন কখনও সহজ ছিল না। প্রতিটি দিন নতুন চ্যালেঞ্জ নিয়ে এসেছে, যা আমাকে
        মানসিকভাবে শক্তিশালী এবং দায়িত্বশীল করে গড়ে তুলেছে। একাডেমিক চাপ,
        প্রতিযোগিতা এবং ব্যক্তিগত অনিশ্চয়তার মুখোমুখি হয়ে আমি শিখেছি—নিজের উপর
        বিশ্বাস হারালে সামনে এগোনো সম্ভব নয়।
      </p>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <img
          src={img1}
          alt="Mental Strength"
          className="rounded-xl h-40 sm:h-44 md:h-48 w-full object-cover"
        />
        <img
          src={img2}
          alt="Time Management"
          className="rounded-xl h-40 sm:h-44 md:h-48 w-full object-cover"
        />
        <img
          src={img3}
          alt="Growth and Hope"
          className="rounded-xl h-40 sm:h-44 md:h-48 w-full object-cover"
        />
      </div>

      {/* Read More Content */}
      {readMore && (
        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed text-justify mt-4">
          <p>
            কঠিন সময় আমাকে শিখিয়েছে ধৈর্য ও অধ্যবসায়ের প্রকৃত মূল্য। ব্যর্থতা কখনো
            আমাকে থামিয়ে দেয়নি; বরং প্রতিটি ব্যর্থতা আমাকে নতুনভাবে শুরু করার সাহস
            দিয়েছে।
          </p>

          <p>
            সময় ব্যবস্থাপনা আমার জীবনের একটি গুরুত্বপূর্ণ শিক্ষা। প্রতিদিনের কাজ
            পরিকল্পনা করা, অগ্রগতি মূল্যায়ন করা এবং নিজের সীমাবদ্ধতা চিহ্নিত করা
            আমাকে আরও আত্মনির্ভরশীল করেছে।
          </p>

          <p>
            প্রতিটি চ্যালেঞ্জ আমাকে শিখিয়েছে—সমস্যার মধ্যেই সমাধানের সম্ভাবনা
            লুকিয়ে থাকে।
          </p>
        </div>
      )}

      {/* Button */}
      <button
        onClick={() => setReadMore(!readMore)}
        className="mt-6 w-full sm:w-auto text-center px-5 py-2 rounded-lg
                   bg-blue-500/10 text-blue-400 hover:bg-blue-500/20
                   transition font-medium"
      >
        {readMore ? "Read Less ▲" : "Read More ▼"}
      </button>
    </section>
  );
};

export default Challenges;

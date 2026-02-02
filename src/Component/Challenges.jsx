import React, { useState } from "react";
import img1 from "../assets/challenges-1.jpg";
import img2 from "../assets/challenes-02.webp";
import img3 from "../assets/challenes-3.jpg";

const Challenges = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="bg-slate-900 rounded-xl p-6 md:p-10 shadow-lg">
     

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <img
          src={img1}
          alt="Mental Challenge"
          className="rounded-xl object-cover h-48 w-full shadow-md"
        />
        <img
          src={img2}
          alt="Time Management"
          className="rounded-xl object-cover h-48 w-full shadow-md"
        />
        <img
          src={img3}
          alt="Growth & Hope"
          className="rounded-xl object-cover h-48 w-full shadow-md"
        />
      </div>

      {/* Content */}
      <p className="text-slate-300 leading-relaxed text-justify">
        জীবন কখনও সহজ ছিল না। প্রতিটি দিন নতুন চ্যালেঞ্জ নিয়ে এসেছে, যা আমাকে
        মানসিকভাবে শক্তিশালী এবং দায়িত্বশীল করে গড়ে তুলেছে। একাডেমিক চাপ,
        প্রতিযোগিতা এবং ব্যক্তিগত অনিশ্চয়তার মুখোমুখি হয়ে আমি শিখেছি—নিজের উপর
        বিশ্বাস হারালে সামনে এগোনো সম্ভব নয়।
      </p>

      {readMore && (
        <p className="text-slate-300 leading-relaxed text-justify mt-4">
          কঠিন সময় আমাকে শিখিয়েছে ধৈর্য ও অধ্যবসায়ের প্রকৃত মূল্য। ব্যর্থতা কখনো
          আমাকে থামিয়ে দেয়নি; বরং প্রতিটি ব্যর্থতা আমাকে নতুনভাবে শুরু করার সাহস
          দিয়েছে। আমি উপলব্ধি করেছি যে জীবন কোনো সরল পথ নয়—এটি সমস্যা, শেখা এবং
          আত্মউন্নয়নের ধারাবাহিক প্রক্রিয়া।
          <br /><br />
          সময় ব্যবস্থাপনা আমার জীবনের একটি গুরুত্বপূর্ণ শিক্ষা। প্রতিদিনের কাজ
          পরিকল্পনা করা, অগ্রগতি মূল্যায়ন করা এবং নিজের সীমাবদ্ধতা চিহ্নিত করা
          আমাকে আরও আত্মনির্ভরশীল করেছে। এই অভ্যাস শুধু শিক্ষাজীবনে নয়, ব্যক্তিগত
          জীবনেও আমাকে স্থির ও সংগঠিত থাকতে সাহায্য করেছে।
          <br /><br />
          প্রতিটি চ্যালেঞ্জ আমাকে শিখিয়েছে—সমস্যার মধ্যেই সমাধানের সম্ভাবনা
          লুকিয়ে থাকে। আত্মবিশ্বাস, ধৈর্য এবং ধারাবাহিক প্রচেষ্টার মাধ্যমে যেকোনো
          লক্ষ্য অর্জন সম্ভব। এই শিক্ষা আমাকে ভবিষ্যতের যেকোনো কঠিন পরিস্থিতিতে
          দৃঢ়ভাবে এগিয়ে যাওয়ার শক্তি দেয়।
        </p>
      )}

      {/* Button */}
      <button
        onClick={() => setReadMore(!readMore)}
        className="mt-5 text-blue-400 hover:text-blue-300 font-medium transition"
      >
        {readMore ? "Read Less ▲" : "Read More ▼"}
      </button>
    </section>
  );
};

export default Challenges;

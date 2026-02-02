import React, { useState } from "react";
import childhoodImg from "../assets/chilhood.jpg"; 

const Childhood = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="bg-slate-900 rounded-xl p-6 md:p-10 shadow-lg">
     

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={childhoodImg}
            alt="Childhood & Family"
            className="rounded-xl shadow-md object-cover w-full max-w-sm border border-slate-700"
          />
        </div>

        {/* Content */}
        <div className="md:w-2/3">
          <p className="text-slate-300 leading-relaxed text-justify">
            আমি বাংলাদেশের একটি সাধারণ কিন্তু মূল্যবোধসম্পন্ন পরিবারে জন্মগ্রহণ
            করেছি। আমাদের পরিবারের আর্থিক অবস্থা খুব স্বচ্ছল ছিল না, তবে নৈতিকতা,
            পারস্পরিক সম্মান এবং দায়িত্ববোধের দিক থেকে আমরা সমৃদ্ধ ছিলাম। আমার
            শৈশব বিলাসিতায় নয়, বরং পরিশ্রম, ত্যাগ এবং সততার শিক্ষায় গড়ে উঠেছে।
          </p>

          {readMore && (
            <p className="text-slate-300 leading-relaxed text-justify mt-4">
              আমার বাবা একজন কৃষক। তার জীবন ছিল সংগ্রাম, ধৈর্য এবং কঠোর পরিশ্রমের
              এক বাস্তব প্রতিচ্ছবি। তিনি কখনো মুখে বড় উপদেশ দেননি, কিন্তু তার
              প্রতিদিনের কাজই ছিল আমার সবচেয়ে বড় শিক্ষা—পরিশ্রমের কোনো বিকল্প
              নেই। আর্থিক সীমাবদ্ধতা সত্ত্বেও তিনি আমাদের শিক্ষাকে সর্বোচ্চ
              গুরুত্ব দিয়েছেন এবং আমাদের স্বপ্নকে কখনো সীমাবদ্ধ করেননি।
              <br /><br />
              আমার মা একজন গৃহিণী এবং আমাদের পরিবারের নীরব শক্তি। সংসারের প্রতিটি
              দায়িত্ব নিষ্ঠার সঙ্গে পালন করে তিনি আমাদের মানসিক দৃঢ়তা ও নৈতিক
              চেতনা গড়ে তুলেছেন। তার সহমর্মিতা, ধৈর্য এবং নিঃস্বার্থ ত্যাগ আমাকে
              জীবনের কঠিন সময়গুলোতে স্থির থাকতে শিখিয়েছে।
              <br /><br />
              আমরা দুই ভাই। বড় ভাইয়ের দায়িত্ববোধ ও সংগ্রাম আমাকে বাস্তব জীবনের
              গুরুত্ব বুঝিয়েছে। কৃষক পরিবারের সন্তান হিসেবে আমি খুব কাছ থেকে
              শিখেছি—যেমন একটি বীজ সময় ও যত্ন ছাড়া ফল দেয় না, তেমনি জীবনের
              সাফল্যও ধারাবাহিক পরিশ্রমের ফল।
              <br /><br />
              আমার শৈশব আমাকে কৃতজ্ঞ হতে শিখিয়েছে। সীমাবদ্ধতা আমাকে দুর্বল করেনি;
              বরং দৃঢ় করেছে। পরিবারের দেওয়া সততা, পরিশ্রম ও দায়িত্ববোধই আজও আমার
              জীবনের সবচেয়ে শক্ত ভিত্তি।
            </p>
          )}

          {/* Read More Button */}
          <button
            onClick={() => setReadMore(!readMore)}
            className="mt-5 text-blue-400 font-medium hover:text-blue-300 transition"
          >
            {readMore ? "Read Less ▲" : "Read More ▼"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Childhood;

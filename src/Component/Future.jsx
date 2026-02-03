import React from "react";
import futureImg1 from "../assets/future-3.jpg";
import futureImg2 from "../assets/future.jpg";

const Future = () => {
  return (
    <section className="bg-slate-900 rounded-xl p-6 md:p-10 shadow-lg">
      
      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-8">
        <img
          src={futureImg1}
          alt="Future Vision"
          className="rounded-xl h-44 sm:h-48 w-full object-cover shadow-md"
        />
         <p className="text-slate-300 leading-relaxed text-justify text-[15px] md:text-base">
          আমার ভবিষ্যৎ লক্ষ্য হলো উচ্চশিক্ষা গ্রহণ করা এবং নিজেকে একজন দক্ষ,
          দায়িত্বশীল ও যোগ্য পেশাজীবী হিসেবে প্রতিষ্ঠিত করা। আমি এমন একটি
          অবস্থানে পৌঁছাতে চাই, যেখানে আমার জ্ঞান ও দক্ষতা সমাজের কল্যাণে
          ব্যবহার করতে পারবো। ব্যক্তিগত সাফল্যের পাশাপাশি সমাজে ইতিবাচক
          অবদান রাখাই আমার দীর্ঘমেয়াদি স্বপ্ন।
        </p>
        <img
          src={futureImg2}
          alt="Academic & Career Goal"
          className="rounded-xl h-44 sm:h-48 w-full object-cover shadow-md"
        />
         <p className="text-slate-300 leading-relaxed text-justify text-[15px] md:text-base mt-4">
          আমি বিশ্বাস করি, পরিশ্রম, সততা এবং আত্মবিশ্বাস থাকলে কোনো লক্ষ্যই
          অসম্ভব নয়। জীবনের প্রতিটি ধাপে আমি নিজেকে উন্নত করার চেষ্টা করবো এবং
          শেখার প্রক্রিয়া কখনো বন্ধ করবো না। কারণ আমার কাছে জীবন মানে শুধু
          এগিয়ে যাওয়া নয়, বরং প্রতিদিন নিজের সেরা সংস্করণ হয়ে ওঠা।
        </p>
      </div>

      {/* Content */}
      
    </section>
  );
};

export default Future;

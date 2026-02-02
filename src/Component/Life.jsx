import React from "react";
import Introduction from "./Introduction";
import Childhood from "./Childhood";
import Educational from "./Educational";
import Challenges from "./Challenges";

const Life = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-white">About My Life</h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          My journey, values, academic growth, and future aspirations.
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 space-y-12 shadow-lg">
        {/* Introduction */}

        <Introduction></Introduction>
        
        <Childhood></Childhood>



        {/* Education */}
        <Educational></Educational>
        

        {/* Challenges */}
       <Challenges></Challenges>

        {/* Future Goals */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">
            Future Goals
          </h3>
          <p className="text-slate-300 leading-relaxed">
            আমার ভবিষ্যৎ লক্ষ্য হলো উচ্চশিক্ষা গ্রহণ করা এবং নিজেকে একজন দক্ষ ও
            যোগ্য পেশাজীবী হিসেবে প্রতিষ্ঠিত করা। আমি এমন একটি অবস্থানে পৌঁছাতে
            চাই, যেখানে আমার জ্ঞান ও দক্ষতা সমাজের কল্যাণে ব্যবহার করতে পারবো।
            শুধু ব্যক্তিগত সাফল্য নয়, আমি চাই আমার কাজ মানুষের উপকারে আসুক। আমি
            বিশ্বাস করি, একজন শিক্ষিত ও সচেতন মানুষ সমাজে ইতিবাচক পরিবর্তন আনতে
            পারে। তাই আমার স্বপ্ন শুধু নিজের উন্নতি নয়, বরং সমাজের উন্নয়নের অংশ
            হওয়া। আমার জীবন এখনো চলমান একটি যাত্রা। প্রতিদিন নতুন অভিজ্ঞতা, নতুন
            শিক্ষা এবং নতুন চ্যালেঞ্জ আমাকে সমৃদ্ধ করছে। আমি বিশ্বাস করি,
            পরিশ্রম, সততা এবং আত্মবিশ্বাস থাকলে কোনো লক্ষ্যই অসম্ভব নয়। জীবনের
            প্রতিটি ধাপে আমি নিজেকে উন্নত করার চেষ্টা করবো এবং কখনও শেখা বন্ধ
            করবো না। কারণ আমার কাছে জীবন মানে শুধু বেঁচে থাকা নয়, বরং প্রতিনিয়ত
            নিজের সেরা সংস্করণ হয়ে ওঠা।
          </p>
        </div>
      </div>
    </section>
  );
};

export default Life;

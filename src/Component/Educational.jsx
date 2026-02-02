import React, { useState } from "react";
import educationImg from "../assets/book.jpg";

const Educational = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="bg-slate-900 rounded-xl p-6 md:p-10 shadow-lg">
      <h3 className="text-3xl font-bold text-blue-500 mb-6">
        Educational Journey
      </h3>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Image */}
        <div className="md:w-1/3">
          <img
            src={educationImg}
            alt="Educational Journey"
            className="rounded-xl shadow-md border border-slate-700 object-cover w-full"
          />
        </div>

        {/* Content */}
        <div className="md:w-2/3">
          <p className="text-slate-300 leading-relaxed text-justify">
            আমার শিক্ষাজীবন ছিল চ্যালেঞ্জ, অধ্যবসায় এবং ধারাবাহিক শেখার সমন্বয়ে গড়া
            একটি দীর্ঘ পথচলা। প্রতিটি ধাপ আমাকে শুধু একাডেমিক জ্ঞানই দেয়নি, বরং
            মানসিক দৃঢ়তা, দায়িত্ববোধ এবং আত্মবিশ্বাস গড়ে তুলতে সাহায্য করেছে।
            শৈশব থেকে উচ্চশিক্ষা পর্যন্ত এই যাত্রা আমাকে আজকের অবস্থানে পৌঁছে
            দিয়েছে।
          </p>

          {readMore && (
            <p className="text-slate-300 leading-relaxed text-justify mt-4">
              আমার শিক্ষাজীবনের সূচনা হয় <span className="text-white font-medium">
              Chulkati Palash Kindergarten</span>-এ, যেখানে প্রাথমিক শিক্ষার
              ভিত্তি গড়ে ওঠে। পরবর্তীতে <span className="text-white font-medium">
              Ranjitpur Secondary School</span> এবং
              <span className="text-white font-medium">
              Chulkati Ghanshyampur Secondary School</span>-এ অধ্যয়ন করে আমি
              সফলভাবে JSC ও SSC সম্পন্ন করি। এই সময় থেকেই বিজ্ঞানভিত্তিক বিষয়,
              বিশেষ করে গণিত ও যুক্তিভিত্তিক চিন্তাধারার প্রতি আমার আগ্রহ
              বৃদ্ধি পায়।
              <br /><br />
              এরপর <span className="text-white font-medium">
              Shipyard School & College</span>-এ বিজ্ঞান বিভাগ থেকে HSC সম্পন্ন
              করি। কলেজ জীবন আমাকে প্রযুক্তি ও প্রোগ্রামিংয়ের প্রতি আকৃষ্ট করে।
              একাডেমিক পড়াশোনার পাশাপাশি অনলাইন রিসোর্স ব্যবহার করে নিজেকে আধুনিক
              দক্ষতায় প্রস্তুত করতে শুরু করি।
              <br /><br />
              বর্তমানে আমি <span className="text-white font-medium">
              City University</span>-এ স্নাতক পর্যায়ে অধ্যয়নরত। বিশ্ববিদ্যালয়
              জীবন আমাকে শিখিয়েছে যে ভালো ফলাফলের পাশাপাশি বাস্তব দক্ষতা,
              সমস্যা সমাধানের ক্ষমতা এবং গবেষণামূলক মনোভাব অত্যন্ত গুরুত্বপূর্ণ।
              প্রযুক্তি, প্রোগ্রামিং ও Artificial Intelligence-এর প্রতি আমার
              আগ্রহ দিন দিন বৃদ্ধি পাচ্ছে।
              <br /><br />
              আমার শিক্ষাজীবন আমাকে শিখিয়েছে—সাফল্য একটি ধারাবাহিক প্রক্রিয়া।
              নিয়মিত পরিশ্রম, আত্মনিয়ন্ত্রণ এবং শেখার মানসিকতাই দীর্ঘমেয়াদি
              সফলতার চাবিকাঠি।
            </p>
          )}

          {/* Button */}
          <button
            onClick={() => setReadMore(!readMore)}
            className="mt-5 text-blue-400 hover:text-blue-300 font-medium transition"
          >
            {readMore ? "Read Less ▲" : "Read More ▼"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Educational;

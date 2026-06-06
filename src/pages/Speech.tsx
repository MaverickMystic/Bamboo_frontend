import { useState } from "react";
import type { UIEvent } from "react";
import sensei from "../assets/sensei.png";

const Speech = () => {
  // State tracking the active reading progress percentage (0 to 100)
  const [readPercentage, setReadPercentage] = useState(0);

  // Scroll tracking handler calculating progress mathematically
  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;

    // Total scrollable buffer room inside the card box
    const totalScrollableDistance = scrollHeight - clientHeight;

    if (totalScrollableDistance > 0) {
      const percentage = (scrollTop / totalScrollableDistance) * 100;
      // Clamps the output between 0 and 100
      setReadPercentage(Math.min(100, Math.max(0, percentage)));
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-10 pb-16">
      {/* 
        LAYOUT CONTROLLER:
        - Mobile/Tablet: Vertical flex stack.
        - Large Screens (lg:): Fixed split container. `lg:h-[520px]` caps the height 
          so the whole component fits onto the user's screen immediately.
      */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch w-full lg:h-[520px]">
        
        {/* GRAPHIC CARD BLOCK (LEFT COLUMN on Desktop) */}
        <div className="w-full max-w-[340px] sm:max-w-[360px] lg:max-w-none lg:w-2/5 flex flex-col justify-between relative bg-gradient-to-t from-[#4EA65F]/20 via-[#D8EFD3]/40 to-white/10 rounded-3xl shadow-sm border border-gray-100 p-6 pt-10 min-h-[380px] lg:min-h-0 lg:h-full mx-auto lg:mx-0">
          
          {/* Status Ribbon Tag */}
          <div className="absolute top-4 left-4 bg-[#4EA65F] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm z-20">
            Founder
          </div>

          {/* Image Container */}
          <div className="w-full flex justify-center items-end mt-auto h-56 sm:h-64 lg:h-[320px]">
            <img
              src={sensei}
              alt="Tin Zar Win"
              className="w-auto h-full object-contain z-10 transition-transform duration-300 scale-110"
            />
          </div>
          
          {/* Nameplate baseline */}
          <div className="mt-4 text-center z-20 bg-white/90 backdrop-blur-sm pb-2 px-4 rounded-xl shadow-sm border border-white/50">
            <h4 className="font-bold text-darkgreen text-base tracking-wide">Tin Zar Win</h4>
            <p className="text-xs text-gray-500 font-medium">Representative Director</p>
          </div>
        </div>

        {/* CONTENT CARD BLOCK WITH INTERNAL SCROLLER (RIGHT COLUMN on Desktop) */}
        <div 
          onScroll={handleScroll}
          className="flex-1 w-full bg-white p-6 pt-0 sm:p-8 lg:p-10 lg:pt-0 rounded-3xl shadow-sm border border-gray-100 flex flex-col lg:h-full lg:overflow-y-auto custom-scrollbar"
        >
          
          {/* STICKY HEADER BOUNDARY */}
          <div className="sticky top-0 bg-white pt-6 pb-3 z-10 w-full">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4EA65F] mb-3 tracking-wide text-center lg:text-left">
              Message from the Founder
            </h2>
            
            {/* READING TRACKER TRACK LAYOUT (Removed max-w constraint, matching title alignment) */}
            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden mx-auto lg:mx-0">
              <div 
                className="h-full bg-[#4EA65F] transition-all duration-75 ease-out rounded-full"
                style={{ width: `${readPercentage}%` }} 
              />
            </div>
          </div>
          
          {/* Text Streams */}
          <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed text-justify sm:text-left mt-2">
            <p>
              My name is <strong className="text-darkgreen font-semibold">Tin Zar Win</strong>, the representative of <span className="font-semibold text-darkgreen">BAMBOO Japanese Language School</span>. 
              I studied abroad in Japan for four years from 2009 to 2013. I spent my first two years mastering the language at a local Japanese institute, followed by two intensive years studying Auto CAD at an engineering vocational academy.
            </p>
            
            <p className="border-l-4 border-[#D8EFD3] pl-4 italic text-gray-600 bg-gray-50/30 py-2 rounded-r-xl">
              "After graduating from a vocational academy, I returned to Myanmar and established a Japanese language school in Myanmar's capital, Naypyidaw, in 2017. That school is now ours."
            </p>
            
            <p>
              Thanks to your incredible support, the number of students at our school has steadily increased, prompting us to scale and expand our building infrastructure three times. 
            </p>

            <p>
              In addition to studying in Japan, many students also wanted to build long-term careers in Japan, so in 2023 we established a specialized recruitment agency, <span className="font-semibold text-darkgreen">SHWE YIN MON Overseas Employment Agency</span>. 
              We are proudly licensed as an official sending agency by the Myanmar government <span className="text-xs font-mono bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">(Licence No. 081/2023)</span>.
            </p>
            
            <p className="font-medium text-darkgreen/90">
              The reason I established a Japanese language school in Myanmar is because I wanted the people of Myanmar to study Japanese and improve their lives by working in Japan or in a job using Japanese here at home.
            </p>

            <p>
              I was fortunate enough to have lived and studied smoothly in Japan for four wonderful years, so I strongly believed I could be a reliable, enduring bridge connecting our young generation with exceptional global futures.
            </p>

            <p className="pb-4">
              Although our school has only recently been established on this global timeline, we hope that with your continued trust and support, we can help bring true progress and happiness to many families across Myanmar.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Speech;
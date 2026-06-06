import { IoLocation } from "react-icons/io5";

type SchoolProps = {
  image: string;
  name: string;
  location?: string;
  link: string;
  className?: string;
};

const SchoolCard = ({
  image,
  name,
  link,
  location,
  className = "",
}: SchoolProps) => {
  const isReversed = className.includes("flex-row-reverse");

  return (
    <div className="w-full mt-10 md:mt-14">
      <div 
        className={`flex flex-col items-center gap-6 p-4 md:p-0 md:gap-0 w-full
          ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}`}
      >
        
        {/* IMAGE BLOCK CONTAINER */}
        <div className="w-full md:w-2/5 flex justify-center">
          <img
            className={`w-full max-w-[450px] h-[220px] sm:h-[260px] md:max-w-none md:w-full md:h-[280px] object-cover rounded-2xl
              ${isReversed ? "md:rounded-l-full md:rounded-r-none" : "md:rounded-r-full md:rounded-l-none"}`}
            src={image}
            alt={name}
          />
        </div>

        {/* METADATA CONTENT PANEL CONTAINER */}
        <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-12 lg:px-20">
          
          {/* 1. Scaled header text down slightly (e.g., md:text-xl instead of 2xl, lg:text-2xl instead of 3xl) */}
          <h1 className="font-extrabold text-lg sm:text-xl md:text-xl lg:text-2xl text-greensage mb-2 leading-snug">
            {name}
          </h1>
          
          {/* 2. Scaled location tracking text down (text-xs to sm:text-sm) */}
          <h2 className="flex items-center justify-center md:justify-start gap-1 text-xs sm:text-sm text-gray-500 mb-4">
            <IoLocation className="text-red-700 text-base shrink-0" />
            <span className="leading-relaxed">{location}</span>
          </h2>
          
          {/* 3. Scaled button text down (text-xs to md:text-sm) and padded slightly tighter */}
          <div className="w-full max-w-[240px] sm:max-w-xs md:max-w-[240px]">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-2 text-xs sm:text-sm md:text-sm hover:bg-greensage border-greensage text-greensage hover:text-white font-semibold text-center transition-all duration-200 py-2 px-4 w-full rounded-full shadow-sm"
            >
              Link To School
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SchoolCard;
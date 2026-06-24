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
    <div className="w-full flex justify-center px-4 md:px-8 py-10 md:py-14">

      <div
        className={`w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center
        ${isReversed ? "md:[&>*:first-child]:order-2" : ""}`}
      >

        {/* IMAGE SECTION (smaller + balanced) */}
        <div className="md:col-span-6 relative group">

          <div className="absolute -inset-3 bg-gradient-to-tr from-greensage/10 to-transparent rounded-[2.5rem] blur-2xl" />

          <div
            className={`relative overflow-hidden shadow-xl
              ${isReversed
                ? "rounded-l-[220px] rounded-r-xl"
                : "rounded-r-[220px] rounded-l-xl"
              }`}
          >
            <img
              src={image}
              alt={name}
              className="w-full h-[220px] sm:h-[280px] md:h-[340px] object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>

        {/* TEXT SECTION (more breathing room now) */}
        <div className="md:col-span-6 flex flex-col justify-center gap-6 md:gap-8">

          <div className="space-y-2">
            <p className="text-xs tracking-[0.25em] text-gray-400 uppercase">
              Partner School
            </p>

            <h1 className="text-3xl md:text-4xl font-extrabold text-greensage leading-tight">
              {name}
            </h1>
          </div>

          {location && (
            <div className="flex items-center gap-2 text-gray-600">
              <IoLocation className="text-red-500 text-lg" />
              <span className="text-sm md:text-base">{location}</span>
            </div>
          )}

          <div className="w-14 h-[2px] bg-greensage/40 rounded-full" />


          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-greensage text-greensage font-medium hover:bg-greensage hover:text-white transition"
          >
            学校へのリンク
          </a>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
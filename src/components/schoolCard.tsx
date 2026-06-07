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
    // Removed outer constraints so the row can expand edge-to-edge
    <div className={`w-full ${className.replace("flex-row-reverse", "")}`}>
      
      <div 
        className={`flex flex-col md:flex-row items-center w-full gap-6 md:gap-0
          ${isReversed ? "md:flex-row-reverse" : ""}`}
      >
        {/* IMAGE: Fixed size on laptop, completely touching the screen edge */}
        <img
          className={`w-full max-w-[450px] h-[200px] md:max-w-none md:w-[600px] md:h-[350px] object-cover shrink-0
            ${isReversed ? "md:rounded-l-full rounded-2xl md:rounded-r-none" : "md:rounded-r-full rounded-2xl md:rounded-l-none"}`}
          src={image}
          alt={name}
        />
        
        {/* TEXT CONTENT CONTAINER */}
        {/* - md:justify-start / md:items-start ensures content stays close to the image edge when reversed or normal.
          - max-w-[500px] prevents the text box from stretching all the way to the other side of the laptop frame.
        */}
        <div 
          className={`w-full flex flex-col items-center p-6 md:py-0 md:max-w-[500px]
            ${isReversed 
              ? "md:items-end md:text-right md:mr-12 md:ml-auto" 
              : "md:items-start md:text-left md:ml-12 md:mr-auto"
            }`}
        >
          <h1 className="font-extrabold text-center md:text-left text-xl md:text-2xl text-greensage mb-3">
            {name}
          </h1>
          
          <h2 className={`flex flex-row text-md justify-center items-center mb-7 text-gray-700
            ${isReversed ? "md:justify-end" : "md:justify-start"}`}>
          
            <IoLocation className="text-red-700 text-lg shrink-0 mr-1" />
            <span>{location}</span>
          </h2>
          
          <div className="flex justify-center items-center w-full md:justify-start">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 text-sm md:text-lg lg:text-lg hover:bg-greensage text-center hover:text-white cursor-pointer px-6 border-greensage p-2 w-full max-w-[280px] md:max-w-[240px] rounded-full block transition-colors duration-200"
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
import Card from "../components/card";
import { FaSchool } from "react-icons/fa6";
import { GiShakingHands } from "react-icons/gi";
import { BiBookBookmark } from "react-icons/bi";

import MyCarousel from "../components/carousel";
import Banner from "../components/banner";
import Welcome from "../components/welcome";
import ImageSlider from "../components/ImageSlider";
import school from "../assets/school.jpg";
import school1 from "../assets/bambooCard.png";
import school2 from "../assets/bambooStu.jpg";
import { Link } from "react-router";
import partner from "../assets/partner.png";

const Home = () => {
  const images = [school1, school, school2];

  return (
    // overflow-x-hidden acts as a safety guard preventing horizontal screen shaking on any mobile browser
    <div className="w-full overflow-x-hidden pb-24">
      
      {/* HERO SECTION CONTAINER */}
      <div className="relative mt-12 sm:mt-16 md:mt-20 flex flex-col items-center w-full">
        {/* HERO TEXT */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-greensage tracking-wide uppercase break-words w-full leading-tight">
            LEARN JAPANESE WITH US
          </h1>

          <h3 className="mt-4 inline-flex items-center justify-center rounded-full bg-white/90 shadow-md px-4 sm:px-6 py-1.5 text-xs sm:text-sm md:text-base text-black font-medium tracking-wide">
            さあ、日本語を始めよう。
          </h3>
        </div>

        {/* HERO SLIDER - Zero negative margins to ensure absolute safety against text hiding */}
        <div className="w-full mt-6 sm:mt-8 md:mt-10 z-0">
          <ImageSlider images={images} />
        </div>
      </div>

      {/* WELCOME SECTION */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-12 max-w-6xl mx-auto text-center">
        <Welcome />
      </div>

      {/* INFO SECTION */}
      <div className="mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h1 className="mb-8 text-center text-2xl font-extrabold text-black sm:text-3xl tracking-wide">
          INFO
        </h1>

        {/* 
          FLUID GRID LAYOUT:
          - Mobile (0px - 639px): 1 Column stack
          - Tablet Portrait/Landscape (640px - 1023px): 2 Columns for comfortable layout structure
          - Laptop/Desktop (1024px+): 3 Columns side-by-side
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          <Link to="/school" className="block w-full transition-transform duration-200 hover:-translate-y-1">
            <Card title="Partner Language School" icon={<GiShakingHands />} />
          </Link>

          <Link to="/about/schooloverview" className="block w-full transition-transform duration-200 hover:-translate-y-1">
            <Card title="School Overview" icon={<FaSchool />} />
          </Link>

          {/* sm:col-span-2 tells the 3rd card to expand center-wise on tablets so the grid remains beautiful */}
          <Link to="/course" className="block w-full sm:col-span-2 lg:col-span-1 transition-transform duration-200 hover:-translate-y-1">
            <Card title="Our Courses" icon={<BiBookBookmark />} />
          </Link>
        </div>
      </div>

      {/* BANNER SECTION */}
      <div className="mt-20 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        <Banner />
      </div>

      {/* ARTICLES CAROUSEL SECTION */}
      <div className="mt-20 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        <h1 className="mb-8 text-center text-2xl font-bold text-black sm:text-3xl tracking-wide">
          Latest Articles
        </h1>
        <div className="w-full">
          {/* 
            Note: If your custom <MyCarousel /> component requires a string, passing a responsive 
            CSS fallback works beautifully. If it supports no deviceType prop inside its library settings, 
            you can cleanly drop the deviceType prop altogether here.
          */}
          <MyCarousel deviceType="desktop" />
        </div>
      </div>

      {/* PARTNER SCHOOLS ROW SECTION */}
      <div className="mt-24 w-full px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* 
          Stacks text & image vertically on mobile and portrait tablets (lg:flex-row-reverse turns off 
          the vertical view ONLY on wider screens where room is guaranteed).
        */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-16 w-full text-center lg:text-left">
          
          {/* IMAGE BLOCK - Uses smooth proportional sizing */}
          <div className="w-full max-w-[480px] lg:w-1/2 flex justify-center">
            <img
              className="h-60 sm:h-72 md:h-80 lg:h-[400px] w-full rounded-2xl object-cover shadow-md"
              src={partner}
              alt="Partner School"
            />
          </div>

          {/* TEXT BLOCK - Expands gracefully on tablet viewports */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center">
            <h1 className="mb-6 text-2xl sm:text-3xl md:text-4xl font-extrabold text-greensage leading-snug w-full">
              Partner Schools
            </h1>

            <Link
              to="/school"
              className="inline-block rounded-full border-2 border-greensage px-8 py-3 text-sm md:text-base font-bold text-greensage transition-all duration-200 hover:bg-greensage hover:text-white shadow-sm hover:shadow-md"
            >
              Click to See More
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;
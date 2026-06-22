import Card from "../components/card";
import { FaSchool } from "react-icons/fa6";
import { GiShakingHands } from "react-icons/gi";
import { BiBookBookmark } from "react-icons/bi";

import MyCarousel from "../components/carousel";
import Banner from "../components/banner";
import Welcome from "../components/welcome";
import ImageSlider from "../components/ImageSlider";
import { Link } from "react-router";

const Home = () => {
  const deviceType = (() => {
    if (typeof window === "undefined") return "desktop";
    const width = window.innerWidth;
    if (width < 464) return "mobile";
    if (width < 1024) return "tablet";
    return "desktop";
  })();

  const images = [
    "https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782146389/bambooCard_h0g1sx.png",
    "https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782146388/school_zhwdfs.jpg",
    "https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782146383/bambooStu_gh4h3g.jpg"
  ];

  return (
    <div className="w-full overflow-hidden">
     
     
{/* HERO SECTION CONTAINER */}
<div className="relative mt-30 flex flex-col items-center">
  
  {/* HERO TEXT - Now sits naturally at the top */}
  <div className="relative z-10 flex flex-col items-center text-center px-4">
    <h1 className="text-2xl font-extrabold text-greensage md:text-6xl lg:text-7xl tracking-wide">
      LEARN JAPANESE WITH US
    </h1>

    <h3 className="mt-4 inline-flex items-center justify-center rounded-full bg-white/90 shadow-md px-4 py-1 text-sm md:text-base text-black">
      さあ、日本語を始めよう。
    </h3>
  </div>

  {/* HERO SLIDER - Pulled upward using a negative top margin */}
  <div className="w-full -mt-8 md:-mt-16 lg:-mt-20 z-0">
    <ImageSlider images={images} />
  </div>

</div>
      {/* WELCOME */}
      <div className="flex flex-col items-center justify-center text-center">
        <Welcome />
      </div>

      {/* INFO SECTION */}
   <div className="mt-16 px-4">
  <h1 className="mb-4 text-center text-2xl font-extrabold text-black md:text-3xl">
    INFO
  </h1>

  <div className="flex justify-center">
    {/* 1. Changed grid-cols-1 to grid-cols-2 for mobile screens.
      2. Set md:grid-cols-3 to revert back to a standard 3-column row layout on laptops/desktops.
    */}
    <div className="grid grid-cols-2 gap-4 w-full max-w-sm md:max-w-none md:grid-cols-3 md:gap-10">
      
      <Link to="/school">
        <Card title="Partner Language School" icon={<GiShakingHands />} />
      </Link>

      <Link to="/about/schooloverview">
        <Card title="School Overview" icon={<FaSchool />} />
      </Link>

      {/* 3. Added 'col-span-2 md:col-span-1' so this card spans full width 
           on mobile but behaves normally as a single unit on desktop layout breaks.
      */}
      <Link to="/course" className="col-span-2 md:col-span-1">
        <Card title="Our Courses" icon={<BiBookBookmark />} />
      </Link>

    </div>
  </div>
</div>
      {/* BANNER */}
      <div className="mt-16 px-4">
        <Banner />
      </div>

      {/* ARTICLES */}
      <div className="mt-16">
        <h1 className="mb-4 text-center text-2xl font-bold text-black">
          Latest Articles
        </h1>

        <MyCarousel deviceType={deviceType} />
      </div>

      {/* PARTNER SCHOOLS */}
      <div className="mt-20 w-full px-4">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row-reverse">
          <img
            className="h-100 w-120 object-cover md:h-96 md:w-96"
            src={"https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782146391/partner_qjzmzo.png"}
            alt="Partner School"
          />

          <div className="text-center font-bold text-greensage mb-5 md:text-left">
            <h1 className="mb-3 text-2xl md:text-4xl">Partner Schools</h1>

            <Link
              to="/school"
              className="rounded-full border-2 border-greensage px-5 py-2 text-sm transition hover:bg-greensage hover:text-white md:text-lg"
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
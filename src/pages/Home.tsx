import Card from "../components/card";
import { FaSchool } from "react-icons/fa6";
import { GiShakingHands } from "react-icons/gi";
import { BiBookBookmark } from "react-icons/bi";

import MyCarousel from "../components/carousel";
import Banner from "../components/banner";
import Welcome from "../components/welcome";
import ImageSlider from "../components/ImageSlider";
import { Link } from "react-router";

// 1. Import Framer Motion
import { motion } from "framer-motion";

// 2. Define reusable animation variants for clean code
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
}as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delays the appearance of each child card slightly
    },
  },
};

const Home = () => {
  const deviceType = (() => {
    if (typeof window === "undefined") return "desktop";
    const width = window.innerWidth;
    if (width < 464) return "mobile";
    if (width < 1024) return "tablet";
    return "desktop";
  })();

  const images = [
    "https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782547799/bambooCard1_ibljig.png",
    "https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782146388/school_zhwdfs.jpg",
    "https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782146383/bambooStu_gh4h3g.jpg"
  ];

  return (
    <div className="w-full overflow-hidden">
      
      {/* HERO SECTION CONTAINER */}
      <div className="relative  md:mt-30 flex flex-col items-center">
        
        {/* HERO TEXT - Animates immediately on load */}
        <motion.div 
          className="relative z-10 flex flex-col items-center text-center px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-2xl font-extrabold text-greensage md:text-6xl lg:text-7xl tracking-wide">
            LEARN JAPANESE WITH US
          </h1>

          <h3 className="mt-4 inline-flex items-center justify-center rounded-full bg-white/90 shadow-md px-4 py-1 text-sm md:text-base text-black">
            さあ、日本語を始めよう。
          </h3>
        </motion.div>

        {/* HERO SLIDER */}
        <div className="w-full -mt-8 md:-mt-16 lg:-mt-20 z-0">
          <ImageSlider images={images} />
        </div>
      </div>

      {/* WELCOME - Smoothly fades up when 20% visible on screen */}
      <motion.div 
        className="flex flex-col items-center justify-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <Welcome />
      </motion.div>

      {/* INFO SECTION - Staggers the appearance of the 3 cards */}
      <motion.div 
        className="mt-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h1 className="mb-4 text-center text-2xl font-extrabold text-black md:text-3xl">
          INFO
        </h1>

        <div className="flex justify-center">
          <motion.div 
            className="grid grid-cols-2 gap-4 w-full max-w-sm md:max-w-none md:grid-cols-3 md:gap-10"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Link to="/school">
                <Card title="提携語学学校" icon={<GiShakingHands />} />
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link to="/about/schooloverview">
                <Card title="学校概要" icon={<FaSchool />} />
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="col-span-2 md:col-span-1">
              <Link to="/course">
                <Card title="当校のコース" icon={<BiBookBookmark />} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* BANNER */}
      <motion.div 
        className="mt-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <Banner />
      </motion.div>

      {/* ARTICLES */}
      <motion.div 
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h1 className="mb-4 text-center text-2xl font-bold text-black">
          Latest Articles
        </h1>
        <MyCarousel deviceType={deviceType} />
      </motion.div>

      {/* PARTNER SCHOOLS - Features an elegant split scroll transition */}
      <div className="mt-20 w-full px-4">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row-reverse">
          {/* Image slides in slightly from the right */}
          <motion.img
            className="h-100 w-120 object-cover md:h-96 md:w-96"
            src={"https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782146391/partner_qjzmzo.png"}
            alt="Partner School"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Content slides in slightly from the left */}
          <motion.div 
            className="text-center font-bold text-greensage mb-5 md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="mb-3 text-2xl text-center md:text-4xl">提携校</h1>

            <Link
              to="/school"
              className="rounded-full border-2 border-greensage px-5 py-2 text-sm transition hover:bg-greensage hover:text-white md:text-lg"
            >
              クリックして詳細をご覧ください
            </Link>
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Home;
import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 bg-gray-50/50 p-6 sm:p-8 rounded-3xl">
        
        {/* IMAGE CONTAINER */}
        <div className="w-full max-w-[320px] md:max-w-none md:w-1/2 flex justify-center">
          <img
            className="w-full h-64 sm:h-80 md:h-[350px] lg:h-[400px] object-cover rounded-2xl shadow-sm"
            src={banner}
            alt="School Banner"
          />
        </div>
        
        {/* CONTENT CONTAINER */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-greensage mb-4 tracking-wide w-full">
            日本語学校の運営
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-greensage/90 leading-relaxed max-w-xl">
            2017年にBamboo Japanese Language Schoolを設立しました。
            日本語能力検定N5～N2相当の授業を実施しています。受講者は年々増えており、約100名が受講しています。
          </p>
        </div>

      </div>
    </div>
  );
};

export default Banner;
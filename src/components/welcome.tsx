const Welcome = () => {
  return (
    <div className="text-center px-4 sm:px-6 mx-auto max-w-4xl mt-12 md:mt-16">
      {/* HEADER */}
      <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl mb-6 text-black tracking-wide">
        Welcome From Our School
      </h1>
      
      {/* TEXT CONTAINER */}
      <div className="flex flex-col gap-4 text-gray-700 max-w-3xl mx-auto">
        <p className="text-sm sm:text-base md:text-xl font-medium text-darkgreen leading-relaxed">
          We are dedicated to empowering Myanmar students with the Japanese
          language and cultural understanding.
        </p>
        <p className="text-sm sm:text-base md:text-xl font-medium text-darkgreen leading-relaxed">
          Whether you're preparing for study in Japan, seeking better career
          opportunities, or simply passionate about learning, our school offers
          structured courses, native and certified instructors, and personalized
          support to help you succeed.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
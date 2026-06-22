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
          私たちは、ミャンマーの学生たちが日本語と日本文化への理解を深められるよう尽力して​​います。
        </p>
        <p className="text-sm sm:text-base md:text-xl font-medium text-darkgreen leading-relaxed">
          日本留学の準備、より良いキャリアアップを目指す方、あるいは単に学びたいという情熱をお持ちの方など、どなたにも当校は体系的なコース、資格を持った講師陣、そして一人ひとりに合わせたサポートを提供し、皆様の成功を支援します。
        </p>
      </div>
    </div>
  );
};

export default Welcome;

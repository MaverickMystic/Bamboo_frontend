import { useState } from "react";
import type { UIEvent } from "react";

const Speech = () => {
  const [readPercentage, setReadPercentage] = useState(0);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;

    const totalScrollableDistance = scrollHeight - clientHeight;

    if (totalScrollableDistance > 0) {
      const percentage = (scrollTop / totalScrollableDistance) * 100;
      setReadPercentage(Math.min(100, Math.max(0, percentage)));
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 md:px-8 mt-15 pb-16">
      <div className="flex mt-30 flex-col lg:flex-row gap-6 md:gap-10 items-stretch w-full lg:h-[520px]">
        
        <div className="w-full max-w-[340px] sm:max-w-[360px] md:max-w-none lg:w-2/5 flex flex-col justify-between relative bg-gradient-to-t from-[#4EA65F]/20 via-[#D8EFD3]/40 to-white/10 rounded-3xl shadow-sm border border-gray-100 p-6 pt-10 min-h-[380px] lg:min-h-0 lg:h-full mx-auto lg:mx-0">
          
          <div className="absolute top-4 left-4 bg-[#4EA65F] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm z-20">
            Founder
          </div>

          <div className="w-full flex justify-center items-end mt-auto h-56 sm:h-64 md:h-[320px]">
            <img
              src={"https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782146389/sensei_qht1cb.png"}
              alt="Tin Zar Win"
              className="w-auto h-full object-contain z-10 transition-transform duration-300 scale-110"
            />
          </div>

          <div className="mt-4 text-center z-20 bg-white/90 backdrop-blur-sm pb-2 px-4 rounded-xl shadow-sm border border-white/50">
            <h4 className="font-bold text-darkgreen text-base tracking-wide">Tin Zar Win</h4>
            <p className="text-xs text-gray-500 font-medium">Representative Director</p>
          </div>
        </div>

        <div
          onScroll={handleScroll}
          className="flex-1 w-full bg-white p-6 pt-0 sm:p-8 lg:p-10 lg:pt-0 rounded-3xl shadow-sm border border-gray-100 flex flex-col lg:h-full lg:overflow-y-auto custom-scrollbar"
        >
          <div className="sticky top-0 bg-white pt-6 pb-3 z-10 w-full">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4EA65F] mb-3 tracking-wide text-center lg:text-left">
              創設者からのメッセージ
            </h2>

            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden mx-auto lg:mx-0">
              <div
                className="h-full bg-[#4EA65F] transition-all duration-75 ease-out rounded-full"
                style={{ width: `${readPercentage}%` }}
              />
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed text-justify sm:text-left mt-2">
            <p>
              BAMBOO日本語学校の代表、ティン・ザー・ウィンと申します。2009年から2013年まで4年間、日本に留学しました。最初の2年間は現地の日本語学校で日本語を習得し、その後2年間は専門学校でAutoCADを集中的に学びました。
            </p>

            <p className="border-l-4 border-[#D8EFD3] pl-4 italic text-gray-600 bg-gray-50/30 py-2 rounded-r-xl">
              専門学校卒業後、ミャンマーに帰国し、2017年に首都ネピドーに日本語学校を設立しました。現在、その学校は私たちの学校となっています。
            </p>

            <p>
              皆様の多大なご支援のおかげで、当校の生徒数は着実に増加し、校舎を3倍に拡張することができました。
            </p>

            <p>
              日本での留学に加え、日本で長期的なキャリアを築きたいと考える生徒も多くいらっしゃったため、2023年には専門の人材紹介会社、
              SHWE YIN MON海外雇用エージェンシーを設立しました。
              私たちはミャンマー政府より正式な派遣機関として認可を受けています（認可番号：081/2023）。
            </p>

            <p className="font-medium text-darkgreen/90">
              私がミャンマーに日本語学校を設立した理由は、ミャンマーの人々に日本語を学び、日本での就労、あるいはミャンマー国内での日本語を使った仕事を通して、より良い生活を送ってほしいと願ったからです。
            </p>

            <p>
              私自身、幸運にも日本で4年間、充実した生活と留学を経験することができました。だからこそ、若い世代と輝かしいグローバルな未来を結びつける、信頼できる、そして永続的な架け橋になれると確信しています。
            </p>

            <p className="pb-4">
              当校はグローバルな視点で見るとまだ設立間もないですが、皆様の変わらぬ信頼とご支援を賜り、ミャンマーの多くのご家族に真の成長と幸せをお届けできるよう尽力してまいります。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speech;
const timeline = [
  {
    image:"https://bamboo-myanmar.com/wp-content/uploads/2023/06/IMG_5673.jpg",
    header: "December 2017: School Establishment",
    text: "私たちは、ミャンマーの首都であるネピドーに学校を設立しました。経済の中心地であるヤンゴンには多くの日本語学校が設立されていましたが、首都のネピドーには日本語学校がほとんどありませんでした。",
  },
  {
    image:
      "https://bamboo-myanmar.com/wp-content/uploads/2023/06/IMG_5671.jpg",
    header: "September 2018: School building renovation and",
    text: "設立後まもなく、受講を希望する方々から多くの問い合わせをいただくようになりました。当初は1クラスのみの小さな教室からスタートしたため、全員を収容することができず、すぐに教室を改装してスペースを拡張しました。",
  },
  {
    image:
      "https://bamboo-myanmar.com/wp-content/uploads/2023/06/IMG_9930.jpg",
    header: "November 2019: The school building",
    text: "その後、二度目の改装を行い、教室の数を増やしました。その結果、当初の1クラスから、同時に2クラスの授業を開講できるようになりました。また、日本語教師やスタッフを採用し、より多くのニーズに応えられる体制を整えました。さらに、日本の料理教室など、生徒たちが日本文化を体験できる様々なイベントも開催しました。",
  },
  {
    image:
      "https://bamboo-myanmar.com/wp-content/uploads/2023/06/IMG_9926.jpg",
    header: "January 2023: Establishment of a recruitment agency ",
    text: "私たちは、バンブー日本語学校の隣に人材紹介会社「シュエ・イン・モン（Shwe Yin Mon）」を設立しました。生徒たちの多くは、日本への留学だけでなく、日本で働くことを目標に日本語を勉強しています。こうした生徒たちの希望を叶えるため、私たちはミャンマー政府公認の技能実習生送り出し機関としてのライセンスを取得しました。ミャンマー人の採用をご検討中の企業様は、ぜひ当社までお問い合わせください。",
  },
  {
    image:
      "https://bamboo-myanmar.com/wp-content/uploads/2023/06/74d5d004bf00e8f80d6d9b4980257c60.jpg",
    header: "May 2023: New school building",
    text: "新たに3階建ての校舎を建設し、教室数を増やすとともに、多様なコースを新設しました。現在、当校では主に5つのコース（①ひらがなコース、②N5コース、③N4コース、④N3コース、⑤N2コース）を提供しています。N2コースは2023年に初めて開講され、当校でN5、N4、N3コースを学んだ生徒たちが引き続き学習を続けています。そのため、近い将来にN1コースを開講することも検討しています。ネピドーは行政の中心地であり、多くの政府高官や政府機関で働く人々が暮らしており、当校で日本語を学んでいます。また、私たちはバンブー日本語学校の隣に、人材紹介会社「シュエ・イン・モン（Shwe Yin Mon）」を設立しました。生徒たちの多くは、日本への留学だけでなく、日本で働くことを目標に日本語を勉強しています。こうした生徒たちの希望を叶えるため、私たちはミャンマー政府公認の技能実習生送り出し機関としてのライセンスを取得しました。ミャンマー人の採用をご検討中の企業様は、ぜひ当社までお問い合わせください。",
  },
];
function About() {
  return (
    <div className="relative w-full flex mt-15 justify-center">
      {/* vertical line */}
      <div className="absolute h-full border-l-2 border-gray-300 left-1/2 transform -translate-x-1/2"></div>
      <div className="space-y-12 py-10 w-full max-w-4xl">
        {timeline.map((item, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-center`}
          >
            {/* image card */}
            <div className="w-1/2 p-4">
              <img
                src={item.image}
                alt="Timeline"
                className="rounded-xl shadow-lg w-full"
              />
            </div>

            {/* dot and connector */}
            <div className="relative w-0.5 flex items-center bg-green-300 justify-center">
              <div className="flex items-center">
                {/* <div className={`w-14 flex items-center absolute  border-t-1 h-1 bg-red ${index%2 == 0 ? "left-1/2" : "right-1/2"}`}></div> */}
                <div className="w-4 h-4 bg-darkgreen rounded-full z-10"></div>
              </div>
            </div>

            {/* optional content */}
            <div className={`w-[45%] min-w-0 p-4 bg-red flex items-end text-sm text-gray-700`}>
              <div className="flex flex-col justify-center">
                <h1 className="text-lg md:text-xl font-bold">{item.header}</h1>
                <p className="break-words text-sm md:text-md mt-3 w-full">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;

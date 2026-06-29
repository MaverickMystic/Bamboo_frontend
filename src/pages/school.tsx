import SchoolCard from "../components/schoolCard";


const School = () => {
  return (
    <div className="  max-w-8xl   md:pt-10 md:px-0">
        <SchoolCard className="mt-10" link="https://samu-language.com/" name="SAMU Language school (サム教育学院) Uni" location=" 2 Chome-1-6 Hyakunincho, Shinjuku City, Tokyo 169-0073, Japan" image={"https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782146390/SMAU_cxbjpk.png"}/>
        <SchoolCard className="flex-row-reverse mt-10" link="https://www.kudan-japanese-school.com/" name="Kudan Institute of Japanese Language and culture Uni" location="Japan, 〒101-0061 Tokyo, Chiyoda City" image={"https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782146384/Kudan_rgfqju.jpg"}/>
        <SchoolCard className="mt-10" link="https://www.saitama-briller-jls.jp/" name="Saitama Briller Japanese Language School" location="3 Chome-21-11 Irumagawa, Sayama, Saitama 350-1305, Japan" image={"https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782146386/sai_dhfn7m.jpg"}/>
        <SchoolCard className="flex-row-reverse mt-10" link="https://jishugakkan.com/en/" name="Jishugakukan Japanese Language School" location="2-1-22 Mizue, Edogawa-ku, Tokyo 132-0011, Japan" image={"https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782146382/j_lp71ec.jpg"}/>
        <SchoolCard className="mt-10" link="https://earth-planet.gonna.jp/" name="E-planet Japanese Language School" location="Osaka, 536-0003, Japan" image={"https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782146384/ep_moxfco.jpg"}/>
        <SchoolCard className="flex-row-reverse mt-10" link="https://share.google/1oRHQxigU1YRXWiYr" name="ファースト・スタディ日本語学校 大阪泉大津校" location="Japan, 〒595-0025 Osaka, Izumiotsu, Asahicho," image={"https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782146382/jj_e3ffoa.webp"}/>
        <SchoolCard className="mt-10" link="https://nihongo.kaisei-group.co.jp/en/umeda.php" name="Kaisei academy japanese language school" location="6-18 Chayamachi, Kita Ward, Osaka, 530-0013, Japan" image={"https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782146384/kaisai_bgqfge.jpg"}/>
        <SchoolCard className="flex-row-reverse mt-10" link="https://share.google/kXZISsWFcMuNr2VTT" name="Abeno Japanese Langugage School" location="TSCAbeno, Building, 4F, 4 Chome-12-1 Hannancho, Abeno Ward, Osaka" image={"https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782146381/abeno_sntf6t.jpg"}/>
        <SchoolCard className="mt-10" link="https://www.icn.gr.jp/" name="I.C.NAGOYA語学学校ー英語・諸外国語・日本語ー" location="Japan, 〒453-0014 Aichi, Nagoya" image={"https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782146391/ic_ebccv3.png"}/>
    </div>
  );
};

export default School;
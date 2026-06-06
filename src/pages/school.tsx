import SchoolCard from "../components/schoolCard"
import JS from "../assets/j.jpg";
import kudan from "../assets/Kudan.jpg";
import sai from "../assets/sai.jpg";
import samu from "../assets/SMAU.png";
import eplanet from "../assets/ep.jpg";
import jj from "../assets/jj.webp";
import ks from "../assets/kaisai.jpeg";
import ab from "../assets/abeno.jpg";
import ic from "../assets/ic.png";

const School = () => {
  return (
    <div className="mt-30">
        <SchoolCard className="mt-10" link={"https://samu-language.com/"} name="SAMU Language school (サム教育学院) Uni" location=" 2 Chome-1-6 Hyakunincho, Shinjuku City, Tokyo 169-0073, Japan" image={samu}/>
        <SchoolCard className="flex-row-reverse mt-10" link={"https://www.kudan-japanese-school.com/"} name="Kudan Institute of Japanese Language and culture Uni" location="Japan, 〒101-0061 Tokyo, Chiyoda City" image={kudan}/>
        <SchoolCard className="mt-10" link={"https://www.saitama-briller-jls.jp/"} name="Saitama Briller Japanese Language School" location="3 Chome-21-11 Irumagawa, Sayama, Saitama 350-1305, Japan" image={sai}/>
        <SchoolCard className="flex-row-reverse mt-10" link={"https://jishugakkan.com/en/"} name="Jishugakukan Japanese Language School" location="2-1-22 Mizue, Edogawa-ku, Tokyo 132-0011, Japan" image={JS}/>
        <SchoolCard className="mt-10" link={"https://earth-planet.gonna.jp/"} name="E-planet Japanese Language School" location="Osaka, 536-0003, Japan" image={eplanet}/>
        <SchoolCard className="flex-row-reverse mt-10" link={"https://share.google/1oRHQxigU1YRXWiYr"} name="ファースト・スタディ日本語学校 大阪泉大津校" location="Japan, 〒595-0025 Osaka, Izumiotsu, Asahicho," image={jj}/>

        <SchoolCard className=" mt-10" link={"https://nihongo.kaisei-group.co.jp/en/umeda.php"} name="Kaisei academy japanese language school" location="6-18 Chayamachi, Kita Ward, Osaka, 530-0013, Japan" image={ks}/>
        <SchoolCard className="flex-row-reverse mt-10" link={"https://share.google/kXZISsWFcMuNr2VTT"} name="Abeno Japanese Langugage School" location="TSCAbeno, Building, 4F, 4 Chome-12-1 Hannancho, Abeno Ward, Osaka" image={ab}/>
        <SchoolCard className=" mt-10" link={"https://www.icn.gr.jp/"} name="I.C.NAGOYA語学学校ー英語・諸外国語・日本語ー" location="Japan, 〒453-0014 Aichi, Nagoya" image={ic}/>
    </div>
  )
}

export default School
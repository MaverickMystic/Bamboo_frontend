import banner from "../assets/banner.jpg"

const Banner = () => {
  return (
    <div className=" w-full ">
      <div className="justify-center items-center flex flex-row">
        <img
          className="md:w-120 md:h-120 w-60 h-60"
          src={banner}
        />
        <div className=" text-greensage justify-center font-bold">
          <h1 className="text-2xl text-center md:text-4xl m-2 p-2">日本語学校の運営</h1>
          <h1 className="text-center m-3 p-3 font-medium md:w-150 md:text-2xl">
            2017年にBamboo Japanese Language Schoolを設立しました。
            日本語能力検定N5～N2相当の授業を実施しています。受講者は年々増えており、約100名が受講しています。
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;

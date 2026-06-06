import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {
  images: string[];
};

const ImageSlider = ({ images }: Props) => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl">
      <img
        src={images[index]}
        className="h-[300px] w-full object-cover transition-all duration-500 md:h-[500px]"
      />

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/70"
      >
        <IoIosArrowBack size={24} />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/70"
      >
        <IoIosArrowForward size={24} />
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 cursor-pointer rounded-full transition-all ${
              i === index ? "w-4 bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
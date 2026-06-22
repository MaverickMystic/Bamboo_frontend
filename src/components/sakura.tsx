import { useEffect, useState } from "react";


const SakuraBackground = () => {
  const [petals, setPetals] = useState<number[]>([]);

  useEffect(() => {
    setPetals(Array.from({ length: 25 }, (_, i) => i));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {petals.map((i) => (
        <img
          key={i}
          src={"https://res.cloudinary.com/dqbhf8bu0/image/upload/v1782146391/svg_tblyry.png"}
          className="absolute top-[-20px] h-6 w-6 animate-sakuraFall opacity-80"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SakuraBackground;
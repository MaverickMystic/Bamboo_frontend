import { useEffect, useState } from "react";
import sakura from "../assets/svg.png"

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
          src={sakura}
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
import { motion } from "framer-motion";
import { useState } from "react";

const Bubble = ({ logo, index }) => {
  const top = 12 + (index * 5) % 80
const left = 15 + (index * 20) % 80


  const [show, setShow] = useState(false);

  return (
    <motion.div
      className="absolute w-20 h-20 flex items-center justify-center group"
      style={{ top: `${top}%`, left: `${left}%` }}
      animate={{
        y: [0, -6, 6, -4, 0],
        x: [0, 4, -4, 2, 0],
      }}
      transition={{
        duration: 4 + index * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center cursor-pointer relative"
        whileHover={{
          scale: 1.2,
         
        }}
        transition={{
          scale: { type: "spring", stiffness: 300 },
        }}
        onClick={() => setShow(!show)} // 👈 mobile tap
      >
        <img
          src={logo.img}
          alt={logo.name}
          style={{ transform: `scale(${logo.scale || 1})` }}
          className="w-full h-full object-contain"
        />

        <span
          className={`absolute -bottom-6 text-xs bg-black text-white px-2 py-1 rounded whitespace-nowrap transition
          ${
            show
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }`}
        >
          {logo.name}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Bubble;
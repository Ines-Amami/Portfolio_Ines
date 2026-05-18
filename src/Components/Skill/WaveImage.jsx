import avatar from "../../assets/skill.png";
import { motion } from "framer-motion";

export default function WaveImage() {
  return (
    <div className="w-75 h-75 flex items-center justify-center">
      <motion.div
        animate={{
          borderRadius: [
            "42% 58% 70% 30% / 30% 30% 70% 70%",
            "58% 42% 30% 70% / 50% 60% 40% 50%",
            "42% 58% 70% 30% / 30% 30% 70% 70%",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full h-full shadow-2xl overflow-hidden backdrop-blur-2xl"
      >
       <img
  src={avatar}
  alt="skill"
  style={{
    objectFit: "cover",
    objectPosition: "50% 20%",
  }}
  className="w-100 h-100"
/>
      </motion.div>
    </div>
  );
}

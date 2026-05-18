import React from "react";
import WaveImage from "../Components/Skill/WaveImage.jsx";
import Logo from "../Components/Skill/Logo.jsx";
import { motion } from "framer-motion";

const blobAnim = {
  borderRadius: [
    "70% 30% 60% 40% / 40% 60% 30% 70%",
    "40% 60% 30% 70% / 70% 30% 60% 40%",
    "60% 40% 70% 30% / 30% 70% 40% 60%",
  ],
};

const Skills = () => {
  return (
    <div
  id="skills"
  data-aos="fade-up"
  className="flex flex-col items-center max-w-[1200px] mx-auto px-4 py-20"
>
  <div className="text-center mb-14">
<p
  data-aos="fade-up"
  data-aos-delay="80"
  className="text-center mb-2"
  style={{
    fontFamily: "'DM Sans', sans-serif",
    color: "#9e7a8e",
    letterSpacing: "0.22em",
    fontSize: "13px",
    fontWeight: 500,
    textTransform: "uppercase",
  }}
>
  Expertise
</p>

<h2
  data-aos="fade-up"
  data-aos-delay="100"
  className="text-center mb-2"
  style={{
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    fontSize: "clamp(36px, 4vw, 52px)",
    color: "#1a0d17",
    lineHeight: 1.1,
  }}
>
  My{" "}
  <em style={{ color: "#c4637a", fontStyle: "italic" }}>
    Skills
  </em>
</h2>

<p
  data-aos="fade-up"
  data-aos-delay="120"
  className="text-center mb-12"
  style={{
    fontFamily: "'DM Sans', sans-serif",
    color: "#7a5a6e",
    fontSize: "16px",
    fontWeight: 400,
  }}
>
  Tools & technologies I work with
</p>
</div>
      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full">

        {/* LEFT */}
        <div className="relative flex flex-col items-center">

          {/* LABEL */}
          <span 
          id="Test"
            className="
              font-semibold text-2xl md:text-3xl tracking-wide
              text-pink-700
              px-8 py-3 rounded-full
              bg-white/30 backdrop-blur-md
              border border-pink-300/40
              mb-8
              lg:absolute lg:-top-30 lg:left-1/2 lg:-translate-x-1/2
              z-30
            "
          >
            Testing
          </span>

          {/* BLOB */}
          <div className="relative z-20 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] flex items-center justify-center">

            {/* OUTER BORDER */}
            <motion.div
              className="absolute w-[105%] h-[105%] border-4 md:border-8 border-pink-800/20"
              animate={{ ...blobAnim, rotate: [360, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />

            {/* INNER BORDER */}
            <motion.div
              className="absolute w-full h-full border-4 md:border-8 border-pink-300/40"
              animate={{ ...blobAnim, rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />

            {/* MAIN */}
            <motion.div
              animate={blobAnim}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full bg-white/10 backdrop-blur-2xl shadow-[0_0_40px_rgba(244,114,182,0.25)] flex items-center justify-center overflow-hidden"
            >
              <Logo type="testing" />
            </motion.div>
          </div>

          {/* FLOW LINE LEFT (BEHIND BLOBS) */}
          <div className="hidden lg:block absolute z-0 top-1/2 -translate-y-1/2 -right-20 w-24 h-[4px] overflow-hidden">
            <div className="absolute w-full h-full bg-gradient-to-r from-gray-950 to-transparent" />

            <div className="absolute w-full h-full flex items-center gap-3">
              <div className="dot bg-gray-900" />
              <div className="dot bg-gray-800 delay-200" />
              <div className="dot bg-gray-700 delay-400" />
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div className="scale-75 sm:scale-90 md:scale-100 lg:scale-110 z-10">
          <WaveImage />
        </div>

        {/* RIGHT */}
        <div className="relative flex flex-col items-center">

          {/* LABEL */}
          <span
          id="Test"
            className="
              font-semibold text-2xl md:text-3xl tracking-wide
              text-pink-700
              px-8 py-3 rounded-full
              bg-white/30 backdrop-blur-md
              border border-pink-300/40
              mb-8
              lg:absolute lg:-top-30 lg:left-1/2 lg:-translate-x-1/2
              z-30
            "
          >
            Development
          </span>

          {/* BLOB */}
          <div className="relative z-20 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] flex items-center justify-center">

            {/* OUTER BORDER */}
            <motion.div
              className="absolute w-[105%] h-[105%] border-4 md:border-8 border-pink-800/20"
              animate={{ ...blobAnim, rotate: [360, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />

            {/* INNER BORDER */}
            <motion.div
              className="absolute w-full h-full border-4 md:border-8 border-pink-300/40"
              animate={{ ...blobAnim, rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />

            {/* MAIN */}
            <motion.div
              animate={blobAnim}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full bg-white/10 backdrop-blur-2xl shadow-[0_0_40px_rgba(244,114,182,0.25)] flex items-center justify-center overflow-hidden"
            >
              <Logo type="dev" />
            </motion.div>
          </div>

          {/* FLOW LINE RIGHT (BEHIND BLOBS) */}
          <div className="hidden lg:block absolute z-0 top-1/2 -translate-y-1/2 -left-20 w-24 h-[4px] overflow-hidden">
            <div className="absolute w-full h-full bg-gradient-to-l from-gray-950 to-transparent" />

            <div className="absolute w-full h-full flex items-center justify-end gap-3">
              <div className="dot reverse bg-gray-900" />
              <div className="dot reverse bg-gray-800 delay-200" />
              <div className="dot reverse bg-gray-700 delay-400" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;

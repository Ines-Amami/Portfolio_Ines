import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Ines from "../assets/Ines.pdf";
import Avatar from "../assets/Avatar_ines.png";
import Particle from "../Components/Particles";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.13 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 0.68, 0, 1.2] },
  },
};

const Home = () => {
  return (
    <div
      id="home"
      className="relative overflow-hidden flex flex-col"
      style={{ minHeight: "90vh" }}
    >

      {/* Particles + blobs background */}
      <div className="absolute inset-0 z-0">
        <Particle />
      </div>

      <section className="body-font z-10">
        <div className="container mx-auto flex px-8 py-24 md:flex-row flex-col items-center gap-10">

          {/* LEFT — text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="relative lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex
            flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >

            {/* Available badge */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mb-5 px-4 py-2 rounded-full w-fit"
              style={{
                background: "rgba(255,255,255,0.75)",
                border: "0.5px solid #ecd8ce",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#3db87a" }}
              />
              <span
                className="text-sm font-medium"
                style={{
                  color: "#7a4f6d",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Available for opportunities
              </span>
            </motion.div>

            {/* Hello greeting */}
            <motion.p
              variants={itemVariants}
              className="mb-1"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                color: "#b89faa",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Introduction
            </motion.p>

            {/* H1 */}
           <motion.h1
  variants={itemVariants}
  className="mb-4"
  style={{
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 800,
    fontSize: "clamp(40px, 5vw, 68px)",
    color: "#1a0d17",
    lineHeight: 1.05,
  }}
>
              Hi! I'm{" "}
              <em
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  color: "#c4637a",
                  fontWeight: 400,
                }}
              >
                Ines
              </em>
            </motion.h1>

            {/* Type animation */}
           <motion.h2
  variants={itemVariants}
  className="mb-5"
  style={{
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    fontSize: "clamp(22px, 3vw, 32px)",
    color: "#3d2235",
    fontStyle: "italic",
  }}
>
              <TypeAnimation
                sequence={[
                  "I'm Junior Software Tester",
                  1000,
                  "I'm Junior Software Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </motion.h2>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="mb-8 max-w-lg"
             style={{
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "15px",
  color: "#5c3d52",
  lineHeight: 1.85,
  fontWeight: 400,
}}
            >
              I'm a junior software tester and developer based in Tunisia,
              passionate about building reliable and high-quality digital
              products. With a background in industrial computing and experience
              in software testing, I focus on ensuring application quality
              through test design and bug tracking. I also enjoy working with
              web technologies and continuously improving my skills. Thank you
              for visiting my portfolio.
            </motion.p>

            {/* Download button */}
            <motion.div variants={itemVariants}>
              <motion.a
                href={Ines}
                download="ines_CV_pdf"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 28px rgba(196,99,122,0.35)",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full text-white border-0 cursor-pointer"
                style={{
                  padding: "12px 28px",
                  fontSize: "14px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  background: "#c4637a",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#b05469")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#c4637a")
                }
              >
                Download CV
              </motion.a>
            </motion.div>

          </motion.div>

         {/* RIGHT — floating avatar */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center"
>
  <motion.div
    animate={{ y: [0, -14, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    style={{ position: "relative", width: "280px", height: "280px" }}
  >

    {/* RING 2 — outermost, large dashed */}
    <motion.div
      style={{
        position: "absolute",
        top: "-30px",
        left: "-30px",
        right: "-30px",
        bottom: "-30px",
        borderRadius: "50%",
        border: "1px dashed #d4a0b4",
      }}
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.35, 0.75, 0.35],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5,
      }}
    />

    {/* RING 1 — close dashed ring */}
    <motion.div
      style={{
        position: "absolute",
        top: "-14px",
        left: "-14px",
        right: "-14px",
        bottom: "-14px",
        borderRadius: "50%",
        border: "1.5px dashed #e8c4d4",
      }}
      animate={{
        scale: [1, 1.04, 1],
        opacity: [0.4, 0.85, 0.4],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* AVATAR IMAGE — perfectly square so border-radius 50% = circle */}
   <img
  src={Avatar}
  alt="Ines"
  style={{
    width: "280px",
    height: "280px",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center 30%",
    border: "4px solid rgba(255,255,255,0.85)",
    boxShadow: "0 0 0 10px rgba(196,99,122,0.07), 0 12px 40px rgba(196,99,122,0.12)",
    display: "block",
  }}
  loading="eager"
/>

  </motion.div>
</motion.div>
        

        </div>
      </section>
    </div>
  );
};

export default Home;
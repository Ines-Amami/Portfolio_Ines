import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
   <footer className="text-white py-2 relative" style={{ backgroundColor: "#3d2235" }}>
      <div className="w-full flex flex-col items-center gap-3 py-4">
        <div className="flex justify-center items-center gap-5">
          {[
            { href: "https://github.com/Ines-Amami", icon: <FaGithub size={22} /> },
            { href: "https://www.linkedin.com/in/ines-amami-302576235", icon: <FaLinkedin size={22} /> },
            { href: "mailto:amamiines3@gmail.com", icon: <FaEnvelope size={22} /> },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-pink-200 hover:text-white transition-all"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
        <span className="text-sm text-pink-300">
          Made by <em>Ines Amami</em>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
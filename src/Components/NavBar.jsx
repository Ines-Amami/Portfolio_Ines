import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState("home");

  // Watch scroll to highlight active nav link
  useEffect(() => {
    const sections = ["home", "project", "skills", "contact"];

    const handleScroll = () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 100 && top > -el.offsetHeight + 100) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollTo = (id) => {
  const el = document.getElementById(id);

  if (el) {
    el.scrollIntoView({ behavior: "smooth" });

    // change URL hash
    window.history.pushState(null, "", `${id}`);
  }

  setActive(id);
  setNav(false);
};

  const links = [
    { id: "home",    label: "Home"     },
    { id: "project", label: "Projects" },
    { id: "skills",  label: "Skills"   },
    { id: "contact", label: "Contact"  },
  ];

  return (
    <nav
      className="sticky top-0 z-50 flex justify-between items-center
      w-full h-20 px-8 backdrop-blur-md border-b"
      style={{
        backgroundColor: "rgba(253,246,239,0.93)",
        borderBottomColor: "#ecd8ce",
      }}
    >
      {/* LOGO */}
   <div
  onClick={() => scrollTo("home")}
  className="cursor-pointer text-5xl"
  style={{
    fontFamily: "'Great Vibes', cursive",
    background: "linear-gradient(90deg, #7a4f6d, #c4637a, #7a4f6d)",
    backgroundSize: "200%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "shimmerLogo 4s linear infinite",
    lineHeight: "1.3",
    paddingTop: "6px",
    paddingLeft: "8px",
    paddingRight: "4px",
    overflow: "visible",
    display: "inline-block",
  }}
>
  Ines
</div>

      {/* DESKTOP LINKS */}
      <ul className="hidden md:flex gap-8 list-none">
        {links.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className="text-base font-normal capitalize transition-all duration-200
              bg-transparent border-none cursor-pointer pb-0.5"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: active === id ? "#c4637a" : "#9e7a8e",
                borderBottom: active === id
                  ? "1.5px solid #c4637a"
                  : "1.5px solid transparent",
              }}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      {/* MOBILE HAMBURGER */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer md:hidden"
        style={{ color: "#c4637a" }}
      >
        {nav ? <FaTimes size={26} /> : <FaBars size={26} />}
      </div>

      {/* MOBILE MENU */}
      {nav && (
        <ul
          className="flex flex-col justify-center items-center
          absolute top-0 left-0 w-full h-screen list-none"
          style={{ backgroundColor: "rgba(253,246,239,0.97)" }}
        >
          {links.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className="text-3xl py-5 capitalize bg-transparent
                border-none cursor-pointer"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  color: active === id ? "#c4637a" : "#7a4f6d",
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;

import React from "react";

import  {projects}  from "../Components/Constant";

import { FiGithub } from "react-icons/fi";



const Project = () => {
  return (
    <section
      id="project"
      data-aos="fade-up"
      data-aos-delay="250"
      className="w-full py-20 px-4 sm:px-8 "
    >
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <div className="text-center mb-14">
       

  
  <h2
    className="mb-2"
    style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 600,
      fontSize: "clamp(36px, 4vw, 52px)",
      color: "#3d2235",
      lineHeight: 1.1,
    }}
  >
    My{" "}
    <em style={{ color: "#c4637a", fontStyle: "italic" }}>
      Projects
    </em>
  </h2>

  <p
    style={{
      fontFamily: "'DM Sans', sans-serif",
      color: "#7a5a6e",
      fontSize: "16px",
      fontWeight: 400,
    }}
  >
    Some of my recent works
  </p>


        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg 
              hover:-translate-y-2 transition duration-300 flex flex-col"
            >
              {/* IMAGE */}
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">
            <h3
  className="mb-3"
  style={{
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "20px",
    fontWeight: 700,
    color: "#1a0d17",
  }}
>
  {project.title}
</h3>
<p
  className="mb-5 leading-relaxed flex-1"
  style={{
    color: "#5c3d52",
    fontSize: "14px",
    fontWeight: 400,
  }}
>
  {project.desc}
</p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-6">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-[#7a4f6d] hover:text-blue-600 transition"
                    
                  >
                    <FiGithub />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
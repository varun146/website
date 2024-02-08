import React from "react";

import { projects } from "./projects.js";
import RightImage from "./RightImage.jsx";
import LeftImage from "./LeftImage.jsx";

const Projects = () => {
  return (
    <div className="bg-[#202733]  h-[1250px] sm:h-[1600px] lg:h-[1800px] w-full">
      <div
        id="projects"
        className=" h-screen max-w-[1040px] m-auto md:pl-20 py-16"
      >
        <h1 className="mb-20 text-2xl text-center  md:text-3xl sm:text-5xl  text-white font-bold  font-mono">
          Projects
        </h1>

        {projects.map((project, index) => {
          // Use index to determine whether to render RightImage or LeftImage
          if (index % 2 === 0) {
            return (
              <RightImage
                key={index}
                title={project.title}
                stack={project.stack}
                image={project.img}
                desc={project.desc}
              />
            );
          } else {
            return (
              <LeftImage
                key={index}
                title={project.title}
                stack={project.stack}
                image={project.img}
                desc={project.desc}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";

import { projects } from "./projects.js";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="bg-gradient-to-t from-gray-600 to-white">
      <div
        id="projects"
        className=" h-screen max-w-[1040px] m-auto md:pl-20 py-16"
      >
        <h1 className="mb-10 text-4xl text-center  font-bold text-[#164863] font-mono">
          Projects
        </h1>
        <p className="font-mono text-center ">
          These are the projects I meticulously crafted while honing my mastery
          in these skills.
        </p>
        <div className="grid sm:grid-cols-3 gap-10 grid-cols-2 p-10">
          {projects.map((project) => {
            return (
              <ProjectItem
                title={project.title}
                img={project.img}
                stack={project.stack}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

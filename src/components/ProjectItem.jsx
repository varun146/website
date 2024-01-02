import React from "react";

const ProjectItem = ({ title, img }) => {
  return (
    <div className="relative rounded-xl  flex items-center justify-center h-auto w-full group hover:bg-gradient-to-r from-gray-200  to-[#427D9D] shadow-lg shadow-blue-400">
      <img
        className="w-full h-full overflow-hidden rounded-xl group-hover:opacity-10"
        src={img}
        alt=""
      />
      <div className="hidden group-hover:block font-mono text-[#164863] absolute">
        <div className="flex flex-col justify-center gap-3">
          <h3 className="text-blue font-bold tracking-wider text-center">
            {title}
          </h3>
          <a
            className=" text-center p-2 rounded-xl bg-white font-mono text-[#164863]"
            href=""
          >
            More info
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

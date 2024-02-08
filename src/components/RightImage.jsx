import React from "react";

const RightImage = ({ title, stack, image, desc }) => {
  return (
    <div className="flex gap-8 w-full  p-8 mt-10">
      <div className="w-[50%] flex items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-mono text-white font-bold">
            {title}
          </h1>
          <h2 className="font-mono mt-2 text-white font-bold ">{stack}</h2>
          <div className="flex gap-2 mt-4">
            <button className="bg-gray-600 py-2 px-4 rounded-full text-white font-mono font-bold text-sm">
              Github
            </button>
            <button className="bg-gray-600 py-2 px-4 rounded-full text-white font-mono font-bold text-sm">
              Live Demo
            </button>
          </div>
        </div>
      </div>
      <div className="  hover:scale-110 ease-in-out duration-300 w-[50%] p-2 rounded-md">
        <div className="relative group rounded-md ">
          <img className=" shadow-md  rounded-md relative" src={image} />
          <div className="flex justify-center items-center  absolute top-0 rounded-md left-0 w-full opacity-0 h-full bg-black/90 group-hover:opacity-100">
            <div className="flex justify-center items-center p-10 text-white text-sm font-bold m-4 font-mono">
              {desc}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightImage;

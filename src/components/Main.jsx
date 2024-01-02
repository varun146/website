import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="object-left w-full h-screen"
        src="src/components/pics/ocean.jpg"
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-screen ">
        <div className="  max-w-[700px] m-auto h-[75%] w-full flex flex-col justify-center  items-center ">
          <h1 className="font-mono text-6xl font-bold text-white sm:text-5xl">
            Hi, I'm Varun
          </h1>
	  <h1 className="text">Hello</h1>
          <h2 className="flex pt-4 font-mono text-2xl text-white gap-3 sm:text-3xl">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Coder",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Software Engineer",
                1000,
                "Web Developer",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <div className="mb-12 flex justify-between text-white pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaGithub className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
          </div>
          <div className="mt-20 text-justify text-white ">
            <p className="p-5 font-mono md:p-4 ">
              Passionate full-stack developer dedicated to crafting seamless and
              innovative web solutions. With a keen eye for detail and a
              commitment to staying abreast of the latest technologies, I bring
              a blend of creativity and technical expertise to deliver impactful
              and user-centric digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

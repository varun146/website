import React, { useState } from "react";
import { FaBars, FaHome } from "react-icons/fa";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    console.log(nav);
    setNav(!nav);
  };
  return (
    <div>
      <FaBars
        size={20}
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] lg:hidden text-white"
      />
      {nav ? (
        <div className=" fixed w-full h-screen bg-white/90 flex flex-col gap-5 justify-center items-center z-100">
          <a
            href="#main"
            className=" py-3 w-[75%] flex justify-center items-center text-black rounded-full shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={25} />
            <span className="pl-4  text-xl">Home</span>
          </a>
          <a
            href="#main"
            className="py-3 w-[75%] flex justify-center items-center text-black rounded-full shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <FaHome size={25} />
            <span className="pl-4  text-xl">About</span>
          </a>
          <a
            href="#main"
            className="py-3 w-[75%] flex justify-center items-center text-black rounded-full shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4  text-xl">Projects</span>
          </a>
          <a
            href="#main"
            className="py-3 w-[75%] flex justify-center items-center text-black rounded-full shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={25} />
            <span className="pl-4  text-xl">Resume</span>
          </a>
          <a
            href="#main"
            className="py-3 w-[75%] flex justify-center items-center text-black rounded-full shadow-lg bg-gray-100 shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={25} />
            <span className="pl-4  text-xl">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="  lg:block hidden  ml-5 fixed top-[25%] ">
        <div className="flex flex-col ">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#skills"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#resume"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

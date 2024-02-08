import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="w-full flex justify-center fixed ">
      <div className="w-[50%] my-4   text-white ">
        <nav className="flex justify-evenly  items-center">
          <Link
            to="/"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="text-white font-mono font-bold"
          >
            Projects
          </Link>
          <Link
            className="text-white font-mono font-bold"
            to="skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Skills
          </Link>
          <Link
            to="/"
            spy={true}
            className="text-white font-mono font-bold"
            smooth={true}
            offset={50}
            duration={500}
          >
            Resume
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            offset={50}
            className="text-white font-bold font-mono"
            duration={500}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Nav;

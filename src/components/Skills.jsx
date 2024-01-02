import React from "react";

const skills = [
  {
    img: "src/components/pics/docker.png",
  },
  {
    img: "src/assets/mongo.png",
  },
  {
    img: "src/components/skills/react.png",
  },
  {
    img: "src/components/pics/node.png",
  },
  {
    img: "src/components/pics/express.png",
  },
  {
    img: "src/components/pics/JS.png",
  },
  {
    img: "src/components/pics/htmlcss.png",
  },
  {
    img: "src/components/pics/css.png",
  },
  {
    img: "src/components/pics/tailwind.png",
  },
  {
    img: "src/components/pics/java.png",
  },
  {
    img: "src/components/pics/git.png",
  },
  {
    img: "src/components/pics/linux.png",
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full lg:mb-0 md:mb-4 sm:mb-20 h-screen bg-gradient-to-b from-slate-600 to-white"
    >
      <h1 className="text-center font-bold text-4xl font-mono text-white p-10">
        Skills
      </h1>
      <div className="flex justify-center mt-20">
        <div className="max-w-[1040px]  flex justify-center ">
          <div className="grid sm:grid-cols-3 sm:p-5 md:grid-cols-4 grid-cols-2 sm:gap-10 gap-3  p-2 sm:mb-2">
            {skills.map((skill, title) => {
              return (
                <div className="hover:scale-110 ease-in duration-300 rounded-xl shadow-xl">
                  <img
                    className="p-2"
                    key={title}
                    src={skill.img}
                    width={200}
                    height={200}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

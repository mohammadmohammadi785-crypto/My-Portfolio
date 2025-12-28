import { motion } from "framer-motion";
import { Github } from "lucide-react";
import nextdotjs from "/nextdotjs.svg";
import tailwindcss from "/tailwindcss.svg";
import javascript from "/javascript.svg";
import html5 from "/html5.svg";
import react from "/react.svg";
import css from "/css.svg";
import typescript from "/typescript.svg";
export default function About() {
  const skills = [
    {
      name: "React",
      icon: <img className="w-6 h-6 text-black" src={react} />,
    },
    {
      name: "Type Script",
      icon: <img className="w-6 h-6 text-black" src={typescript} />,
    },
    {
      name: "Java Script",
      icon: <img className="w-6 h-6 text-black" src={javascript} />,
    },
    {
      name: "Html",
      icon: <img className="w-6 h-6 text-black" src={html5} />,
    },
    {
      name: "CSS",
      icon: <img className="w-6 h-6 text-black" src={css} />,
    },
    {
      name: "Tailwind CSS",
      icon: <img className="w-6 h-6 text-black" src={tailwindcss} />,
    },
    {
      name: "NextJs",
      icon: <img className="w-6 h-6 text-black" src={nextdotjs} />,
    },
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6  text-black" />,
    },
  ];

  return (
    <motion.section
      id="about"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white border-b rounded-b-none p-6 sm:p-8 md:p-10 rounded-lg shadow-lg"
    >
      {" "}
      <h2 className="text-2xl text-normal sm:text-3xl md:text-4xl font-bold mb-6 flex items-center">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex-shrink-0 "
        >
          <img
            src="./profile2.jpg"
            alt="Your Profile"
            className="w-40 h-40 right-0 top-0 sm:w-48 sm:h-48 md:w-50 bg-cover md:h-50 rounded-full border-4 border-normal shadow-md z-10"
          />
        </motion.div>
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-base md:text-lg sm:text-lg mb-6 text-gray-600"
          >
            I'm Mohammad Mohammadi, a dedicated web developer with over 1 years
            of experience in building scalable and user-friendly web
            applications. My passion lies in creating seamless digital
            experiences using modern technologies like React, TypeScript, Html,
            Css and Tailwindcss. I thrive on solving complex problems and
            delivering high-quality solutions that meet user needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
              My Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center p-3 bg-gray-100 text-sm sm:text-base"
                >
                  {skill.icon}
                  <span className="ml-3 text-base sm:text-lg font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

import { motion } from "framer-motion";
import { User, Code } from "lucide-react";

export default function About() {
  const skills = [
    {
      name: "React & TypeScript",
      icon: <Code className="h-6 w-6 text-blue-500" />,
    },
    {
      name: "Html & Css",
      icon: <Code className="h-6 w-6 text-green-500" />,
    },
    {
      name: "Java Script",
      icon: <Code className="h-6 w-6 text-purple-500" />,
    },
    {
      name: "Tailwind CSS",
      icon: <Code className="h-6 w-6 text-teal-500" />,
    },
  ];

  return (
    <motion.section
      id="about"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 flex items-center">
        <User className="mr-3 h-7 w-7 sm:h-8 sm:w-8" /> About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex-shrink-0 relative"
        >
          <div className="gradient-bg w-56 h-56 sm:w-64 sm:h-64 md:w-64 md:h-64 rounded-full absolute -z-10"></div>
          <img
            src="./src/assets/img5.webp"
            alt="Your Profile"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-500 shadow-md z-10"
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
                  className="flex items-center p-3 bg-gray-100 rounded-lg text-sm sm:text-base"
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

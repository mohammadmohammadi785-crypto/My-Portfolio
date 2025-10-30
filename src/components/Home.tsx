import { motion } from "framer-motion";
import { User, Code, Globe } from "lucide-react";

function Home(){
  return (
    <motion.section
      id="home"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-center py-16 sm:py-16 md:py-20"
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800"
      >
        Welcome to My Portfolio
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto px-4 text-gray-600"
      >
        Hi, I'm Mohammad Mohammadi, a passionate web developer specializing in
        modern web technologies like React, TypeScript, and Tailwindcss. I build
        responsive, user-friendly applications that make an impact.
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
      >
        <a
          href="#about"
          className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
        >
          <User className="mr-2 h-5 w-5" /> Learn More About Me
        </a>
        <a
          href="#projects"
          className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-300"
        >
          <Code className="mr-2 h-5 w-5" /> View My Projects
        </a>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-12"
      >
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
          My Expertise
        </h3>
        <div className="flex flex-col items-center sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="flex items-center">
            <Code className="h-8 w-8 text-blue-500 mr-2" />
            <span>Frontend Development</span>
          </div>
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-green-500 mr-2" />
            <span>Full-Stack Solutions</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;

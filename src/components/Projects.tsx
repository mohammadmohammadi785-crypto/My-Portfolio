import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Online Restaurant",
    description:
      "A full-featured online Restaurant built with React, TypeScript, and Tailwindcss.",
    link: "https://github.com/mohammad-1mohammadi/ecommerce",
    image: "./src/assets/project1.png",
  },
  
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my work, built with React and Tailwind CSS.",
    link: "https://github.com/mohammad-1mohammadi/portfolio",
    image: "./src/assets/project2.jpg",
  },
  {
    title: "Task Management App",
    description:
      "A productivity app with real-time collaboration using React and Tailwindcss.",
    link: "https://github.com/mohammad-1mohammadi/task-manager",
    image: "/assets/project2.jpg",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive dashboard displaying real-time weather data using a public API.",
    link: "https://github.com/yourusername/weather-dashboard",
    image: "/assets/project4.jpg",
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 flex items-center text-gray-800">
        <Briefcase className="mr-3 h-7 sm:h-8 w-7 sm:w-8" /> Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="border rounded-lg overflow-hidden shadow-md bg-gray-50"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 sm:h-48 object-cover"
              onError={(e) =>
                (e.currentTarget.src = "https://via.placeholder.com/400x200")
              }
            />
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-medium"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;

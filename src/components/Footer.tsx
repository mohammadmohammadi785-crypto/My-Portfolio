import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/yourusername",
      icon: <Github className="h-6 w-6" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      icon: <Linkedin className="h-6 w-6" />,
    },
    {
      name: "Twitter",
      href: "https://x.com/yourusername",
      icon: <Twitter className="h-6 w-6" />,
    },
  ];

  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-900 text-white py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <p className="text-sm sm:text-base text-center">
            &copy; 2025 Mohammad Mohammadi. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#3b82f6" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-500 transition-colors duration-300"
              >
                {link.icon}
                <span>{link.name}</span>
              </motion.a>
            ))}
          </div>
          <p className="text-sm sm:text-base text-center">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;

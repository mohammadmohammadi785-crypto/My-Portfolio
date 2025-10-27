import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react";

function Footer() {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/mohammadmohammadi785-crypto",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammad-mohammadi-372a45394/",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Twitter",
      href: "https://x.com/yourusername",
      icon: <Twitter className="h-5 w-5" />,
    },
  ];

  const contactInfo = [
    {
      label: "Email",
      value: "mohammadmohammadi2025@gmail.com",
      icon: <Mail className="h-5 w-5 mr-2" />,
    },
    {
      label: "Phone",
      value: "+93 729125123",
      icon: <Phone className="h-5 w-5 mr-2" />,
    },
  ];

  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-900 text-white py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* بخش ناوبری */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: "#3b82f6" }}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          {/* بخش شبکه‌های اجتماعی */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">
              Follow Me
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "#3b82f6" }}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          {/* بخش اطلاعات تماس */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">
              Contact Info
            </h3>
            <ul className="space-y-2">
              {contactInfo.map((info) => (
                <li
                  key={info.label}
                  className="flex items-center text-gray-300"
                >
                  {info.icon}
                  <span>{info.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col items-center space-y-4">
          <p className="text-sm text-gray-400 text-center">
            &copy; 2025 Mohammad Mohammadi. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 text-center">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;

import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Mail, Sun, Moon, Menu, X } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home", icon: <Home className="h-5 w-5" /> },
    { href: "#about", label: "About", icon: <User className="h-5 w-5" /> },
    {
      href: "#projects",
      label: "Projects",
      icon: <Briefcase className="h-5 w-5" />,
    },
    { href: "#contact", label: "Contact", icon: <Mail className="h-5 w-5" /> },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="bg-gray-900 text-white py-3 sm:py-4 sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
          Mohammad Mohammadi
        </h1>
        <div className="hidden sm:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6 md:space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center hover:text-blue-400 transition-colors"
                  >
                    {item.icon}
                    <span className="hidden md:inline ml-1">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </motion.button>
        </div>
        <div className="flex items-center space-x-3 sm:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-800"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </motion.button>
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="sm:hidden fixed top-0 right-0 h-full w-64 bg-gray-900 z-40 shadow-2xl"
          >
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu}>
                <X className="h-7 w-7 text-gray-400" />
              </button>
            </div>
            <ul className="flex flex-col space-y-6 px-6 pt-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={toggleMenu}
                    className="flex items-center text-lg hover:text-blue-400 transition-colors"
                  >
                    {item.icon}
                    <span className="ml-3">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;

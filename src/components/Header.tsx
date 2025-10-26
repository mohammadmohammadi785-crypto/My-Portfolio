import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Mail, Sun, Moon, Menu, X } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home", icon: <Home className="mr-2 h-5 w-5" /> },
    { href: "#about", label: "About", icon: <User className="mr-2 h-5 w-5" /> },
    {
      href: "#projects",
      label: "Projects",
      icon: <Briefcase className="mr-2 h-5 w-5" />,
    },
    {
      href: "#contact",
      label: "Contact",
      icon: <Mail className="mr-2 h-5 w-5" />,
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="bg-gray-900 text-white py-4 sticky top-0 z-20 shadow-lg"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Mohammad Mohammadi
        </h1>
        <div className="flex items-center space-x-4">
          {/* منوی دسکتاپ */}
          <nav className="hidden sm:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* دکمه تعویض تم */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </motion.button>
          {/* دکمه همبرگر برای موبایل */}
          <button
            className="sm:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {/* منوی موبایل */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="sm:hidden fixed top-0 right-0 h-full w-3/4 bg-gray-900 text-white z-30 shadow-lg"
          >
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="flex flex-col space-y-6 p-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center text-lg hover:text-blue-400 transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    {item.icon}
                    {item.label}
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

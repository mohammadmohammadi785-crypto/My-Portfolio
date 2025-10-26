import React from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 py-12 space-y-16"
      >
        <Home />
        <About />
        <Projects />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
};

export default App;

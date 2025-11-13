import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = ({ darkMode, displayText, handleNavClick }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* profile picture */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className={`absolute inset-0 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 ${
                darkMode
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                  : "bg-gradient-to-r from-green-400 to-emerald-400"
              }`}
            ></div>
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
              <img
                src="./dp.jpeg"
                alt="Rohan Maiti"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Hero Text */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className={`text-5xl md:text-6xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Hi, I'm{" "}
              <motion.span
                className={`bg-gradient-to-r ${
                  darkMode
                    ? "from-blue-400 to-cyan-400"
                    : "from-green-500 to-emerald-500"
                } bg-clip-text text-transparent`}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Rohan Maiti
              </motion.span>
            </h1>
            <p
              className={`text-xl md:text-2xl mb-4 h-8 ${
                darkMode ? "text-slate-300" : "text-gray-700"
              }`}
            >
              {displayText}
              <span className="animate-blink">|</span>
            </p>
            <p
              className={`text-lg md:text-xl mb-8 ${
                darkMode ? "text-slate-400" : "text-gray-600"
              }`}
            >
              Student at Chitkara University Himachal Pradesh
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <motion.a
                href="https://github.com/rohanmaiti"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full transition-all duration-300 ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-green-600 hover:bg-green-700"
                } text-white shadow-lg`}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rohanmaiti"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full transition-all duration-300 ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-green-600 hover:bg-green-700"
                } text-white shadow-lg`}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:maitirohan2019@gmail.com"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full transition-all duration-300 ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-green-600 hover:bg-green-700"
                } text-white shadow-lg`}
              >
                <Mail size={24} />
              </motion.a>
            </div>
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-block px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                darkMode
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                  : "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
              } text-white shadow-lg`}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

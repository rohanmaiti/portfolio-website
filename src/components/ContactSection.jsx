import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = ({ darkMode }) => {
  return (
    <section id="contact" className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-slate-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2 
          className={`text-4xl font-bold mb-4 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className={`text-xl mb-12 text-center ${
            darkMode ? 'text-slate-300' : 'text-gray-700'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.a 
            href="mailto:maitirohan2019@gmail.com" 
            className={`flex items-center space-x-4 p-6 rounded-xl transition-all duration-300 ${
              darkMode ? 'bg-slate-700/50 hover:bg-slate-700 border border-slate-600' : 'bg-white hover:bg-gray-50 border border-gray-200'
            } shadow-lg`}
            whileHover={{ scale: 1.02, x: 5 }}
          >
            <div className={`p-4 rounded-full ${
              darkMode ? 'bg-blue-600' : 'bg-green-600'
            } text-white`}>
              <Mail size={28} />
            </div>
            <div className="flex-1">
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>Email</p>
              <p className={`font-medium text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>maitirohan2019@gmail.com</p>
            </div>
          </motion.a>

          <motion.a 
            href="tel:+918172017128"
            className={`flex items-center space-x-4 p-6 rounded-xl transition-all duration-300 ${
              darkMode ? 'bg-slate-700/50 hover:bg-slate-700 border border-slate-600' : 'bg-white hover:bg-gray-50 border border-gray-200'
            } shadow-lg`}
            whileHover={{ scale: 1.02, x: 5 }}
          >
            <div className={`p-4 rounded-full ${
              darkMode ? 'bg-blue-600' : 'bg-green-600'
            } text-white`}>
              <Phone size={28} />
            </div>
            <div className="flex-1">
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-gray-500'}`}>Phone</p>
              <p className={`font-medium text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>+91 8172017128</p>
            </div>
          </motion.a>

          <div className="flex justify-center space-x-6 pt-8">
            <motion.a 
              href="https://github.com/rohanmaiti" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className={`p-4 rounded-full transition-all duration-300 ${
                darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
              } text-white shadow-lg`}
            >
              <Github size={28} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/rohanmaiti" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className={`p-4 rounded-full transition-all duration-300 ${
                darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
              } text-white shadow-lg`}
            >
              <Linkedin size={28} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

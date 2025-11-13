import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileDrawer = ({ 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  darkMode, 
  activeSection, 
  handleNavClick 
}) => {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={`fixed left-0 top-0 h-full w-64 z-50 ${
              darkMode ? 'bg-slate-800' : 'bg-white'
            } shadow-2xl md:hidden`}
          >
            <div className="p-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="mb-8"
              >
                <X className={darkMode ? 'text-white' : 'text-gray-900'} size={24} />
              </button>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, item.toLowerCase())}
                    className={`text-lg transition-colors duration-300 ${
                      activeSection === item.toLowerCase()
                        ? darkMode ? 'text-blue-400' : 'text-green-600'
                        : darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-gray-700 hover:text-green-600'
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;

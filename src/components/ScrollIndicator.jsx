import { AnimatePresence } from 'framer-motion';

const ScrollIndicator = ({ show, darkMode }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-0 left-0 right-0 flex justify-center pb-2 pointer-events-none"
        >
          <div className={`flex items-center space-x-2 px-4 py-2 rounded-full shadow-lg backdrop-blur-md ${
            darkMode ? 'bg-blue-600/90 text-white' : 'bg-green-600/90 text-white'
          }`}>
            <span className="text-sm font-medium">Scroll for more</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator;

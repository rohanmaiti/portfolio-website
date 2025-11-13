import { Moon, Sun, Menu } from 'lucide-react';

const Navigation = ({ 
  darkMode, 
  setDarkMode, 
  activeSection, 
  handleNavClick, 
  mobileMenuOpen, 
  setMobileMenuOpen 
}) => {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
      darkMode ? 'bg-slate-900/95' : 'bg-white/80'
    } ${activeSection !== 'home' 
      ? darkMode 
        ? 'shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)]' 
        : 'shadow-lg border-b border-gray-200'
      : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center p-4">
          {/* desktop Menu */}
          <div className="hidden md:flex space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                className={`transition-colors duration-300 ${
                  activeSection === item.toLowerCase()
                    ? darkMode ? 'text-blue-400' : 'text-green-600'
                    : darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <Menu className={darkMode ? 'text-white' : 'text-gray-900'} size={24} />
          </button>

          {/* theme toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-all duration-300 ${
              darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
            } text-white`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

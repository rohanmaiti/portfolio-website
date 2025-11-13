const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-slate-900' : 'bg-white'} border-t ${
      darkMode ? 'border-slate-700' : 'border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className={darkMode ? 'text-slate-400' : 'text-gray-600'}>
          © 2025 Rohan Maiti. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { GraduationCap } from 'lucide-react';
import AboutCard from './AboutCard';
import CodingProfiles from './CodingProfiles';
import Hobbies from './Hobbies';
import ScrollIndicator from '@/components/ScrollIndicator';
import { achievements } from '@/data/constants';

const AboutSection = ({ darkMode, aboutScrollRef, handleAboutScroll, showMoreAbout }) => {
  return (
    <section id="about" className={`min-h-screen flex px-4 pt-10 sm:px-6 lg:px-8 ${
      darkMode ? 'bg-slate-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 
          className={`text-4xl font-bold mb-12 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GraduationCap className="inline-block mr-3" size={40} />
          About Me
        </motion.h2>
        
        <div className="relative">
          <div 
            ref={aboutScrollRef}
            onScroll={handleAboutScroll}
            className="grid md:grid-cols-3 gap-6 max-h-[600px] overflow-y-auto pr-2"
          >
            <AboutCard darkMode={darkMode} achievements={achievements} />
            <CodingProfiles darkMode={darkMode} />
            <Hobbies darkMode={darkMode} />
          </div>

          <ScrollIndicator show={showMoreAbout} darkMode={darkMode} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

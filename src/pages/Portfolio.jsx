import { usePortfolio } from '@/hooks/usePortfolio';
import { projects } from '@/data/constants';
import Navigation from '@/components/Navigation';
import MobileDrawer from '@/components/MobileDrawer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Portfolio() {
  const {
    darkMode,
    setDarkMode,
    activeSection,
    displayText,
    projectFilter,
    setProjectFilter,
    mobileMenuOpen,
    setMobileMenuOpen,
    showMoreProjects,
    showMoreAbout,
    projectScrollRef,
    experienceScrollRef,
    aboutScrollRef,
    handleNavClick,
    scrollExperience,
    handleProjectScroll,
    handleAboutScroll
  } = usePortfolio();

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = projectFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === projectFilter);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode ? 'bg-slate-900' : 'bg-white'
    }`}>
      <Navigation 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        handleNavClick={handleNavClick}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <MobileDrawer
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        darkMode={darkMode}
        activeSection={activeSection}
        handleNavClick={handleNavClick}
      />

      <HeroSection 
        darkMode={darkMode}
        displayText={displayText}
        handleNavClick={handleNavClick}
      />

      <AboutSection
        darkMode={darkMode}
        aboutScrollRef={aboutScrollRef}
        handleAboutScroll={handleAboutScroll}
        showMoreAbout={showMoreAbout}
      />

      <SkillsSection darkMode={darkMode} />

      <ProjectsSection
        darkMode={darkMode}
        projectFilter={projectFilter}
        setProjectFilter={setProjectFilter}
        categories={categories}
        filteredProjects={filteredProjects}
        projectScrollRef={projectScrollRef}
        handleProjectScroll={handleProjectScroll}
        showMoreProjects={showMoreProjects}
      />

      <ExperienceSection
        darkMode={darkMode}
        experienceScrollRef={experienceScrollRef}
        scrollExperience={scrollExperience}
      />

      <ContactSection darkMode={darkMode} />

      <Footer darkMode={darkMode} />
    </div>
  );
}

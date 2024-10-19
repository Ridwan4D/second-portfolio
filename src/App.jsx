import AboutSection from "./components/AboutSection";
import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import ProjectsSection from "./components/PorjectsSection";
import SkillSet from "./components/SkillSet";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-gray-100 min-h-screen antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="container mx-auto px-2 lg:px-8 md:max-w-7xl">
        <Nav />
        <HeroSection />
        <hr className="border-1 border-dashed border-slate-400" />
        <AboutSection />
        <hr className="border-1 border-dashed border-slate-400" />
        <SkillSet />
        <hr className="border-1 border-dashed border-slate-400" />
        <ProjectsSection />
        <hr className="border-1 border-dashed border-slate-400" />
        <Education />
        <hr className="border-1 border-dashed border-slate-400" />
        <ContactMe />
        <hr className="border-1 border-dashed border-slate-400" />
        <Footer />
      </div>
    </div>
  );
};

export default App;
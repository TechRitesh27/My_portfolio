import HeroSection from './HeroSection';
import About from './About';
import CylinderCarousel from './CylinderCarousel';
import "./Portfolio.css";
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import ContactForm from './ContactForm';
import Footer from './Footer';

function Portfolio() {
  return (
    <div className="portfolio">
        <HeroSection />
        <About />
        <CylinderCarousel />
        <Skills />
        <Experience />
        <Education />
        <ContactForm />
        <Footer />
    </div>
  );
}

export default Portfolio;
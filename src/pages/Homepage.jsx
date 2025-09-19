import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProblemsSection from '../components/ProblemsSection';
import CurriculumSection from '../components/CurriculumSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import EventsSection from '../components/EventsSection';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <CurriculumSection />
      <PricingSection />
      <TestimonialsSection />
      <AboutSection />
      <EventsSection />
      <Footer />
    </div>
  );
};

export default Homepage;
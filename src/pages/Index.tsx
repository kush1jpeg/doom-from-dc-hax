import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TracksSection from '@/components/TracksSection';
import ScheduleSection from '@/components/ScheduleSection';
import VenueSection from '@/components/VenueSection';
import PrizesSection from '@/components/PrizesSection';
import RegistrationSection from '@/components/RegistrationSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <ScheduleSection />
      <VenueSection />
      <PrizesSection />
      <RegistrationSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Index;

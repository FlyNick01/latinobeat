
import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ScheduleSection from '@/components/ScheduleSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Hebrew from './Hebrew';

const Index = () => {
  const [isHebrew, setIsHebrew] = useState(false);

  const toggleLanguage = () => {
    setIsHebrew(!isHebrew);
  };

  if (isHebrew) {
    return <Hebrew onLanguageToggle={toggleLanguage} />;
  }

  return (
    <div className="min-h-screen">
      <Header onLanguageToggle={toggleLanguage} />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;


import Header from '@/components/Header';
import HeroSectionHe from '@/components/HeroSectionHe';
import AboutSectionHe from '@/components/AboutSectionHe';
import ScheduleSectionHe from '@/components/ScheduleSectionHe';
import ContactSectionHe from '@/components/ContactSectionHe';
import Footer from '@/components/Footer';

interface HebrewProps {
  onLanguageToggle: () => void;
}

const Hebrew = ({ onLanguageToggle }: HebrewProps) => {
  return (
    <div className="min-h-screen" dir="rtl">
      <Header isHebrew={true} onLanguageToggle={onLanguageToggle} />
      <HeroSectionHe />
      <AboutSectionHe />
      <ScheduleSectionHe />
      <ContactSectionHe />
      <Footer />
    </div>
  );
};

export default Hebrew;

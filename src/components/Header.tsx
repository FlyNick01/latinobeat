
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  isHebrew?: boolean;
  onLanguageToggle?: () => void;
}

const Header = ({ isHebrew = false, onLanguageToggle }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = isHebrew ? {
    about: 'אודות',
    schedule: 'לוח זמנים',
    contact: 'צור קשר',
    langToggle: 'English'
  } : {
    about: 'About',
    schedule: 'Schedule', 
    contact: 'Contact',
    langToggle: 'עברית'
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-dancing font-bold text-primary">
              Latino Beat
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" style={isHebrew ? { direction: 'rtl' } : {}}>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              {navigation.about}
            </a>
            <a href="#schedule" className="text-foreground hover:text-primary transition-colors" style={isHebrew ? { marginRight: '2rem' } : {}}>
              {navigation.schedule}
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              {navigation.contact}
            </a>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2"
              onClick={onLanguageToggle}
            >
              <Globe className="w-4 h-4" />
              {navigation.langToggle}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                {navigation.about}
              </a>
              <a href="#schedule" className="text-foreground hover:text-primary transition-colors">
                {navigation.schedule}
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                {navigation.contact}
              </a>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2 w-fit"
                onClick={onLanguageToggle}
              >
                <Globe className="w-4 h-4" />
                {navigation.langToggle}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

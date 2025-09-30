
import { Heart, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-dancing font-bold text-primary mb-4">
                Latino Beat
              </h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                Haifa's premier Latin dance studio where passion meets rhythm. 
                Join our community and discover the joy of Salsa and Bachata.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/latino_beat/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/lbsalsa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#schedule" className="hover:text-primary transition-colors">Schedule</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Location</h4>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-sm">Transparent Hall<br />Student Union Building<br />Technion, Haifa</span>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-accent" /> for the Latin dance community in Haifa
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © 2025 Latino Beat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

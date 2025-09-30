
import { Button } from '@/components/ui/button';
import { MessageCircle, Instagram, Facebook, MapPin, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/972559742999?text=הרשמה', '_blank');
  };

  const handleGoogleMapsClick = () => {
    window.open('https://maps.google.com/?q=Student+Union+Building,+Technion,+Haifa,+Israel', '_blank');
  };

  const handleWazeClick = () => {
    window.open('https://waze.com/ul?q=Student%20Union%20Building%20Technion%20Haifa&navigate=yes', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to
              <span className="text-primary font-dancing"> Dance?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join our vibrant community and start your Latin dance journey today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground text-center md:text-left">Get in Touch</h3>
              
              <div 
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-all cursor-pointer"
                onClick={handleWhatsAppClick}
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">WhatsApp</h4>
                  <p className="text-muted-foreground">Quick registration & updates</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Transparent Hall, Student Union Building<br />Technion, Haifa</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground text-center md:text-left">Quick Actions</h3>
              
              <Button 
                size="lg" 
                className="w-full text-base md:text-lg py-4 md:py-6"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                Sign up on WhatsApp
              </Button>

              <div className="space-y-4">
                <h4 className="text-lg md:text-xl font-semibold text-foreground text-center md:text-left">Navigation</h4>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1 text-sm md:text-base py-3 md:py-4"
                    onClick={handleGoogleMapsClick}
                  >
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Open in Google Maps
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1 text-sm md:text-base py-3 md:py-4"
                    onClick={handleWazeClick}
                  >
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Open in Waze
                  </Button>
                </div>
              </div>

              <div className="pt-2">
                <h4 className="text-lg md:text-xl font-semibold mb-4 text-foreground text-center md:text-left">Follow Our Journey</h4>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1 text-sm md:text-base py-3 md:py-4"
                    onClick={() => window.open('https://www.instagram.com/latino_beat/?hl=en', '_blank')}
                  >
                    <Instagram className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Instagram
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="flex-1 text-sm md:text-base py-3 md:py-4"
                    onClick={() => window.open('https://www.facebook.com/lbsalsa/', '_blank')}
                  >
                    <Facebook className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Facebook
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-card border border-border rounded-xl p-4 md:p-8">
            <h3 className="text-lg md:text-2xl font-semibold mb-4 text-foreground">Ready to Start Dancing?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Join hundreds of dancers who have already discovered the joy of Latin dance at Latino Beat. 
              Sign up via WhatsApp and join us for lessons and parties!
            </p>
            <Button 
              size="lg" 
              className="text-base md:text-xl px-6 md:px-12 py-3 md:py-6 pulse-glow w-full sm:w-auto"
              onClick={handleWhatsAppClick}
            >
              Start Dancing Today! 💃🕺
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

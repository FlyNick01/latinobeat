
import { Button } from '@/components/ui/button';
import { MessageCircle, MapPin } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/972559742999?text=הרשמה', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center latin-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-white rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-white rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-white rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 class="visually-hidden">Bachata & Salsa Classes in Haifa – Latino Beat Dance School and Club</h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 slide-in-left">
            Feel the
            <span className="block font-dancing text-6xl md:text-8xl text-latin-gold">
              Latino Beat
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 slide-in-right opacity-90 max-w-2xl mx-auto">
            Discover the passion of Salsa & Bachata in the heart of Haifa. 
            Join our vibrant community where dance meets soul.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-up">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 dance-shadow"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Sign up on WhatsApp
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-lg fade-in-up opacity-90">
            <MapPin className="w-5 h-5" />
            <span>Technion Student Union • Sundays & Wednesdays</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

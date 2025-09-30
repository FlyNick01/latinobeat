
import { Button } from '@/components/ui/button';
import { Clock, Star, Users } from 'lucide-react';

const ClassesSection = () => {
  const classes = [
    {
      name: 'Salsa Fundamentals',
      level: 'Beginner',
      duration: '60 min',
      price: '₪80',
      description: 'Learn the essential steps, timing, and basic moves of Salsa. Perfect for absolute beginners.',
      highlights: ['Basic steps & timing', 'Partner connection', 'Simple turns', 'Musical interpretation']
    },
    {
      name: 'Salsa Intermediate',
      level: 'Intermediate',
      duration: '75 min',
      price: '₪95',
      description: 'Advance your Salsa with complex patterns, styling, and dynamic partner work.',
      highlights: ['Advanced patterns', 'Styling & footwork', 'Multiple spins', 'Lead & follow techniques']
    },
    {
      name: 'Bachata Sensual',
      level: 'All Levels',
      duration: '60 min',
      price: '₪80',
      description: 'Discover the romantic and sensual world of Bachata with beautiful body movement.',
      highlights: ['Body waves & isolations', 'Romantic connection', 'Modern bachata', 'Musicality']
    },
    {
      name: 'Social Dance Party',
      level: 'All Levels',
      duration: '3 hours',
      price: '₪50',
      description: 'Practice your moves in a fun, social environment with live DJ and refreshments.',
      highlights: ['Open dancing', 'DJ music', 'Refreshments', 'Community building']
    }
  ];

  return (
    <section id="classes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our
              <span className="text-primary font-dancing"> Classes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From your very first step to advanced techniques, we have the perfect class for your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {classes.map((classItem, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{classItem.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {classItem.level}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {classItem.duration}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{classItem.price}</div>
                    <div className="text-sm text-muted-foreground">per class</div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{classItem.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-foreground">What you'll learn:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                    {classItem.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full" size="lg">
                  Book This Class
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-latin-warm/10 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">First Class FREE!</h3>
            <p className="text-muted-foreground mb-6">
              New to Latino Beat? Try any beginner class absolutely free. No commitment, just pure dance joy!
            </p>
            <Button size="lg" className="text-lg px-8">
              Claim Your Free Class
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;

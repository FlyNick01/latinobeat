
import { Heart, Users, Trophy, Music } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: 'Passion First',
      description: 'We believe dance is a language of the heart. Every step tells a story.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join a warm, inclusive family where everyone belongs and grows together.'
    },
    {
      icon: Trophy,
      title: 'All Levels',
      description: 'From absolute beginners to advanced dancers, we meet you where you are.'
    },
    {
      icon: Music,
      title: 'Authentic',
      description: 'Learn traditional techniques with contemporary flair from experienced instructors.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              More Than Just
              <span className="text-primary font-dancing"> Dance</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Latino Beat, we create magic through movement. Our studio isn't just a place to learn steps – 
              it's where strangers become friends, confidence blooms, and the rhythm of Latin America comes alive 
              in the beautiful city of Haifa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full latin-gradient flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-latin-warm/20 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              Why Choose Latino Beat?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto"> 
              We focus on technique, musicality, and most importantly - having fun while building 
              lasting connections in our dance community.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span>✨ Professional Instructors</span>
              <span>🎵 Authentic Music</span>
              <span>🏆 Beginner Friendly</span>
              <span>💃 Social Dance Parties</span>
              <span>🌟 Supportive Community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import { Heart, Users, Star } from 'lucide-react';

const AboutSectionHe = () => {
  const features = [
    {
      icon: Heart,
      title: 'תשוקה לטינית',
      description: 'חוו את האנרגיה המדבקת והתשוקה של ריקודים לטיניים אותנטיים'
    },
    {
      icon: Users,
      title: 'קהילה תומכת',
      description: 'הצטרפו למשפחה חמה של רקדנים מכל הרמות והרקעים'
    },
    {
      icon: Star,
      title: 'מורים מקצועיים',
      description: 'למדו מרקדנים מנוסים עם ידע עמוק בתרבות הלטינית'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="text-primary">מי אנחנו</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
            לטינוביט הוא לא רק בית ספר לריקוד - זה בית שני. כאן, בלב חיפה, יצרנו מקום בו תשוקה פוגשת קהילה, 
            ובו כל צעד מספר סיפור. בין אם אתם מתחילים או רקדנים מנוסים, תמצאו כאן את הבית שלכם על הרחבה.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-xl bg-latin-warm/10 border border-latin-warm/20">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">הפילוסופיה שלנו</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              אנחנו מאמינים שריקוד הוא שפה אוניברסלית שמחברת בין לבבות. בלטינוביט, אנחנו לא רק מלמדים צעדים - 
              אנחנו מעבירים תרבות, בונים ביטחון עצמי ויוצרים זיכרונות שיחזיקו מעמד לכל החיים.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionHe;

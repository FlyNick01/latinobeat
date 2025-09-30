
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Banknote, ExternalLink } from 'lucide-react';

const ScheduleSectionHe = () => {
  const schedule = [
    {
      day: 'יום ראשון',
      dance: 'סלסה',
      times: [
        { time: '20:45', activity: 'פרה-פארטי' },
        { time: '21:15', activity: 'חימום ושיעורים לפי רמות' },
        { time: '22:00', activity: 'תחילת המסיבה' }
      ]
    },
    {
      day: 'יום רביעי', 
      dance: 'בצ\'טה',
      times: [
        { time: '20:45', activity: 'פרה-פארטי' },
        { time: '21:15', activity: 'חימום ושיעורים לפי רמות' },
        { time: '22:00', activity: 'תחילת המסיבה' }
      ]
    }
  ];

  const pricing = [
    { type: 'סטודנטים טכניון', price: '40₪' },
    { type: 'סטודנטים וחיילים', price: '45₪' },
    { type: 'כללי', price: '50₪' }
  ];

  const handleGoogleMapsClick = () => {
    window.open('https://maps.google.com/?q=Student+Union+Building,+Technion,+Haifa,+Israel', '_blank');
  };

  const handleWazeClick = () => {
    window.open('https://waze.com/ul?q=Student%20Union%20Building%20Technion%20Haifa&navigate=yes', '_blank');
  };

  return (
    <section id="schedule" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              <span className="text-primary">לוח זמנים שבועי</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              הצטרפו אלינו לשיעורי ריקוד ולאחר מכן למסיבות חברתיות בטכניון.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {schedule.map((day, index) => (
              <div key={index} className="bg-background border border-border rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  {day.day} - {day.dance}
                </h3>
                <div className="space-y-3">
                  {day.times.map((timeSlot, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-3 bg-latin-warm/10 rounded-lg">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="font-semibold text-foreground min-w-[60px]">{timeSlot.time}</span>
                      <span className="text-muted-foreground">{timeSlot.activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground rounded-xl p-8 mb-8">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Banknote className="w-6 h-6" />
                <h3 className="text-2xl font-semibold">מחירים</h3>
              </div>
              <p className="text-primary-foreground/80 mb-6">
                אותו מחיר לשיעור בלבד, מסיבה בלבד, או שניהם יחד!
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {pricing.map((price, index) => (
                <div key={index} className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-semibold">{price.type}</div>
                  <div className="text-2xl font-bold text-latin-gold">{price.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background border border-border rounded-xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">מיקום</h3>
            </div>
            <p className="text-lg mb-2">אולם שקוף, בית הסטודנט</p>
            <p className="text-muted-foreground mb-6">
              טכניון, חיפה • Transparent Hall, Student Union Building, Technion, Haifa
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={handleGoogleMapsClick}
                className="flex-1 sm:flex-none"
              >
                <MapPin className="w-5 h-5 ml-2" />
                פתח בגוגל מפות
              </Button>
              <Button 
                size="lg"
                onClick={handleWazeClick}
                className="flex-1 sm:flex-none"
              >
                <MapPin className="w-5 h-5 ml-2" />
                פתח בווייז
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSectionHe;

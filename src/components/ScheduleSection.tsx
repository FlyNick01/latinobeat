
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Banknote } from 'lucide-react';

const ScheduleSection = () => {
  const schedule = [
    {
      day: 'Sunday',
      dance: 'Salsa',
      times: [
        { time: '20:45', activity: 'Pre-party' },
        { time: '21:15', activity: 'Warm up & Lessons by levels' },
        { time: '22:00', activity: 'Party starts' }
      ]
    },
    {
      day: 'Tuesday', 
      dance: 'Bachata',
      times: [
        { time: '20:45', activity: 'Pre-party' },
        { time: '21:15', activity: 'Warm up & Lessons by levels' },
        { time: '22:00', activity: 'Party starts' }
      ]
    }
  ];

  const pricing = [
    { type: 'Technion Students', price: '40₪' },
    { type: 'Students & Soldiers', price: '45₪' },
    { type: 'Regular', price: '50₪' }
  ];

  return (
    <section id="schedule" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Weekly
              <span className="text-primary font-dancing"> Schedule</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join us for dance lessons followed by social parties at the Technion.
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
                <h3 className="text-2xl font-semibold">Pricing</h3>
              </div>
              <p className="text-primary-foreground/80 mb-6">
                Same price for lessons only, party only, or both!
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
              <h3 className="text-2xl font-semibold">Location</h3>
            </div>
            <p className="text-lg mb-2">Transparent Hall, Student Union Building</p>
            <p className="text-muted-foreground mb-6">
              Technion, Haifa • אולם שקוף, בית הסטודנט, טכניון, חיפה
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    'https://maps.app.goo.gl/AD9LTDMtBr6fMDv17',
                      '_blank'
                    )
                  }
                className="w-full"
  >
                <MapPin className="w-5 h-5 mr-2" />
                Open in Google Maps
              </Button>

              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    'https://waze.com/ul?q=Technion Student Union Building Haifa&navigate=yes',
                    '_blank'
                    )
                  }
                className="w-full"
  >
                <MapPin className="w-5 h-5 mr-2" />
                Open in Waze
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;

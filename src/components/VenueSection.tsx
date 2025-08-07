import { MapPin, Wifi, Coffee, Car } from 'lucide-react';
import venue1 from '@/assets/venue-1.jpg';

const VenueSection = () => {
  const amenities = [
    { icon: Wifi, label: 'High-Speed WiFi', description: '24/7 Fiber Connection' },
    { icon: Coffee, label: 'Unlimited Caffeine', description: 'Coffee, Tea & Energy Drinks' },
    { icon: Car, label: 'Easy Access', description: 'Public Transport & Parking' },
    { icon: MapPin, label: 'Prime Location', description: 'Central Lucknow Campus' }
  ];

  return (
    <section id="venue" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-primary-neon">
            FORTRESS OF SOLITUDE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your 36-hour sanctuary equipped with everything needed to code through the apocalypse and win!
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {/* Large Venue Image */}
          <div className="md:col-span-2 lg:col-span-3 doom-card rounded-xl overflow-hidden group">
            <div className="relative h-80 lg:h-96">
              <img
                src={venue1}
                alt="Amity University Campus"
                className=" scale-105 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute -inset-20 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-orbitron font-bold text-primary-glow mb-2">
                  Amity University, Lucknow
                </h3>
                <p className="text-foreground">
                  Malhaur Railway Station Road, Gomti Nagar, Lucknow, Nijampur Malhaur, Uttar Pradesh 226028
                </p>
              </div>
            </div>
          </div>
          {/* Info Card */}
          <div className="doom-card p-0 rounded-xl flex flex-col justify-center h-[400px] w-full">
            <div className="w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.627387917296!2d81.04780877648764!3d26.851801262703617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2496846a6ed%3A0x125a5ffab9061e23!2sAmity%20University%20Lucknow%20Campus!5e0!3m2!1sen!2sin!4v1754564137839!5m2!1sen!2sin"
                className="w-full h-full rounded-xl"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div key={index} className="doom-card p-6 rounded-xl text-center group hover:scale-105 transition-transform">
              <amenity.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-primary-neon transition-colors" />
              <h4 className="font-orbitron font-bold text-foreground mb-2">
                {amenity.label}
              </h4>
              <p className="text-sm text-muted-foreground">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VenueSection;

import { MapPin, Wifi, Coffee, Car } from 'lucide-react';
import venue1 from '@/assets/venue-1.jpg';
import venue2 from '@/assets/venue-2.jpg';

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
            Your 36-hour sanctuary equipped with everything needed to code through the apocalypse.
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
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-orbitron font-bold text-primary-glow mb-2">
                  Amity University, Lucknow
                </h3>
                <p className="text-foreground">
                  State-of-the-art campus with modern facilities
                </p>
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="doom-card p-6 rounded-xl flex flex-col justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-orbitron font-bold text-primary-glow mb-2">Location</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sector 125, Noida-Greater Noida Expressway, Near Pari Chowk, Uttar Pradesh
              </p>
            </div>
          </div>

          {/* Lab Image */}
          <div className="doom-card rounded-xl overflow-hidden group">
            <div className="relative h-48">
              <img 
                src={venue2} 
                alt="Computer Lab" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h4 className="font-orbitron font-bold text-primary-glow text-sm">
                  Coding Labs
                </h4>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="doom-card p-6 rounded-xl">
            <h4 className="font-orbitron font-bold text-primary-glow mb-4 text-center">
              Battle Stats
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Capacity</span>
                <span className="text-foreground font-semibold">200+ Hackers</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Workstations</span>
                <span className="text-foreground font-semibold">50+ Stations</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Meeting Rooms</span>
                <span className="text-foreground font-semibold">8 Rooms</span>
              </div>
            </div>
          </div>

          {/* Quote Card */}
          <div className="md:col-span-2 doom-card p-6 rounded-xl bg-gradient-to-r from-secondary/10 to-primary/10">
            <blockquote className="text-lg italic text-primary-glow mb-3">
              "The perfect fusion of academic excellence and cutting-edge technology."
            </blockquote>
            <cite className="text-sm text-muted-foreground">— Campus Overview</cite>
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

        {/* Directions */}
        <div className="mt-16 text-center">
          <div className="doom-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold text-primary-glow mb-4">
              Navigation to the Fortress
            </h3>
            <p className="text-muted-foreground mb-6">
              Multiple transportation options available to reach the venue. 
              Detailed directions will be shared with registered participants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-glow transition-colors">
                Get Directions
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                Download Map
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
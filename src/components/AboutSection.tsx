import { useState, useEffect } from 'react';
import { Calendar, Clock, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to first week of October (placeholder date)
    const targetDate = new Date('2025-10-05T10:00:00');

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Clock, label: 'Duration', value: '36 Hours' },
    { icon: Calendar, label: 'Date', value: 'Oct 5-6, 2025' },
    { icon: Users, label: 'Team Size', value: 'Max 5' },
    { icon: Zap, label: 'Tracks', value: '4 Domains' }
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-primary-neon">
            ENTER THE VOID
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8" />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <div className="space-y-10">
            <h3 className="text-3xl font-orbitron font-bold text-primary-glow mb-6">
              The Apocalypse is Here
            </h3>

            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                <span className="text-destructive font-semibold">Doomsday </span>
                awakens, only the most cunning minds can forge salvation through code.
              </p>

              <p>
                <span className="text-primary font-semibold">Brainiac's algorithms</span> have corrupted
                reality itself. The barriers between digital and physical realms crumble.
                Your mission: <span className="text-primary-neon font-semibold">battle chaos with code</span>,
                turn madness into machine intelligence.
              </p>

              <p>
                For 36 hours, you will traverse the underworld of innovation,
                wielding nothing but your intellect, caffeine, and the raw power of creation.
                <span className="text-primary-glow font-semibold"> Welcome to Doom from the DC.</span>
              </p>
            </div>

            <div className="p-6 doom-card rounded-lg">
              <h4 className="text-xl font-orbitron font-bold text-primary mb-3">
                Mission Objective
              </h4>
              <p className="text-muted-foreground">
                Build solutions that would make even the Justice League proud. <br />
                It’s a counterstrike against entropy.
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="text-center">
            <h3 className="text-2xl font-orbitron font-bold mb-8 text-primary-glow">
              COUNTDOWN TO CHAOS
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="doom-card p-6 rounded-lg neon-glow">
                  <div className="text-4xl md:text-5xl font-black text-primary-neon mb-2">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm font-orbitron uppercase tracking-wider text-muted-foreground">
                    {unit}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="doom-card p-4 rounded-lg group">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-primary-neon transition-colors" />
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

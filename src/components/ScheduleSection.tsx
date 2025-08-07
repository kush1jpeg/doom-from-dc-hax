import { useState } from 'react';
import { Clock, Coffee, Trophy, Users, Code, Presentation } from 'lucide-react';

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState(0);

  const schedule = [
    {
      day: 'Day 1 - The Awakening',
      date: 'October 5, 2024',
      events: [
        {
          time: '09:00 - 10:00',
          title: 'Registration & Check-in',
          description: 'Welcome to the apocalypse. Get your battle gear.',
          icon: Users,
          type: 'registration'
        },
        {
          time: '10:00 - 11:00',
          title: 'Opening Ceremony',
          description: 'Witness the beginning of the end. Rules, tracks, and inspiration.',
          icon: Presentation,
          type: 'ceremony'
        },
        {
          time: '11:00 - 11:30',
          title: 'Team Formation & Networking',
          description: 'Assemble your squad if you haven\'t already.',
          icon: Users,
          type: 'networking'
        },
        {
          time: '11:30 - 12:00',
          title: 'Problem Statements Release',
          description: 'The challenges are revealed. Choose your battlefield.',
          icon: Code,
          type: 'announcement'
        },
        {
          time: '12:00 - 13:00',
          title: 'Lunch & Strategy',
          description: 'Fuel up and plan your attack.',
          icon: Coffee,
          type: 'break'
        },
        {
          time: '13:00 - 18:00',
          title: 'Hacking Phase 1',
          description: 'The battle begins. Code like your life depends on it.',
          icon: Code,
          type: 'hacking'
        },
        {
          time: '18:00 - 19:00',
          title: 'Dinner Break',
          description: 'Refuel your body and mind.',
          icon: Coffee,
          type: 'break'
        },
        {
          time: '19:00 - 24:00',
          title: 'Night Coding Session',
          description: 'When the darkness falls, true coders emerge.',
          icon: Code,
          type: 'hacking'
        }
      ]
    },
    {
      day: 'Day 2 - The Reckoning',
      date: 'October 6, 2024',
      events: [
        {
          time: '00:00 - 08:00',
          title: 'Midnight to Dawn Marathon',
          description: 'The longest night. Caffeine is your ally.',
          icon: Code,
          type: 'hacking'
        },
        {
          time: '08:00 - 09:00',
          title: 'Breakfast & Mentor Check-ins',
          description: 'Morning fuel and guidance from the elders.',
          icon: Coffee,
          type: 'break'
        },
        {
          time: '09:00 - 12:00',
          title: 'Final Sprint',
          description: 'Last chance to perfect your creation.',
          icon: Code,
          type: 'hacking'
        },
        {
          time: '12:00 - 13:00',
          title: 'Submission Deadline',
          description: 'The final hour. Deploy or perish.',
          icon: Trophy,
          type: 'deadline'
        },
        {
          time: '13:00 - 14:00',
          title: 'Lunch Break',
          description: 'Breath before the judgment.',
          icon: Coffee,
          type: 'break'
        },
        {
          time: '14:00 - 16:00',
          title: 'Project Presentations',
          description: 'Showcase your solution to save the world.',
          icon: Presentation,
          type: 'presentation'
        },
        {
          time: '16:00 - 17:00',
          title: 'Judging & Deliberation',
          description: 'The council decides the fate of warriors.',
          icon: Trophy,
          type: 'judging'
        },
        {
          time: '17:00 - 18:00',
          title: 'Closing Ceremony & Awards',
          description: 'Heroes are crowned. Legends are born.',
          icon: Trophy,
          type: 'ceremony'
        }
      ]
    }
  ];

  const getEventTypeColor = (type: string) => {
    const colors = {
      registration: 'border-l-blue-500 bg-blue-500/10',
      ceremony: 'border-l-purple-500 bg-purple-500/10',
      networking: 'border-l-green-500 bg-green-500/10',
      announcement: 'border-l-primary bg-primary/10',
      break: 'border-l-orange-500 bg-orange-500/10',
      hacking: 'border-l-primary-neon bg-primary-neon/10',
      deadline: 'border-l-destructive bg-destructive/10',
      presentation: 'border-l-yellow-500 bg-yellow-500/10',
      judging: 'border-l-purple-600 bg-purple-600/10'
    };
    return colors[type as keyof typeof colors] || 'border-l-gray-500 bg-gray-500/10';
  };

  return (
    <section id="schedule" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-primary-neon">
            BATTLE TIMELINE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            36 hours of non-stop action. Every moment counts in the fight against digital chaos.
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex justify-center mb-12">
          <div className="doom-card p-2 rounded-lg flex gap-2">
            {schedule.map((day, index) => (
              <button
                key={index}
                onClick={() => setActiveDay(index)}
                className={`px-6 py-3 rounded-lg font-orbitron font-bold transition-all ${
                  activeDay === index
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/20'
                }`}
              >
                {day.day}
              </button>
            ))}
          </div>
        </div>

        {/* Active Day Content */}
        <div className="doom-card p-8 rounded-xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-orbitron font-bold text-primary-glow mb-2">
              {schedule[activeDay].day}
            </h3>
            <p className="text-muted-foreground text-lg">
              {schedule[activeDay].date}
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {schedule[activeDay].events.map((event, index) => (
              <div 
                key={index}
                className={`relative pl-8 pb-6 border-l-4 rounded-lg p-6 transition-all hover:scale-[1.02] ${getEventTypeColor(event.type)}`}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                  <event.icon className="w-3 h-3 text-primary" />
                </div>

                {/* Event Content */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="font-orbitron font-bold text-primary text-lg">
                        {event.time}
                      </span>
                    </div>
                    <h4 className="text-xl font-orbitron font-bold text-foreground mb-2">
                      {event.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {event.description}
                    </p>
                  </div>

                  {/* Event Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <event.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="doom-card p-6 rounded-xl text-center">
            <Coffee className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-orbitron font-bold text-foreground mb-2">
              24/7 Fuel Station
            </h4>
            <p className="text-sm text-muted-foreground">
              Unlimited coffee, snacks, and energy drinks available throughout the event.
            </p>
          </div>

          <div className="doom-card p-6 rounded-xl text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-orbitron font-bold text-foreground mb-2">
              Mentor Support
            </h4>
            <p className="text-sm text-muted-foreground">
              Industry experts available for guidance and technical support.
            </p>
          </div>

          <div className="doom-card p-6 rounded-xl text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-orbitron font-bold text-foreground mb-2">
              Flexible Schedule
            </h4>
            <p className="text-sm text-muted-foreground">
              Minor adjustments may occur. Stay tuned to official announcements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
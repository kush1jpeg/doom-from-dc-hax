import { useState } from 'react';
import { Brain, Wifi, Coins, Lightbulb } from 'lucide-react';

const TracksSection = () => {
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null);

  const tracks = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      shortTitle: 'AI',
      doomTheme: 'Brainiac\'s Domain',
      description: 'Harness the power of artificial intelligence to combat digital chaos. Build intelligent systems that can predict, adapt, and evolve.',
      problems: [
        'Predictive analytics for crisis management',
        'Computer vision for threat detection',
        'NLP for automated decision making',
        'AI-powered optimization algorithms'
      ],
      relevance: 'Like Brainiac\'s vast intellect, your AI solutions will process infinite data to find patterns in chaos.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Wifi,
      title: 'Internet of Things',
      shortTitle: 'IoT',
      doomTheme: 'Cyborg\'s Network',
      description: 'Connect the physical and digital realms. Create smart ecosystems that respond to environmental changes in real-time.',
      problems: [
        'Smart city infrastructure monitoring',
        'Environmental disaster prediction',
        'Automated emergency response systems',
        'Connected health monitoring devices'
      ],
      relevance: 'Channel Cyborg\'s ability to interface with any technology, creating networks that transcend boundaries.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Coins,
      title: 'Web3 & Blockchain',
      shortTitle: 'Web3',
      doomTheme: 'Luthor\'s Ledger',
      description: 'Revolutionize trust and transparency. Build decentralized solutions that empower communities and ensure data integrity.',
      problems: [
        'Decentralized identity verification',
        'Supply chain transparency',
        'Voting and governance systems',
        'Cryptocurrency payment solutions'
      ],
      relevance: 'Master the blockchain like Lex Luthor masters corporate empires—with precision, strategy, and innovation.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lightbulb,
      title: 'Open Innovation',
      shortTitle: 'Innovation',
      doomTheme: 'Justice League Wildcard',
      description: 'Think beyond conventional boundaries. Tackle any challenge with creative solutions that don\'t fit traditional categories.',
      problems: [
        'Climate change mitigation tools',
        'Educational technology platforms',
        'Social impact applications',
        'Creative problem-solving solutions'
      ],
      relevance: 'Like the Justice League\'s diverse powers, innovation comes from unexpected combinations and creative thinking.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="tracks" className="py-24 px-4 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-primary-neon">
            CHOOSE YOUR BATTLEFIELD
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four domains of digital warfare await. Pick your weapons, assemble your team, 
            and prepare to face the challenges that threaten our reality.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`relative doom-card rounded-xl p-6 cursor-pointer transition-all duration-500 ${
                hoveredTrack === index ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredTrack(index)}
              onMouseLeave={() => setHoveredTrack(null)}
            >
              {/* Icon & Title */}
              <div className="text-center mb-6">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${track.color} mb-4`}>
                  <track.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-primary-glow mb-2">
                  {track.shortTitle}
                </h3>
                <p className="text-lg text-foreground">
                  {track.title}
                </p>
              </div>

              {/* Doom Theme */}
              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 bg-destructive/20 text-destructive rounded-full text-sm font-semibold">
                  {track.doomTheme}
                </span>
              </div>

              {/* Expandable Content */}
              <div className={`transition-all duration-500 overflow-hidden ${
                hoveredTrack === index ? 'max-h-96 opacity-100' : 'max-h-16 opacity-70'
              }`}>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {track.description}
                </p>

                {hoveredTrack === index && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <h4 className="text-primary font-semibold mb-2 text-sm">Example Challenges:</h4>
                      <ul className="space-y-1 text-xs text-muted-foreground">
                        {track.problems.map((problem, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {problem}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 bg-secondary/20 rounded-lg">
                      <p className="text-xs text-primary-glow italic">
                        {track.relevance}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Hover Indicator */}
              {hoveredTrack !== index && (
                <div className="text-center mt-4">
                  <span className="text-xs text-muted-foreground">Hover to explore</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="doom-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold text-primary-glow mb-4">
              Ready to Choose Your Path?
            </h3>
            <p className="text-muted-foreground mb-6">
              Teams can switch tracks during the event, but choose wisely—each domain requires different skills and approaches.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-8 py-3 rounded-lg font-orbitron font-bold uppercase tracking-wider neon-glow transition-all hover:from-primary-glow hover:to-primary-neon"
              >
                Join the Battle
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
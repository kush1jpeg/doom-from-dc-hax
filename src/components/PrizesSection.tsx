import { Trophy, Gift, Users, Zap, Star, Medal } from 'lucide-react';

const PrizesSection = () => {
  const prizes = [
    {
      position: '1st Place',
      title: 'Champion of Apokolips',
      amount: '₹50,000',
      icon: Trophy,
      color: 'from-yellow-400 to-orange-500',
      perks: ['Cash Prize', 'Winner Certificate', 'Premium Swag Kit', 'Internship Opportunities']
    },
    {
      position: '2nd Place',
      title: 'Guardian of Gotham',
      amount: '₹30,000',
      icon: Medal,
      color: 'from-gray-300 to-gray-500',
      perks: ['Cash Prize', 'Runner-up Certificate', 'Swag Kit', 'Mentorship Program']
    },
    {
      position: '3rd Place',
      title: 'Defender of Metropolis',
      amount: '₹20,000',
      icon: Star,
      color: 'from-amber-600 to-yellow-700',
      perks: ['Cash Prize', 'Certificate', 'Swag Kit', 'Network Access']
    }
  ];

  const specialPrizes = [
    { title: 'Best Innovation', description: 'Most creative solution', prize: '₹10,000' },
    { title: 'Best Design', description: 'Outstanding UI/UX', prize: '₹10,000' },
    { title: 'Best AI Implementation', description: 'Superior AI integration', prize: '₹10,000' },
    { title: 'People\'s Choice', description: 'Community favorite', prize: '₹5,000' }
  ];

  const sponsors = [
    { name: 'Tech Corp', level: 'Platinum' },
    { name: 'Innovation Labs', level: 'Gold' },
    { name: 'StartupHub', level: 'Silver' },
    { name: 'CodeCraft', level: 'Bronze' }
  ];

  const allPerks = [
    'Networking with industry leaders',
    'Job placement assistance',
    'Exclusive developer communities',
    'Workshop access',
    'Mentorship programs',
    'Certificate of participation',
    'Meals and refreshments',
    'Exclusive merchandise'
  ];

  return (
    <section id="prizes" className="py-24 px-4 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-primary-neon">
            SPOILS OF WAR
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Victory brings rewards worthy of legends. Fight for glory, prizes, and the power to shape the future.
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <div 
              key={index} 
              className={`doom-card rounded-xl p-8 text-center relative overflow-hidden group ${
                index === 0 ? 'scale-105 border-2 border-primary' : ''
              }`}
            >
              {/* Winner Glow Effect */}
              {index === 0 && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-xl" />
              )}
              
              <div className="relative z-10">
                <div className={`inline-flex p-6 rounded-full bg-gradient-to-r ${prize.color} mb-6`}>
                  <prize.icon className="w-12 h-12 text-white" />
                </div>
                
                <div className="mb-6">
                  <h3 className="text-sm font-orbitron uppercase tracking-wider text-muted-foreground mb-2">
                    {prize.position}
                  </h3>
                  <h4 className="text-2xl font-orbitron font-bold text-primary-glow mb-3">
                    {prize.title}
                  </h4>
                  <div className="text-4xl font-black text-foreground mb-4">
                    {prize.amount}
                  </div>
                </div>

                <div className="space-y-2">
                  {prize.perks.map((perk, i) => (
                    <div key={i} className="flex items-center justify-center text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-primary mr-2" />
                      {perk}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Prizes */}
        <div className="mb-16">
          <h3 className="text-3xl font-orbitron font-bold text-center text-primary-glow mb-8">
            Special Recognition Awards
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrizes.map((award, index) => (
              <div key={index} className="doom-card p-6 rounded-xl text-center">
                <Gift className="w-10 h-10 text-primary mx-auto mb-4" />
                <h4 className="font-orbitron font-bold text-foreground mb-2">
                  {award.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {award.description}
                </p>
                <div className="text-xl font-bold text-primary">
                  {award.prize}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Participants Perks */}
        <div className="mb-16">
          <h3 className="text-3xl font-orbitron font-bold text-center text-primary-glow mb-8">
            Every Warrior Gets
          </h3>
          <div className="doom-card p-8 rounded-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {allPerks.map((perk, index) => (
                <div key={index} className="flex items-center text-muted-foreground">
                  <Users className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-sm">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prize Pool Total */}
        <div className="text-center mb-16">
          <div className="doom-card p-8 rounded-xl max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-primary-glow/10">
            <h3 className="text-2xl font-orbitron font-bold text-primary-glow mb-4">
              Total Prize Pool
            </h3>
            <div className="text-6xl font-black text-primary-neon mb-4">
              ₹1.5L+
            </div>
            <p className="text-muted-foreground">
              Plus exclusive swag, certificates, and networking opportunities worth much more
            </p>
          </div>
        </div>

        {/* Sponsors */}
        <div className="text-center">
          <h3 className="text-3xl font-orbitron font-bold text-primary-glow mb-8">
            Powered by Our Allies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="doom-card p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {sponsor.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-orbitron font-bold text-foreground mb-1">
                  {sponsor.name}
                </h4>
                <span className="text-sm text-primary">
                  {sponsor.level} Partner
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <p className="text-muted-foreground mb-4">
              Interested in sponsoring the future of innovation?
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-orbitron font-bold uppercase tracking-wider hover:bg-primary-glow transition-colors">
              Become a Sponsor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
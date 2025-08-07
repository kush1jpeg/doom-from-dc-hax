import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Users, Mail, Github, School } from 'lucide-react';

const RegistrationSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    teamName: '',
    teamLeader: '',
    email: '',
    college: '',
    members: ['', '', ''],
    github: '',
    portfolio: '',
    experience: '',
    track: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "Welcome to the apocalypse. Check your email for next steps.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMemberChange = (index: number, value: string) => {
    const newMembers = [...formData.members];
    newMembers[index] = value;
    setFormData(prev => ({ ...prev, members: newMembers }));
  };

  const tracks = [
    'AI & Machine Learning',
    'Internet of Things',
    'Web3 & Blockchain',
    'Open Innovation'
  ];

  return (
    <section id="registration" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-primary-neon">
            JOIN THE RESISTANCE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Assemble your squad and register for the ultimate coding battle. 
            The fate of the digital realm rests in your hands.
          </p>
        </div>

        {/* Registration Form */}
        <div className="doom-card p-8 rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Team Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-orbitron font-bold text-primary-glow flex items-center">
                <Users className="w-6 h-6 mr-3" />
                Team Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="teamName" className="text-foreground font-semibold">
                    Team Name *
                  </Label>
                  <Input
                    id="teamName"
                    placeholder="The Justice Coders"
                    value={formData.teamName}
                    onChange={(e) => handleInputChange('teamName', e.target.value)}
                    className="bg-secondary/20 border-primary/30 focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="track" className="text-foreground font-semibold">
                    Preferred Track
                  </Label>
                  <select
                    id="track"
                    value={formData.track}
                    onChange={(e) => handleInputChange('track', e.target.value)}
                    className="w-full p-3 bg-secondary/20 border border-primary/30 rounded-md focus:border-primary focus:outline-none text-foreground"
                  >
                    <option value="">Choose your battlefield</option>
                    {tracks.map((track) => (
                      <option key={track} value={track}>{track}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Team Leader */}
            <div className="space-y-6">
              <h3 className="text-2xl font-orbitron font-bold text-primary-glow flex items-center">
                <Mail className="w-6 h-6 mr-3" />
                Team Leader Details
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="teamLeader" className="text-foreground font-semibold">
                    Full Name *
                  </Label>
                  <Input
                    id="teamLeader"
                    placeholder="Bruce Wayne"
                    value={formData.teamLeader}
                    onChange={(e) => handleInputChange('teamLeader', e.target.value)}
                    className="bg-secondary/20 border-primary/30 focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-semibold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="bruce@waynetech.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-secondary/20 border-primary/30 focus:border-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="college" className="text-foreground font-semibold flex items-center">
                  <School className="w-4 h-4 mr-2" />
                  College/University *
                </Label>
                <Input
                  id="college"
                  placeholder="Amity University, Lucknow"
                  value={formData.college}
                  onChange={(e) => handleInputChange('college', e.target.value)}
                  className="bg-secondary/20 border-primary/30 focus:border-primary"
                  required
                />
              </div>
            </div>

            {/* Team Members */}
            <div className="space-y-6">
              <h3 className="text-2xl font-orbitron font-bold text-primary-glow">
                Team Members (Optional - Max 4 total)
              </h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                {formData.members.map((member, index) => (
                  <div key={index} className="space-y-2">
                    <Label className="text-foreground font-semibold">
                      Member {index + 2}
                    </Label>
                    <Input
                      placeholder={`Team member ${index + 2}`}
                      value={member}
                      onChange={(e) => handleMemberChange(index, e.target.value)}
                      className="bg-secondary/20 border-primary/30 focus:border-primary"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Links & Experience */}
            <div className="space-y-6">
              <h3 className="text-2xl font-orbitron font-bold text-primary-glow flex items-center">
                <Github className="w-6 h-6 mr-3" />
                Links & Experience
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="github" className="text-foreground font-semibold">
                    GitHub Profile
                  </Label>
                  <Input
                    id="github"
                    placeholder="https://github.com/username"
                    value={formData.github}
                    onChange={(e) => handleInputChange('github', e.target.value)}
                    className="bg-secondary/20 border-primary/30 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="portfolio" className="text-foreground font-semibold">
                    Portfolio/LinkedIn
                  </Label>
                  <Input
                    id="portfolio"
                    placeholder="https://yourportfolio.com"
                    value={formData.portfolio}
                    onChange={(e) => handleInputChange('portfolio', e.target.value)}
                    className="bg-secondary/20 border-primary/30 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experience" className="text-foreground font-semibold">
                  Technical Experience & Skills
                </Label>
                <Textarea
                  id="experience"
                  placeholder="Tell us about your coding journey, hackathon experience, and technical skills..."
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  className="bg-secondary/20 border-primary/30 focus:border-primary min-h-24"
                />
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="space-y-6">
              <div className="doom-card p-6 rounded-lg bg-secondary/10">
                <h4 className="font-orbitron font-bold text-primary-glow mb-3">
                  Terms of Engagement
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Participants must be current students with valid ID</li>
                  <li>• Teams of 1-4 members are allowed</li>
                  <li>• Original code and ideas only - plagiarism will be eliminated</li>
                  <li>• By registering, you agree to share your creation's code</li>
                  <li>• Participation is free, but seats are limited</li>
                </ul>
              </div>

              <div className="text-center">
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg"
                  className="text-xl px-12 py-6 h-auto"
                >
                  Enter the Battle
                </Button>
              </div>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Registration closes when capacity is reached or 48 hours before the event.
          </p>
          <p className="text-sm text-primary">
            Questions? Contact us at doom@amity.edu
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
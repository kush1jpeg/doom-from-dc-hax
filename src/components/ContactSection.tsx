import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Twitter, 
  Linkedin, 
  MessageCircle,
  Send,
  Users
} from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you faster than The Flash!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const organizers = [
    {
      name: "Diana Prince",
      role: "Event Director",
      email: "diana.prince@amity.edu",
      speciality: "Overall Event Management"
    },
    {
      name: "Barry Allen",
      role: "Technical Lead",
      email: "barry.allen@amity.edu",
      speciality: "Technical Support & Infrastructure"
    },
    {
      name: "Clark Kent",
      role: "Community Manager",
      email: "clark.kent@amity.edu",
      speciality: "Participant Relations & Communication"
    },
    {
      name: "Bruce Wayne",
      role: "Partnerships Lead",
      email: "bruce.wayne@amity.edu",
      speciality: "Sponsorships & Industry Relations"
    }
  ];

  const socialLinks = [
    {
      platform: "Instagram",
      handle: "@doom_from_dc",
      icon: Instagram,
      color: "hover:text-pink-500",
      url: "#"
    },
    {
      platform: "Twitter",
      handle: "@DoomFromDC",
      icon: Twitter,
      color: "hover:text-blue-400",
      url: "#"
    },
    {
      platform: "LinkedIn",
      handle: "Doom from DC Hackathon",
      icon: Linkedin,
      color: "hover:text-blue-600",
      url: "#"
    },
    {
      platform: "Discord",
      handle: "Join our server",
      icon: MessageCircle,
      color: "hover:text-indigo-500",
      url: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-primary-neon">
            CONNECT WITH THE LEAGUE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Need help? Have questions? Want to join our mission? 
            The Justice League of organizers is here to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="doom-card p-8 rounded-xl">
            <h3 className="text-3xl font-orbitron font-bold text-primary-glow mb-6 flex items-center">
              <Send className="w-8 h-8 mr-3" />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-semibold">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Peter Parker"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
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
                    placeholder="peter@dailybugle.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-secondary/20 border-primary/30 focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground font-semibold">
                  Subject *
                </Label>
                <Input
                  id="subject"
                  placeholder="Question about the hackathon"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="bg-secondary/20 border-primary/30 focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-semibold">
                  Your Message *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help you prepare for the digital apocalypse..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-secondary/20 border-primary/30 focus:border-primary min-h-32"
                  required
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg"
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="doom-card p-8 rounded-xl">
              <h3 className="text-2xl font-orbitron font-bold text-primary-glow mb-6">
                Direct Contact
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold text-foreground">General Inquiries</p>
                    <a href="mailto:doom@amity.edu" className="text-primary hover:text-primary-glow">
                      doom@amity.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold text-foreground">Emergency Hotline</p>
                    <a href="tel:+919876543210" className="text-primary hover:text-primary-glow">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold text-foreground">Venue Address</p>
                    <p className="text-muted-foreground text-sm">
                      Amity University, Lucknow<br />
                      Sector 125, Noida-Greater Noida Expressway
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="doom-card p-8 rounded-xl">
              <h3 className="text-2xl font-orbitron font-bold text-primary-glow mb-6">
                Follow the Mission
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`flex items-center p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors ${social.color}`}
                  >
                    <social.icon className="w-6 h-6 mr-3" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {social.platform}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {social.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Organizing Team */}
        <div className="mt-16">
          <h3 className="text-3xl font-orbitron font-bold text-center text-primary-glow mb-12 flex items-center justify-center">
            <Users className="w-8 h-8 mr-3" />
            The Justice League (Organizing Team)
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizers.map((organizer, index) => (
              <div key={index} className="doom-card p-6 rounded-xl text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-2xl">
                    {organizer.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h4 className="font-orbitron font-bold text-foreground mb-1">
                  {organizer.name}
                </h4>
                <p className="text-primary text-sm mb-2">
                  {organizer.role}
                </p>
                <p className="text-muted-foreground text-xs mb-3">
                  {organizer.speciality}
                </p>
                <a 
                  href={`mailto:${organizer.email}`}
                  className="text-primary hover:text-primary-glow text-sm transition-colors"
                >
                  {organizer.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Info */}
        <div className="mt-16 text-center">
          <div className="doom-card p-8 rounded-xl max-w-2xl mx-auto bg-destructive/10 border border-destructive/30">
            <h3 className="text-2xl font-orbitron font-bold text-destructive mb-4">
              Emergency Contact
            </h3>
            <p className="text-muted-foreground mb-4">
              For urgent matters during the event, contact our 24/7 emergency line:
            </p>
            <a 
              href="tel:+919876543210" 
              className="text-2xl font-bold text-destructive hover:text-destructive/80 transition-colors"
            >
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
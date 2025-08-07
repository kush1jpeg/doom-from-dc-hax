import {
  Instagram,
  MessageCircle,
  Users
} from 'lucide-react';
import FuzzyText from './ui/fuzzyText';


/// to fill the core team memebers
const ContactSection = () => {
  const organizers = [
    {
      name: " ",
      role: " ",
      email: " ",
      speciality: " "
    },
  ];

  const socialLinks = [
    {
      platform: "Instagram",
      handle: "@doom_from_dc",
      icon: Instagram,
      color: "hover:text-pink-500",
      url: "https://www.instagram.com/buildwithwaffle/"
    },
    {
      platform: "Discord",
      handle: "Join our server",
      icon: MessageCircle,
      color: "hover:text-indigo-500",
      url: "https://discord.com/invite/FryPg2xj3E"
    }
  ];

  return (
    <section id="contact" className="py-24 px-4">

      {/* Contact Information */}
      <div className="doom-card p-8 rounded-xl max-w-xl mx-auto">
        <h3 className="text-2xl font-orbitron font-bold text-primary-glow mb-6">
          Follow the community!
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

      {/* Organizing Team */}
      <div className="mt-16 text-center">
        {/* Heading */}
        <h3 className="text-2xl font-orbitron font-bold text-primary-glow mb-12 flex justify-center items-center">
          <Users className="w-8 h-8 mr-3" />
          The Justice League (Organizing Team)
        </h3>

        {/* Grid of Cards */}


        {/*  uncomment to display the team members shit

        <div className="flex justify-center">
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
        */}


      </div>


      <div className="mt-20 text-center text-teal-50 flex justify-center items-center font-orbitron">
        <FuzzyText >hack-Orion #2025</FuzzyText>
      </div>
    </section >
  );
};

export default ContactSection;

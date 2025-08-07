import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "When does the digital apocalypse begin?",
      answer: "The chaos unleashes on October 5th, 2024, at 9:00 AM and continues for exactly 36 hours until October 6th, 6:00 PM. Time to save the world through code!"
    },
    {
      question: "Where will this epic battle take place?",
      answer: "At the fortress of innovation - Amity University, Lucknow. The exact location will be sent to registered warriors. It's a tech-enabled campus perfect for our digital warfare."
    },
    {
      question: "What should I bring to survive the apocalypse?",
      answer: "Your laptop (obviously), chargers, a brain full of algorithms, your student ID, comfortable clothes, and an insatiable hunger for victory. We'll provide food, drinks, and the battlefield setup."
    },
    {
      question: "Who can join this legendary quest?",
      answer: "Any current student with a valid student ID! Whether you're a coding ninja, design wizard, or business strategist - if you're in college/university, you're eligible to fight digital chaos."
    },
    {
      question: "Can I participate solo or do I need a squad?",
      answer: "Both! You can be a lone wolf or assemble a team of up to 4 members. Teams often have better chances, but solo heroes have won battles before. Choose your path wisely."
    },
    {
      question: "What if I don't have a team yet?",
      answer: "Fear not! We have a team formation session during the event. You can also join our Discord server before the event to find fellow warriors. Great minds think alike!"
    },
    {
      question: "Do I need to be a coding god to participate?",
      answer: "Absolutely not! While coding skills help, we welcome all skill levels. Some challenges need design, business strategy, or just creative thinking. Every hero has their unique power."
    },
    {
      question: "What about food during this 36-hour marathon?",
      answer: "We've got your back! Meals, snacks, unlimited coffee, and energy drinks will be provided. We know you can't code on an empty stomach. Nutrition for the mind and body!"
    },
    {
      question: "Is there a participation fee?",
      answer: "It's completely FREE! This is our gift to the coding community. Just bring your passion, skills, and determination to change the world through technology."
    },
    {
      question: "What happens if I need to leave during the event?",
      answer: "Life happens! You can leave and return, but remember - continuous presence gives you the best chance of victory. If you must leave, inform the organizers so we don't send a search party."
    },
    {
      question: "How will projects be judged?",
      answer: "A council of industry experts will evaluate based on innovation, technical implementation, design, impact potential, and presentation. It's not just about code - it's about solving real problems!"
    },
    {
      question: "Can I work on an existing project?",
      answer: "Nope! All projects must be built from scratch during the 36 hours. Pre-existing code, frameworks, and libraries are allowed, but the core solution must be fresh. We're watching! 👀"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 bg-gradient-to-b from-background to-card">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-primary-neon">
            SURVIVAL GUIDE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know before entering the digital apocalypse. 
            Knowledge is power, and power is survival.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="doom-card rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/10 transition-colors"
              >
                <div className="flex items-center flex-1">
                  <HelpCircle className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                  <h3 className="font-orbitron font-bold text-foreground text-lg">
                    {faq.question}
                  </h3>
                </div>
                <div className="ml-4">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-primary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-primary" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pl-10 pr-10">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <div className="doom-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold text-primary-glow mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our support team is ready to help you prepare for the battle. 
              Don't hesitate to reach out - every hero needs guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-orbitron font-bold uppercase tracking-wider hover:bg-primary-glow transition-colors"
              >
                Contact Us
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-orbitron font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors">
                Join Discord
              </button>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="mt-12">
          <h3 className="text-2xl font-orbitron font-bold text-center text-primary-glow mb-8">
            Pro Tips from Veteran Warriors
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="doom-card p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="font-orbitron font-bold text-foreground mb-2">
                Plan Your Strategy
              </h4>
              <p className="text-sm text-muted-foreground">
                Spend the first 2 hours planning your approach. A good strategy beats rushed coding.
              </p>
            </div>

            <div className="doom-card p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="font-orbitron font-bold text-foreground mb-2">
                Communicate Early
              </h4>
              <p className="text-sm text-muted-foreground">
                Talk to mentors and judges early. Understanding the problem deeply is half the solution.
              </p>
            </div>

            <div className="doom-card p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="font-orbitron font-bold text-foreground mb-2">
                Focus on MVP
              </h4>
              <p className="text-sm text-muted-foreground">
                Build a working prototype first, then add features. A simple solution that works beats complex broken code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
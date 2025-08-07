import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!mounted) return null;

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-4 h-full animate-pulse">
          {Array.from({ length: 48 }, (_, i) => (
            <div 
              key={i} 
              className="border border-primary/30 h-16"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      {/* Audio Toggle */}
      <button
        onClick={() => setAudioEnabled(!audioEnabled)}
        className="absolute top-8 right-8 z-10 p-3 rounded-full bg-secondary/20 border border-primary/50 hover:bg-primary/20 transition-all"
      >
        {audioEnabled ? (
          <Volume2 className="w-6 h-6 text-primary" />
        ) : (
          <VolumeX className="w-6 h-6 text-muted-foreground" />
        )}
      </button>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 glitch relative" 
            data-text="DOOM FROM THE DC"
          >
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary-neon bg-clip-text text-transparent">
              DOOM FROM THE DC
            </span>
          </h1>
          
          <div className="text-xl md:text-3xl lg:text-4xl font-orbitron font-bold mb-4 tracking-wider">
            <span className="text-primary-neon">HACK YOUR WAY OUT</span>
          </div>
        </div>

        <div className="text-lg md:text-2xl lg:text-3xl mb-12 font-inter font-light tracking-wide">
          <div className="cyber-border p-6 inline-block">
            <span className="text-muted-foreground">36 hours.</span>
            <span className="text-primary mx-4">No sleep.</span>
            <span className="text-destructive mx-4">No mercy.</span>
            <span className="text-primary-neon">Just code.</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToRegistration}
            className="text-xl px-12 py-6 h-auto"
          >
            Register Now
          </Button>
          
          <Button 
            variant="neon" 
            size="lg"
            className="text-xl px-12 py-6 h-auto"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 float">
          <div className="w-2 h-2 bg-primary rounded-full pulse-glow" />
        </div>
        <div className="absolute bottom-40 right-32 float" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 bg-primary-neon rounded-full pulse-glow" />
        </div>
        <div className="absolute top-1/2 left-16 float" style={{ animationDelay: '4s' }}>
          <div className="w-1 h-1 bg-destructive rounded-full pulse-glow" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;
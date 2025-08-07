import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import heroBackground from '@/assets/hero-bg.jpg';
import GridDistortion from './ui/distortion';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const register = () => {
    window.location.href = 'https://unstop.com/#';
  };

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* GridDistortion as the background */}
      <GridDistortion
        imageSrc={heroBackground}
        grid={10}
        mouse={0.2}
        strength={0.10}
        relaxation={0.9}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10 pointer-events-none" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20 z-20 pointer-events-none">
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

      {/* Main Content */}
      <div className="relative z-30 text-center px-4 max-w-6xl mx-auto">
        {/* TITLE */}
        <div className="mb-8">
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 glitch relative"
            data-text="hack-Orion"
          >
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary-neon bg-clip-text text-transparent select-none">
              hack-Orion
            </span>
          </h1>

          <div className="text-xl md:text-3xl lg:text-4xl font-orbitron font-bold mb-4 tracking-wider">
            <span className="text-primary-neon">HACK YOUR WAY OUT</span>
          </div>
        </div>

        {/* SLOGAN */}
        <div className="text-lg md:text-2xl lg:text-3xl mb-12 font-inter font-light tracking-wide">
          <div className="cyber-border p-6 inline-block">
            <span className="text-muted-foreground">just 36 hours.</span>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            variant="hero"
            size="lg"
            onClick={register}
            className=" text-xl px-10 py-5 h-auto !rounded-none cursor-progress"
          >
            Register Now
          </Button>

          <Button
            variant="neon"
            size="lg"
            className="rounded-none text-xl px-12 py-6 h-auto text-teal-50 hover:text-teal-500 transition-colors duration-300"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-20 float z-20">
          <div className="w-2 h-2 bg-primary rounded-full pulse-glow" />
        </div>
        <div className="absolute bottom-40 right-32 float z-20" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 bg-primary-neon rounded-full pulse-glow" />
        </div>
        <div className="absolute top-1/2 left-16 float z-20" style={{ animationDelay: '4s' }}>
          <div className="w-1 h-1 bg-destructive rounded-full pulse-glow" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;

import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cloud, Shield } from "lucide-react";
import heroImage from "@/assets/hero-tech-business.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern tech business environment" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-hero/95"></div>
      </div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,hsl(217_91%_50%)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_30%,hsl(217_91%_40%)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_80%,hsl(217_91%_60%)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 text-primary-glow/40 animate-float drop-shadow-glow">
        <Code size={48} />
      </div>
      <div className="absolute top-40 left-20 text-primary-light/40 animate-float drop-shadow-glow" style={{ animationDelay: '1s' }}>
        <Cloud size={40} />
      </div>
      <div className="absolute bottom-32 right-32 text-innovation/40 animate-float drop-shadow-glow" style={{ animationDelay: '2s' }}>
        <Shield size={44} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Smart Tech Solutions for{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Your Business Growth
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Innovative IT consulting, software development, and digital services 
            that help small businesses thrive in the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" variant="hero" className="text-lg px-8 py-4 shadow-glow">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
              View Our Work
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-white drop-shadow-glow">50+</div>
              <div className="text-white/70">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white drop-shadow-glow">98%</div>
              <div className="text-white/70">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white drop-shadow-glow">24/7</div>
              <div className="text-white/70">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cloud, Shield, MessageCircle } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "15551234567"; // Replace with actual WhatsApp number
    const message = "Hi! I'm interested in your tech solutions. Can we discuss my project?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-innovation/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-success/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Enhanced Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 text-primary-glow/60 animate-float drop-shadow-glow">
          <Code size={56} className="animate-pulse" />
        </div>
        <div className="absolute top-40 left-20 text-primary-light/60 animate-float drop-shadow-glow" style={{ animationDelay: '1s' }}>
          <Cloud size={48} className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        <div className="absolute bottom-32 right-32 text-innovation/60 animate-float drop-shadow-glow" style={{ animationDelay: '2s' }}>
          <Shield size={52} className="animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute top-1/2 left-10 text-success/50 animate-float drop-shadow-glow" style={{ animationDelay: '3s' }}>
          <div className="w-6 h-6 bg-success/60 rounded-full animate-ping"></div>
        </div>
        <div className="absolute bottom-20 left-1/3 text-primary/50 animate-float drop-shadow-glow" style={{ animationDelay: '1.5s' }}>
          <div className="w-4 h-4 bg-primary/60 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced Headline with Staggered Animation */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="block animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                Smart Tech Solutions
              </span>
              <span className="block animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                for{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent animate-pulse">
                  Your Business Growth
                </span>
              </span>
            </h1>
          </div>
          
          {/* Enhanced Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 animate-fade-in opacity-0 leading-relaxed max-w-4xl mx-auto" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            Innovative IT consulting, software development, and digital services 
            that help small businesses <span className="text-primary-glow font-semibold">thrive in the digital age</span>.
          </p>
          
          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in opacity-0 mb-16" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            <Button 
              size="lg" 
              variant="hero" 
              className="text-lg px-10 py-6 shadow-glow hover:shadow-[0_0_60px_hsl(217_91%_50%_/_0.6)] transform hover:scale-110 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get Started Today
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-6 border-white/40 text-white hover:bg-white/20 hover:border-white/60 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('portfolio')}
            >
              View Our Work
            </Button>
          </div>
          
          {/* Enhanced Stats with Animations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <div className="text-center group hover:transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-glow mb-2 group-hover:text-primary-glow transition-colors">
                50+
              </div>
              <div className="text-white/80 text-lg">Projects Delivered</div>
              <div className="w-16 h-1 bg-gradient-accent mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="text-center group hover:transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-glow mb-2 group-hover:text-success transition-colors">
                98%
              </div>
              <div className="text-white/80 text-lg">Client Satisfaction</div>
              <div className="w-16 h-1 bg-gradient-accent mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="text-center group hover:transform hover:scale-110 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-white drop-shadow-glow mb-2 group-hover:text-innovation transition-colors">
                24/7
              </div>
              <div className="text-white/80 text-lg">Support Available</div>
              <div className="w-16 h-1 bg-gradient-accent mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-8 right-8 z-50 animate-fade-in opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
        <Button
          onClick={openWhatsApp}
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-glow hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transform hover:scale-110 transition-all duration-300 animate-bounce"
          style={{ animationDuration: '2s' }}
        >
          <MessageCircle size={28} />
        </Button>
        <div className="absolute -top-12 right-0 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat on WhatsApp
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in opacity-0" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
        <div className="flex flex-col items-center text-white/60 cursor-pointer hover:text-white/80 transition-colors" onClick={() => scrollToSection('about')}>
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
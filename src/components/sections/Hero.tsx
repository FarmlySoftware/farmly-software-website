import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-webdev.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern web development workspace with multiple screens showing beautiful websites"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90 animate-gradient"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20">
            <span className="text-sm font-medium text-primary-foreground">🚀 Innovation Meets Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Building Tomorrow's Solutions,
            <span className="block mt-2 bg-gradient-to-r from-primary-foreground to-primary-foreground/70 bg-clip-text text-transparent">
              Today
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Future-ready AI-powered solutions, intelligent automation, and cutting-edge development 
            that transforms businesses across industries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToContact}
              className="w-full sm:w-auto min-w-[200px]"
            >
              Get Started Today
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto min-w-[200px] border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              View Services
            </Button>
          </div>

          {/* Key Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group flex flex-col items-center justify-center space-y-2 p-4 rounded-lg bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-105 future-glow">
              <div className="w-3 h-3 bg-primary-foreground rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary-foreground">AI-Powered Innovation</span>
            </div>
            <div className="group flex flex-col items-center justify-center space-y-2 p-4 rounded-lg bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-105 future-glow" style={{ animationDelay: '0.1s' }}>
              <div className="w-3 h-3 bg-primary-foreground rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary-foreground">Future-Ready Architecture</span>
            </div>
            <div className="group flex flex-col items-center justify-center space-y-2 p-4 rounded-lg bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-105 future-glow" style={{ animationDelay: '0.2s' }}>
              <div className="w-3 h-3 bg-primary-foreground rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary-foreground">Intelligent Automation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
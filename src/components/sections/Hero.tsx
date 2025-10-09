import { Button } from "@/components/ui/button";
import FuturisticBackground from "@/components/background/FuturisticBackground";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero section">
      {/* Futuristic Interactive Background */}
      <FuturisticBackground />
      
      {/* Ethereal Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Dark base with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Neural network grid pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>

        {/* Glowing orbs - ethereal effect */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-primary/8 rounded-full blur-[90px] animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/6 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="inline-block mb-6 px-5 py-2 bg-card/40 backdrop-blur-md rounded-full border border-primary/30 shadow-glow">
            <span className="text-sm font-medium text-primary neon-text-subtle">🚀 Next-Gen Technology Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-foreground neon-text">
              Empowering Businesses
            </span>
            <span className="block mt-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent neon-text">
              with Smart Innovation
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge AI, automation, and software solutions that transform operations 
            with scalable, intelligent technology for the digital future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToContact}
              className="w-full sm:w-auto min-w-[200px]"
              aria-label="Get in touch with us"
            >
              Get in Touch
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
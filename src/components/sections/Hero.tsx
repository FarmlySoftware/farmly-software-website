import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Shield } from "lucide-react";
import { useMotion } from "@/contexts/MotionContext";

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  contactSection?.scrollIntoView({ behavior: 'smooth' });
};

const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects');
  projectsSection?.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {
  const { prefersReducedMotion } = useMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzAtOS45NCAwLTE4IDE4LTE4czE4IDguMDYgMTggMTgtOC4wNiAxOC0xOCAxOEgzNnpNMCA0MmMwIDkuOTQgMCAxOCAxOCAxOHMxOC04LjA2IDE4LTE4SDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        {!prefersReducedMotion && (
          <>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 ${!prefersReducedMotion ? 'animate-slide-up' : ''}`}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">"The Only Constant in Life Is Change." - Heraclitus</span>
          </div>

          {/* Main Headline */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${!prefersReducedMotion ? 'animate-slide-up tech-glow-subtle' : ''}`}
              style={{ animationDelay: '0.1s' }}>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Embrace change, and success will be yours.
            </span>
          </h1>

          {/* Subtext */}
          <p className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto ${!prefersReducedMotion ? 'animate-slide-up' : ''}`}
             style={{ animationDelay: '0.2s' }}>
            We help enterprises evolve through AI, IoT, Cloud, and Automation — from concept to scale
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 ${!prefersReducedMotion ? 'animate-slide-up' : ''}`}
               style={{ animationDelay: '0.3s' }}>
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToContact}
              className="group"
            >
              Get Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={scrollToProjects}
              className="border-primary/20 hover:border-primary/40 hover:bg-primary/5"
            >
              View Case Studies
            </Button>
          </div>

          {/* Key Metrics */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto ${!prefersReducedMotion ? 'animate-slide-up' : ''}`}
               style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col items-center p-6 rounded-xl bg-card/50 border border-primary/10 backdrop-blur-sm hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Collectively Years of Industrial Experience</div>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl bg-card/50 border border-primary/10 backdrop-blur-sm hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">90%</div>
              <div className="text-sm text-muted-foreground">Process Automation Achieved</div>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl bg-card/50 border border-primary/10 backdrop-blur-sm hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-success" />
              </div>
              <div className="text-3xl font-bold text-success mb-2">Global</div>
              <div className="text-sm text-muted-foreground">Experience in Consulting & Product Companies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {!prefersReducedMotion && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
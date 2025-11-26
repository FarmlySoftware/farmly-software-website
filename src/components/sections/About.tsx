import aboutTeamImage from "@/assets/about-team.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto container-padding relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-sm font-medium text-primary">About Farmly Softwares</span>
          </div>
          <h2 className="heading-section text-foreground mb-4">
            Meet the Team
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Farmly Software leadership team — experts in delivering niche digital solutions
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          <div className="text-center p-6 bg-background/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary">AV</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Aaditya Velava</h3>
            <p className="text-sm text-primary font-medium mb-3">Solution Architect</p>
            <p className="text-sm text-muted-foreground">
              Solution builder focused on understanding customer challenges and architecting software that solves real-world needs.
            </p>
          </div>

          <div className="text-center p-6 bg-background/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <span className="text-3xl font-bold text-accent">KD</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Karthik Duraipandi</h3>
            <p className="text-sm text-accent font-medium mb-3">Business Development</p>
            <p className="text-sm text-muted-foreground">
              Drives customer acquisition, onboarding, and relationship-building. Guides clients from first contact to lasting success.
            </p>
          </div>

          <div className="text-center p-6 bg-background/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
              <span className="text-3xl font-bold text-success">DS</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Dinesh Saravanan</h3>
            <p className="text-sm text-success font-medium mb-3">Operations & Delivery</p>
            <p className="text-sm text-muted-foreground">
              Heads operations and delivery, ensuring every solution is built, deployed, and supported to the highest standards.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Together, we help SMBs turn industry gaps into digital strengths. We specialize in custom healthcare and legal software — building tools that standard apps can't deliver.
          </p>
        </div>

        {/* See More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.location.href = '/about'}
            className="group"
          >
            Learn More About Us
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
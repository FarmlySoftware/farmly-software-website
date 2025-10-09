import { Card, CardContent } from "@/components/ui/card";
import { Check, Target, Award, Users, Zap, Globe, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Globe,
      title: "Cross-Industry Expertise",
      description: "Proven experience across Automotive, Energy, Telecom, Finance, Retail, and more",
      gradient: "from-primary to-primary-dark"
    },
    {
      icon: Target,
      title: "Proven Transformation Results",
      description: "30–90% automation ROI and efficiency gains on enterprise transformations",
      gradient: "from-primary-dark to-primary-light"
    },
    {
      icon: Users,
      title: "End-to-End Delivery",
      description: "From vision to implementation—complete product ownership and execution",
      gradient: "from-primary-light to-primary"
    },
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "Enterprise product ownership with Fortune 500 clients worldwide",
      gradient: "from-primary to-accent"
    },
    {
      icon: Zap,
      title: "Agile, AI-First Culture",
      description: "Customer-centric approach with cutting-edge AI and automation expertise",
      gradient: "from-primary-dark to-accent"
    }
  ];

  const benefits = [
    "30–90% efficiency gains on transformations",
    "AI-powered automation and intelligence",
    "Future-ready cloud architecture",
    "DevOps & DevSecOps best practices",
    "IoT & Digital Twin implementation",
    "End-to-end software execution",
    "Multi-industry domain expertise",
    "Agile delivery with rapid ROI"
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-sm font-medium text-primary">Why Partner With Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why We're the Right Partner
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mb-6 animate-gradient"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Combining enterprise credibility with startup agility to deliver transformative digital solutions that drive measurable business impact.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card 
                key={reason.title}
                className="group border-border hover:border-primary/40 transition-all duration-300 hover:shadow-custom-lg hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-6 relative">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits List */}
        <div className="max-w-5xl mx-auto bg-gradient-card rounded-2xl border border-primary/20 p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            What You Get When Working With Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start space-x-3 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
                <span className="text-base text-muted-foreground group-hover:text-foreground transition-colors">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card rounded-2xl border border-primary/20 p-8 md:p-12">
            <div className="text-6xl mb-6">💬</div>
            <blockquote className="text-xl text-foreground italic mb-6">
              "We help enterprises evolve through AI, IoT, Cloud, and Automation — from concept to scale, with proven results and measurable ROI."
            </blockquote>
            <div className="text-primary font-semibold">— Farmly Softwares Team</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

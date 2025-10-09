import aboutTeamImage from "@/assets/about-team.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-sm font-medium text-primary">About Farmly Softwares</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Engineering the Future of Intelligent Automation
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mb-6"></div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <div className="p-8 bg-gradient-card rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-custom-lg">
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To enable connected, intelligent, and autonomous enterprise ecosystems that drive innovation and create lasting value across industries worldwide.
            </p>
          </div>

          <div className="p-8 bg-gradient-card rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-custom-lg">
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Empowering industries through AI, Automation, and Cloud innovation—transforming complex challenges into competitive advantages from concept to scale.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Farmly Softwares pioneers next-generation digital transformation through cutting-edge AI, IoT, and intelligent automation. We architect tomorrow's solutions with innovation at our core, empowering industries across <strong className="text-foreground">Automotive, Energy, Finance, Retail, Telecom, and EV Charging</strong> to leap into the digital future.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              From AI-driven intelligence to cloud infrastructure and digital twins, we deliver <strong className="text-foreground">30–90% efficiency gains</strong> on transformations. Our solutions blend cutting-edge innovation with practical implementation, serving Fortune 500 clients with proven global experience.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary neon-text-subtle">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary neon-text-subtle">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary neon-text-subtle">90%</div>
                <div className="text-sm text-muted-foreground">Automation ROI</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-custom-lg future-glow group">
              <img
                src={aboutTeamImage}
                alt="Professional consulting team collaborating on digital transformation projects"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            
            {/* Decorative animated elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full opacity-30 animate-float"></div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">Our Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "💡", title: "Innovation", desc: "Pioneering next-gen solutions" },
              { icon: "🤝", title: "Collaboration", desc: "Partnership-driven delivery" },
              { icon: "✨", title: "Integrity", desc: "Trust and transparency" },
              { icon: "📈", title: "Impact", desc: "Measurable business results" }
            ].map((value, idx) => (
              <div key={value.title} className="text-center p-6 bg-background/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h4 className="font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
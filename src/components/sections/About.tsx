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

        {/* Main Content - Optimized for iPad/Laptop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16 max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Farmly Softwares pioneers next-generation digital transformation through cutting-edge AI, IoT, and intelligent automation. We architect tomorrow's solutions with innovation at our core, empowering industries across <strong className="text-foreground">Automotive, Energy, Finance, Retail, Telecom, and EV Charging</strong> to leap into the digital future.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              From AI-driven intelligence to cloud infrastructure and digital twins, we deliver <strong className="text-foreground">30–90% efficiency gains</strong> on transformations. Our solutions blend cutting-edge innovation with practical implementation, serving Fortune 500 clients with proven global experience.
            </p>

            <div className="p-6 bg-primary/5 rounded-xl border border-primary/20 space-y-3">
              <h3 className="text-xl font-bold text-foreground">Why Partner With Us</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Cross-industry expertise delivering 30–90% automation ROI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>End-to-end delivery from vision to implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>AI-first culture with Fortune 500 credibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Future-ready cloud architecture & DevOps excellence</span>
                </li>
              </ul>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary neon-text-subtle">25+</div>
                <div className="text-sm text-muted-foreground">Years Collectively</div>
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

          {/* Core Values - Integrated */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Core Values</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "💡", title: "Innovation", desc: "Pioneering next-gen solutions" },
                { icon: "🤝", title: "Collaboration", desc: "Partnership-driven delivery" },
                { icon: "✨", title: "Integrity", desc: "Trust and transparency" },
                { icon: "📈", title: "Impact", desc: "Measurable business results" }
              ].map((value, idx) => (
                <div key={value.title} className="p-4 bg-background/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="text-3xl mb-2">{value.icon}</div>
                  <h4 className="font-bold text-foreground text-sm mb-1">{value.title}</h4>
                  <p className="text-xs text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { Card, CardContent } from "@/components/ui/card";
import { Search, Target, TrendingUp, Globe, BarChart, Zap } from "lucide-react";

const SEOOptimization = () => {
  const seoFeatures = [
    {
      icon: Search,
      title: "SEO-First Development",
      description: "Every project built with search engine optimization at its core",
      gradient: "from-primary to-primary-dark"
    },
    {
      icon: Target,
      title: "Technical SEO Excellence",
      description: "Clean URLs, proper schema markup, and optimized site structure",
      gradient: "from-primary-dark to-primary-light"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Lightning-fast load times for better rankings and user experience",
      gradient: "from-primary-light to-primary"
    },
    {
      icon: Globe,
      title: "Multi-Device Responsive",
      description: "Mobile-first approach ensuring perfect experience on all devices",
      gradient: "from-primary to-accent"
    },
    {
      icon: BarChart,
      title: "Analytics Integration",
      description: "GA4, LinkedIn Pixel, and custom tracking for data-driven insights",
      gradient: "from-accent to-primary-dark"
    },
    {
      icon: Zap,
      title: "Continuous Improvement",
      description: "Ongoing optimization based on performance metrics and user data",
      gradient: "from-primary-dark to-accent"
    }
  ];

  return (
    <section id="seo" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-sm font-medium text-primary">Performance & Discoverability</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built for Speed & Search Engines
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mb-6 animate-gradient"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every solution we build is optimized for performance, accessibility, and search engine rankings to maximize your digital presence and ROI.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {seoFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="group border-border hover:border-primary/40 transition-all duration-300 hover:shadow-custom-lg hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-6 relative">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Performance Metrics */}
        <div className="mt-16 max-w-5xl mx-auto bg-gradient-card rounded-2xl border border-primary/20 p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Our Performance Standards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2 neon-text-subtle">90+</div>
              <div className="text-sm text-muted-foreground">Lighthouse Score</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2 neon-text-subtle">&lt;2s</div>
              <div className="text-sm text-muted-foreground">Page Load Time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2 neon-text-subtle">100%</div>
              <div className="text-sm text-muted-foreground">Mobile Responsive</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOOptimization;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, ShoppingCart, Cloud, Code, Settings, Cpu } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "ai-automation",
      name: "AI & Automation",
      icon: Zap,
      description: "Transform your business with intelligent AI solutions and automation workflows.",
      features: [
        "AI-powered product recommendations",
        "Intelligent process automation (RPA)",
        "AI projections & forecasting",
        "Agentic commerce & workflows",
        "AI validation & optimization",
        "Finance & sales automation"
      ],
      popular: true,
      gradient: "from-primary via-primary-dark to-primary-light"
    },
    {
      id: "iot-automation",
      name: "IoT & Automation",
      icon: Cpu,
      description: "Connect and automate your operations with cutting-edge IoT and industry solutions.",
      features: [
        "EV Charger Management with Roaming",
        "IoT project development",
        "Digital Twin implementation",
        "Industry process automation",
        "Real-time monitoring systems",
        "Smart device integration"
      ],
      popular: false,
      gradient: "from-primary-dark via-primary to-primary-light"
    },
    {
      id: "ecommerce",
      name: "E-Commerce Solutions",
      icon: ShoppingCart,
      description: "End-to-end e-commerce consulting, implementation, and optimization.",
      features: [
        "Shopify, Magento, Saleor, Medusa",
        "Complex product configurators",
        "Checkout automation",
        "Rules engine implementation",
        "Payment gateway integration",
        "0-to-1 store development"
      ],
      popular: false,
      gradient: "from-primary-light via-primary to-primary-dark"
    },
    {
      id: "cloud-infrastructure",
      name: "Cloud & Infrastructure",
      icon: Cloud,
      description: "Scalable cloud solutions and infrastructure management for modern businesses.",
      features: [
        "Cloud migrations (Public & Private)",
        "Infrastructure management",
        "DevOps, DevSecOps, CI/CD",
        "Container orchestration",
        "Cloud cost optimization",
        "Disaster recovery planning"
      ],
      popular: false,
      gradient: "from-primary via-primary-light to-primary-dark"
    },
    {
      id: "custom-development",
      name: "Custom Development",
      icon: Code,
      description: "Bespoke software solutions tailored to your unique business requirements.",
      features: [
        "Web & mobile app development",
        "Internal & customer-facing tools",
        "Software architecture design",
        "Business process automation",
        "API development & integration",
        "Data as a Product solutions"
      ],
      popular: false,
      gradient: "from-primary-dark via-primary-light to-primary"
    },
    {
      id: "maintenance-operations",
      name: "Maintenance & Operations",
      icon: Settings,
      description: "Ongoing support, maintenance, and operational excellence for your systems.",
      features: [
        "24/7 system monitoring",
        "Performance optimization",
        "Security updates & patches",
        "Technical support",
        "System upgrades",
        "Documentation & training"
      ],
      popular: false,
      gradient: "from-primary-light via-primary-dark to-primary"
    }
  ];

  const handleLearnMore = (serviceId: string) => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const serviceSelect = document.getElementById('service-select') as HTMLSelectElement;
        if (serviceSelect) {
          serviceSelect.value = serviceId;
        }
      }, 500);
    }
  };

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
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
            <span className="text-sm font-medium text-primary">Consulting & Implementation</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mb-6 animate-gradient"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive solutions across AI, automation, cloud, e-commerce, and custom development.
            From consultation to implementation and ongoing operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id} 
                className={`group relative transition-all duration-500 hover:shadow-custom-lg hover:-translate-y-2 overflow-hidden ${
                  service.popular 
                    ? 'border-primary shadow-custom-md ring-2 ring-primary/30' 
                    : 'border-border hover:border-primary/40'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {service.popular && (
                  <Badge 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-accent text-primary-foreground px-4 py-1 shadow-glow animate-pulse-glow z-10"
                  >
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${service.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3 relative">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3 group/item">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">{feature}</span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter className="pt-6 relative">
                  <Button
                    variant={service.popular ? "default" : "outline"}
                    className="w-full group/btn"
                    onClick={() => handleLearnMore(service.id)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Industry Expertise Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Industry Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {['Automotive', 'E-Commerce', 'Media & Entertainment', 'Telecommunications', 'Logistics', 'EV Charging'].map((industry, idx) => (
              <div 
                key={industry}
                className="px-6 py-3 bg-gradient-card rounded-full border border-primary/20 hover:border-primary/50 hover:shadow-md transition-all duration-300 cursor-pointer group"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

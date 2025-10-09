import { ArrowRight, Brain, Cog, ShoppingCart, Cloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServiceOverview = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Agentic Automation",
      description: "Custom AI solutions, industry-specific SaaS, and robotic process automation (RPA). From AI projections and forecasts to agentic workflows and intelligent recommendations—proven to deliver 30-90% efficiency gains across enterprises.",
      link: "#services"
    },
    {
      icon: Cog,
      title: "Business Process Engineering",
      description: "Optimize critical processes across automotive, finance, sales, logistics, and customer support. Complex product configurators with rules engines, automated procurement, and checkout optimization for measurable ROI.",
      link: "#services"
    },
    {
      icon: ShoppingCart,
      title: "Enterprise Software & E-Commerce",
      description: "Complete 0-to-1 software development for internal and customer-facing tools. Expert implementations on Shopify, Magento, Saleor, Adobe Commerce. EDI integration and data-as-a-product platforms for digital-first businesses.",
      link: "#services"
    },
    {
      icon: Cloud,
      title: "Cloud, IoT & Digital Twin",
      description: "Cloud migrations (AWS, Azure, GCP), infrastructure management, and IoT implementation. Specializing in digital twins, EV charger management (roaming, billing, CRM), and Web3 integration for connected ecosystems.",
      link: "#services"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-sm font-medium text-primary">Core Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
            Digital Transformation Services
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade solutions across AI, Automation, IoT, Cloud, DevOps, and Digital Twin technologies. 
            From consultation to implementation and operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <a href={service.link}>
                    <Button 
                      variant="ghost" 
                      className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary-light"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;

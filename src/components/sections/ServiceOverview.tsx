import { ArrowRight, Brain, Cog, ShoppingCart, Cloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServiceOverview = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Harness custom AI solutions, industry-specific SaaS, and robotic process automation (RPA) to streamline operations. From AI projections and forecasts to agentic workflows and intelligent product recommendations, we help you work smarter.",
      link: "#services"
    },
    {
      icon: Cog,
      title: "Business Process Optimization",
      description: "Automate critical processes across automotive, finance, sales, logistics, and customer support. We build complex product configurators with rules engines, streamline procurement and purchasing, and optimize checkout experiences for maximum efficiency.",
      link: "#services"
    },
    {
      icon: ShoppingCart,
      title: "Software & E-Commerce Development",
      description: "Complete end-to-end (0 to 1) software development for internal and customer-facing tools. Expert e-commerce solutions on Shopify, Magento, Saleor, Medusa, and Adobe Commerce, plus electronic data interchange and data-as-a-product services.",
      link: "#services"
    },
    {
      icon: Cloud,
      title: "Cloud & IoT Solutions",
      description: "Seamless cloud migrations (public/private), infrastructure management, and IoT project implementation. Specializing in digital twins, EV charger management (roaming, billing, CRM), and cutting-edge Web3 integration for future-ready businesses.",
      link: "#services"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions tailored for small and medium businesses ready to scale
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

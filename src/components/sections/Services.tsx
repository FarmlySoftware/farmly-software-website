import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, ShoppingCart, Blocks, Cloud, Zap, Sparkles } from "lucide-react";
import { useMotion } from "@/contexts/MotionContext";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent automation and predictive analytics to transform your business operations",
    features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI-Powered Automation"],
    gradient: "from-primary to-accent",
    iconBg: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: Cpu,
    title: "IoT & Smart Solutions",
    description: "Connected devices and real-time monitoring for intelligent decision-making",
    features: ["Smart Device Integration", "Real-time Analytics", "Edge Computing", "Industrial IoT"],
    gradient: "from-accent to-success",
    iconBg: "bg-accent/10",
    iconColor: "text-accent"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Scalable online stores with seamless payment integration and inventory management",
    features: ["Custom Storefronts", "Payment Gateway Integration", "Inventory Management", "Multi-channel Sales"],
    gradient: "from-success to-primary",
    iconBg: "bg-success/10",
    iconColor: "text-success"
  },
  {
    icon: Blocks,
    title: "Web3 & Blockchain",
    description: "Decentralized applications and smart contracts for the future of digital transactions",
    features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Blockchain Integration"],
    gradient: "from-primary to-purple-500",
    iconBg: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions with DevOps excellence and containerization",
    features: ["Cloud Migration", "Kubernetes & Docker", "CI/CD Pipelines", "Infrastructure as Code"],
    gradient: "from-purple-500 to-accent",
    iconBg: "bg-accent/10",
    iconColor: "text-accent"
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "End-to-end modernization of legacy systems and business processes",
    features: ["Process Automation", "Legacy Modernization", "System Integration", "Change Management"],
    gradient: "from-accent to-primary",
    iconBg: "bg-success/10",
    iconColor: "text-success"
  }
];

const Services = () => {
  const { prefersReducedMotion } = useMotion();

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Comprehensive IT Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Transforming businesses with cutting-edge technology solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => {
            const ServiceIcon = service.icon;
            return (
              <Card 
                key={idx} 
                className={`group relative overflow-hidden bg-background border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${!prefersReducedMotion ? 'hover:-translate-y-2' : ''}`}
              >
                {/* Icon Header */}
                <div className="p-6 pb-0">
                  <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <ServiceIcon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="px-6 pb-6 space-y-2">
                  {service.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${service.iconColor.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Gradient Accent at Bottom */}
                <div className={`h-1 bg-gradient-to-r ${service.gradient}`}></div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-lg transition-all duration-300 pointer-events-none"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
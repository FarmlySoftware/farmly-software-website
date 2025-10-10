import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Sparkles, Brain, ShoppingCart, Blocks, Cloud, Cpu, Zap } from "lucide-react";
import { useMotion } from "@/contexts/MotionContext";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent automation and predictive analytics to transform your business operations",
    features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI-Powered Automation"],
    gradient: "from-primary to-accent"
  },
  {
    icon: Cpu,
    title: "IoT & Smart Solutions",
    description: "Connected devices and real-time monitoring for intelligent decision-making",
    features: ["Smart Device Integration", "Real-time Analytics", "Edge Computing", "Industrial IoT"],
    gradient: "from-accent to-success"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Scalable online stores with seamless payment integration and inventory management",
    features: ["Custom Storefronts", "Payment Gateway Integration", "Inventory Management", "Multi-channel Sales"],
    gradient: "from-success to-primary"
  },
  {
    icon: Blocks,
    title: "Web3 & Blockchain",
    description: "Decentralized applications and smart contracts for the future of digital transactions",
    features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Blockchain Integration"],
    gradient: "from-primary to-purple-500"
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions with DevOps excellence and containerization",
    features: ["Cloud Migration", "Kubernetes & Docker", "CI/CD Pipelines", "Infrastructure as Code"],
    gradient: "from-purple-500 to-accent"
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "End-to-end modernization of legacy systems and business processes",
    features: ["Process Automation", "Legacy Modernization", "System Integration", "Change Management"],
    gradient: "from-accent to-primary"
  }
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { prefersReducedMotion } = useMotion();

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const currentService = services[currentIndex];
  const ServiceIcon = currentService.icon;

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
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto"></div>
        </div>

        {/* Service Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card className={`p-8 md:p-12 bg-gradient-to-br ${currentService.gradient} relative overflow-hidden ${!prefersReducedMotion ? 'transition-all duration-500' : ''}`}>
            {/* Card content */}
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <ServiceIcon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {currentService.title}
                  </h3>
                  <p className="text-white/90 text-lg">
                    {currentService.description}
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {currentService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevService}
                    className="bg-white/20 hover:bg-white/30 border-white/30 text-white"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextService}
                    className="bg-white/20 hover:bg-white/30 border-white/30 text-white"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>

                {/* Indicators */}
                <div className="flex gap-2">
                  {services.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                      }`}
                      aria-label={`Go to service ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;

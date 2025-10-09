import { Card } from "@/components/ui/card";
import { Brain, Cloud, Zap, Server, Workflow, ShoppingCart, Settings, BarChart, Database } from "lucide-react";
import { useMotion } from "@/contexts/MotionContext";

const services = [
  {
    icon: Brain,
    title: "AI & Agentic Automation",
    description: "Intelligent systems that learn, adapt, and automate complex business processes with autonomous decision-making capabilities.",
    link: "#services",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Cloud,
    title: "IoT & Digital Twin",
    description: "Real-time digital replicas of physical systems enabling predictive maintenance and operational optimization.",
    link: "#services",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "EV Charging & Energy Platforms",
    description: "Complete SaaS solutions for electric vehicle charging infrastructure and energy management systems.",
    link: "#services",
    gradient: "from-blue-600 to-indigo-500"
  },
  {
    icon: Server,
    title: "DevOps, DevSecOps & Cloud",
    description: "Enterprise-grade cloud infrastructure with security-first DevOps practices for rapid, secure deployment.",
    link: "#services",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "End-to-end workflow automation reducing manual effort by 30-90% across finance, operations, and logistics.",
    link: "#services",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Checkout Systems",
    description: "Scalable multi-tenant commerce platforms with advanced checkout orchestration and payment integration.",
    link: "#services",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Settings,
    title: "Rules Engine & Configurators",
    description: "Dynamic business rules engines and product configurators enabling real-time customization at scale.",
    link: "#services",
    gradient: "from-rose-500 to-orange-500"
  },
  {
    icon: BarChart,
    title: "AI Forecasting & Analytics",
    description: "Predictive analytics and ML-powered forecasting systems for demand planning and business intelligence.",
    link: "#services",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    icon: Database,
    title: "Web3 & Data-as-a-Product",
    description: "Blockchain solutions and data monetization platforms transforming information into revenue streams.",
    link: "#services",
    gradient: "from-amber-500 to-yellow-500"
  }
];

const ServiceOverview = () => {
  const { prefersReducedMotion } = useMotion();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="service-overview" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Comprehensive Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Digital Transformation
            <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent">
              Services Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI-powered automation to cloud infrastructure, we deliver enterprise-grade solutions
            that drive measurable business outcomes
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`group relative p-6 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 cursor-pointer overflow-hidden ${!prefersReducedMotion ? 'hover:scale-105 hover:shadow-custom-lg' : ''}`}
                onClick={() => scrollToSection(service.link)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-4 ${!prefersReducedMotion ? 'group-hover:scale-110 transition-transform duration-300' : ''}`}>
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                    <span>Learn more</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;

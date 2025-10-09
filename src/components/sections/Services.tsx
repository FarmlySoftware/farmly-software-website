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
      description: "Empower your small or medium business with practical AI solutions that drive real results. We deliver custom AI implementations, industry-specific SaaS platforms, and intelligent automation that grows with you. From AI-powered projections and forecasts to product recommendations and validations, our solutions are designed for simplicity and scalability. Our robotic process automation (RPA) and agentic workflows eliminate repetitive tasks, freeing your team to focus on strategic growth. Whether you're automating customer interactions or building intelligent commerce systems, we make advanced AI accessible and affordable for businesses ready to compete in the digital age.",
      subServices: [
        "Custom AI Solutions & Industry SaaS",
        "AI Projections, Forecasts & Validations",
        "Product Suggestions & Recommendations",
        "Robotic Process Automation (RPA)",
        "Agentic Workflows & Automation",
        "Agentic Commerce Systems"
      ],
      popular: true,
      gradient: "from-primary via-primary-dark to-primary-light"
    },
    {
      id: "business-optimization",
      name: "Business Process Optimization",
      icon: Settings,
      description: "Transform how your business operates with targeted automation solutions that streamline critical processes. We specialize in optimizing workflows across automotive, finance, sales, logistics, customer support, procurement, and purchasing operations. Our expertise extends to complex product configurators powered by sophisticated rules engines, ensuring your customers get exactly what they need. From checkout optimization that reduces cart abandonment to automated procurement systems that cut costs, we build practical solutions that deliver measurable ROI. Each implementation is designed to scale with your business, providing the foundation for sustainable growth without overwhelming complexity or cost.",
      subServices: [
        "Automotive Process Automation",
        "Finance & Sales Automation",
        "Logistics & Supply Chain Optimization",
        "Customer Support Automation",
        "Procurement & Purchasing Systems",
        "Complex Product Configurators",
        "Rules Engine Implementation",
        "Checkout Optimization"
      ],
      popular: false,
      gradient: "from-primary-dark via-primary to-primary-light"
    },
    {
      id: "software-ecommerce",
      name: "Software & E-Commerce Development",
      icon: ShoppingCart,
      description: "Build your digital presence from the ground up with comprehensive end-to-end (0 to 1) software development tailored for small and medium businesses. We create powerful internal tools that streamline operations and customer-facing applications that drive engagement and sales. Our e-commerce expertise spans Shopify, Magento, Saleor, Medusa, and Adobe Commerce, ensuring you get the right platform for your unique needs. We implement electronic data interchange (EDI) for seamless B2B integration and create data-as-a-product solutions that unlock new revenue streams. Every solution emphasizes clean software architecture, maintainability, and scalability—giving you technology that grows alongside your ambitions.",
      subServices: [
        "End-to-End (0 to 1) Software Development",
        "Internal & Customer-Facing Tools",
        "E-Commerce Platforms (Shopify, Magento, Saleor)",
        "Adobe Commerce & Medusa Implementation",
        "Electronic Data Interchange (EDI)",
        "Data-as-a-Product Solutions",
        "Software Architecture Design",
        "API Development & Integration"
      ],
      popular: false,
      gradient: "from-primary-light via-primary to-primary-dark"
    },
    {
      id: "cloud-iot",
      name: "Cloud & IoT Solutions",
      icon: Cloud,
      description: "Future-proof your business with cloud infrastructure and IoT solutions designed for growth. We handle seamless cloud migrations to public or private environments, ensuring minimal disruption and maximum performance. Our infrastructure management services keep your systems running smoothly while optimizing costs. Specializing in IoT projects, we bring physical and digital worlds together through digital twins, smart device integration, and real-time monitoring. Our EV charger management solutions cover roaming, billing, and CRM integration—positioning you at the forefront of the electric vehicle revolution. We also integrate cutting-edge Web3 technologies, helping forward-thinking businesses embrace decentralized solutions and blockchain opportunities with confidence and clarity.",
      subServices: [
        "Cloud Migrations (Public & Private)",
        "Infrastructure Management & Optimization",
        "IoT Project Implementation",
        "Digital Twins & Smart Devices",
        "EV Charger Management Systems",
        "Roaming, Billing & CRM Integration",
        "Web3 Integration & Blockchain",
        "DevOps & DevSecOps Implementation"
      ],
      popular: false,
      gradient: "from-primary via-primary-light to-primary-dark"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
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
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed mt-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3 relative">
                  {service.subServices.map((subService, idx) => (
                    <div key={idx} className="flex items-start space-x-3 group/item">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">{subService}</span>
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

        {/* Delivery Methods & Approach */}
        <div className="mt-20 bg-gradient-card rounded-2xl border border-border p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Delivery Approach
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We employ industry-leading methodologies and frameworks to ensure successful project delivery, 
              from initial consultation through implementation and ongoing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { name: "Agile Development", description: "Iterative approach with rapid feedback cycles" },
              { name: "DevOps & DevSecOps", description: "Automated deployment with security built-in" },
              { name: "Scrum Framework", description: "Sprint-based delivery with daily collaboration" },
              { name: "Kanban Methodology", description: "Continuous flow and visual workflow management" },
              { name: "SAFe (Scaled Agile)", description: "Enterprise-scale Agile for complex projects" },
              { name: "Software Architecture", description: "Robust, scalable system design principles" }
            ].map((method, idx) => (
              <div 
                key={method.name}
                className="p-5 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md group"
              >
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {method.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
              <Check className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">
                End-to-End (0 to 1) Software Execution & Architecture Excellence
              </span>
            </div>
          </div>
        </div>

        {/* Industry Expertise Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Industry Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {['Automotive', 'E-Commerce', 'Media & Entertainment', 'Telecommunications', 'Logistics & Supply Chain', 'EV Charging', 'Finance', 'Healthcare'].map((industry, idx) => (
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

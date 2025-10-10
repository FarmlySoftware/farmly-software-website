import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Check, Sparkles, Bot, Cloud, ShoppingCart, Cpu, Globe, Zap, Code, Blocks } from "lucide-react";
import { useMotion } from "@/contexts/MotionContext";

const ServicesPage = () => {
  const { prefersReducedMotion } = useMotion();
  const [currentService, setCurrentService] = useState(0);

  const services = [
    {
      id: "ai-ml-automation",
      name: "AI & Machine Learning Automation",
      icon: Bot,
      tagline: "Intelligent Systems That Learn & Adapt",
      description: "Transform your business with cutting-edge AI solutions that deliver measurable results. From custom AI implementations to industry-specific SaaS platforms, we make advanced AI accessible for businesses of all sizes.",
      features: [
        "Custom AI Solutions & Industry SaaS Platforms",
        "Predictive Analytics & Forecasting Models",
        "AI-Powered Product Recommendations",
        "Intelligent Document Processing (OCR/NLP)",
        "Robotic Process Automation (RPA)",
        "Agentic Workflows & Autonomous Systems",
        "AI-Driven Commerce & Personalization",
        "Machine Learning Model Training & Deployment"
      ],
      benefits: [
        "30-90% efficiency gains on automated processes",
        "Real-time intelligent decision making",
        "Scalable AI infrastructure that grows with you",
        "Reduced operational costs through automation"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: "business-process-optimization",
      name: "Business Process Optimization",
      icon: Cpu,
      tagline: "Streamline Operations, Maximize Efficiency",
      description: "Revolutionize your workflows with targeted automation solutions across automotive, finance, logistics, and customer operations. We build practical solutions that deliver ROI fast.",
      features: [
        "End-to-End Workflow Automation",
        "Complex Product Configurators & Rules Engines",
        "Finance & Sales Process Automation",
        "Supply Chain & Logistics Optimization",
        "Customer Support Automation & Chatbots",
        "Procurement & Purchasing Systems",
        "Checkout Flow Optimization",
        "CRM & ERP Integration"
      ],
      benefits: [
        "45% improvement in operational efficiency",
        "60% reduction in manual processing errors",
        "Seamless system integration across platforms",
        "Real-time visibility into business operations"
      ],
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: "software-ecommerce-development",
      name: "Software & E-Commerce Development",
      icon: ShoppingCart,
      tagline: "Build, Launch, Scale Your Digital Presence",
      description: "Comprehensive end-to-end software development for modern businesses. From internal tools to customer-facing applications, we create scalable solutions tailored to your needs.",
      features: [
        "End-to-End (0 to 1) Software Development",
        "Custom Internal Business Tools",
        "E-Commerce Platforms (Shopify, Magento, Saleor)",
        "Adobe Commerce & Medusa Implementation",
        "Headless Commerce Architecture",
        "Electronic Data Interchange (EDI)",
        "Data-as-a-Product Solutions",
        "API Development & Third-Party Integration"
      ],
      benefits: [
        "25% reduction in cart abandonment rates",
        "Scalable architecture for business growth",
        "Clean, maintainable code practices",
        "Multi-channel commerce capabilities"
      ],
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: "cloud-infrastructure-iot",
      name: "Cloud Infrastructure & IoT Solutions",
      icon: Cloud,
      tagline: "Future-Proof Your Technology Stack",
      description: "Build resilient, scalable cloud infrastructure and IoT solutions. From cloud migrations to smart device integration and EV charger management systems.",
      features: [
        "Cloud Migrations (AWS, Azure, GCP, Private)",
        "Infrastructure Management & Optimization",
        "Kubernetes & Container Orchestration",
        "IoT Project Implementation & Management",
        "Digital Twins & Smart Device Integration",
        "EV Charger Management Systems (OCPP)",
        "Roaming, Billing & CRM for EV Charging",
        "DevOps & DevSecOps Implementation"
      ],
      benefits: [
        "40% reduction in infrastructure costs",
        "99.9% uptime with redundant architecture",
        "Real-time monitoring and predictive maintenance",
        "Seamless multi-cloud deployment"
      ],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: "web3-blockchain",
      name: "Web3 & Blockchain Integration",
      icon: Blocks,
      tagline: "Embrace Decentralized Innovation",
      description: "Navigate the Web3 revolution with confidence. We integrate blockchain, smart contracts, and decentralized solutions into your existing business infrastructure.",
      features: [
        "Smart Contract Development & Auditing",
        "Blockchain Integration (Ethereum, Polygon, Solana)",
        "NFT Marketplace Development",
        "Decentralized Application (dApp) Development",
        "Web3 Wallet Integration",
        "Cryptocurrency Payment Systems",
        "Token Economics & Tokenization",
        "Decentralized Identity Solutions"
      ],
      benefits: [
        "Enhanced transparency and trust",
        "Reduced transaction costs",
        "Programmable business logic via smart contracts",
        "Access to decentralized finance (DeFi)"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: "custom-software-architecture",
      name: "Custom Software Architecture & Consulting",
      icon: Code,
      tagline: "Design Systems That Scale",
      description: "Expert software architecture consulting and custom development. We design robust, maintainable systems that stand the test of time and scale.",
      features: [
        "Software Architecture Design & Review",
        "Microservices Architecture",
        "Event-Driven Architecture",
        "System Integration & API Design",
        "Database Design & Optimization",
        "Performance Tuning & Scalability",
        "Technical Debt Reduction",
        "Cloud-Native Application Development"
      ],
      benefits: [
        "20% faster time-to-market",
        "Reduced technical debt and maintenance costs",
        "Future-proof, scalable architecture",
        "Expert guidance from day one"
      ],
      gradient: "from-indigo-500 to-violet-600"
    },
    {
      id: "digital-transformation",
      name: "Digital Transformation & Consulting",
      icon: Globe,
      tagline: "Orchestrate Enterprise-Wide Change",
      description: "Comprehensive digital transformation consulting for enterprises. We guide your organization through every stage of modernization with proven methodologies.",
      features: [
        "Digital Strategy & Roadmap Development",
        "Technology Stack Assessment & Selection",
        "Agile Transformation & Training",
        "Change Management & Adoption",
        "Legacy System Modernization",
        "Data Governance & Strategy",
        "Multi-Cloud Strategy",
        "Innovation Workshops & Ideation"
      ],
      benefits: [
        "35% improvement in team productivity",
        "Faster innovation cycles",
        "Reduced operational complexity",
        "Clear roadmap from current to future state"
      ],
      gradient: "from-emerald-500 to-green-600"
    },
    {
      id: "emerging-tech",
      name: "Emerging Technologies & Innovation",
      icon: Sparkles,
      tagline: "Stay Ahead of the Curve",
      description: "Explore and implement cutting-edge technologies. From quantum computing readiness to AR/VR experiences and edge computing solutions.",
      features: [
        "Augmented Reality (AR) & Virtual Reality (VR)",
        "Edge Computing & 5G Integration",
        "Quantum Computing Readiness",
        "Computer Vision & Image Recognition",
        "Voice AI & Natural Language Processing",
        "Robotic Process Automation 2.0",
        "Advanced Analytics & Big Data",
        "AI Ethics & Responsible AI Implementation"
      ],
      benefits: [
        "First-mover advantage in your industry",
        "Enhanced customer experiences",
        "Competitive differentiation",
        "Future-ready technology stack"
      ],
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion, services.length]);

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  const currentData = services[currentService];
  const Icon = currentData.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" role="main">
        {/* Hero Section with Rotating Service */}
        <section className="page-top-spacing bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="container mx-auto container-padding relative z-10">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Comprehensive Services
              </Badge>
              <h1 className="heading-page text-foreground mb-6">
                Full-Stack Digital Solutions
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From AI & automation to cloud infrastructure and Web3 — we deliver complete technology solutions that transform businesses.
              </p>
            </div>

            {/* Rotating Service Showcase */}
            <div className="max-w-5xl mx-auto relative">
              <Card className="border-2 border-primary/20 shadow-custom-lg overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${currentData.gradient} opacity-5`}></div>
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${currentData.gradient} shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {currentService + 1} / {services.length}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={prevService}
                        className="h-8 w-8"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={nextService}
                        className="h-8 w-8"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground mb-2">
                    {currentData.name}
                  </CardTitle>
                  <p className="text-lg text-primary font-semibold mb-4">
                    {currentData.tagline}
                  </p>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {currentData.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-4">What We Deliver</h4>
                      <div className="space-y-3">
                        {currentData.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-4">Key Benefits</h4>
                      <div className="space-y-3">
                        {currentData.benefits.map((benefit, idx) => (
                          <div key={idx} className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                            <p className="text-sm text-foreground font-medium">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <Button size="lg" onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      Get Started with {currentData.name}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Service Navigation Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {services.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentService(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentService 
                        ? 'w-8 bg-primary' 
                        : 'w-2 bg-primary/30 hover:bg-primary/50'
                    }`}
                    aria-label={`Go to service ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Industry Expertise */}
            <div className="mt-20 text-center">
              <h3 className="heading-subsection text-foreground mb-8">
                Industry Expertise
              </h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {['Automotive', 'E-Commerce', 'Media & Entertainment', 'Telecommunications', 'Logistics & Supply Chain', 'EV Charging', 'Finance', 'Healthcare', 'Manufacturing', 'Retail'].map((industry, idx) => (
                  <div 
                    key={industry}
                    className="px-6 py-3 bg-gradient-card rounded-full border border-primary/20 hover:border-primary/50 hover:shadow-md transition-all duration-300"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="heading-section text-foreground mb-4">
                Why Work With Farmly Softwares
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enterprise credibility meets startup agility — delivering transformative solutions with measurable impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Cross-Industry Expertise", desc: "Proven experience across Automotive, Energy, Telecom, Finance, Retail & more" },
                { title: "Proven Results", desc: "30–90% automation ROI and efficiency gains on enterprise transformations" },
                { title: "End-to-End Delivery", desc: "From vision to implementation — complete product ownership and execution" },
                { title: "AI-First Culture", desc: "Customer-centric approach with cutting-edge AI and automation expertise" }
              ].map((item, idx) => (
                <Card key={idx} className="border-border hover:border-primary/40 transition-all hover:shadow-custom-lg">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;

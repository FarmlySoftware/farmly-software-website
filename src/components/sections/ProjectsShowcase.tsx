import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, ShoppingBag, Radio, Truck, Zap, Tv, TrendingUp, Shield } from "lucide-react";
import { useMotion } from "@/contexts/MotionContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    icon: Zap,
    title: "EV Charging & Energy SaaS Platform Migration",
    category: "EV Charging & Energy",
    description: "Migrated legacy EV charger and billing systems to AWS SaaS. Automated 90% of operations across roaming, CRM, and billing.",
    metrics: "90% automation achieved",
    tech: ["AWS SaaS", "IoT", "OCPP Protocol"],
    gradient: "from-yellow-500 to-orange-600",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-500"
  },
  {
    icon: Radio,
    title: "Telecommunications B2C/B2B App MVP",
    category: "Telecommunications",
    description: "Multi-cloud B2C/B2B customer app with intelligent chatbot and CRM/Finance integrations.",
    metrics: "45% CX improvement",
    tech: ["Multi-Cloud", "AI Chatbot", "CRM"],
    gradient: "from-blue-500 to-purple-600",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500"
  },
  {
    icon: Building2,
    title: "Automotive Manufacturing DevOps Platform",
    category: "Automotive",
    description: "Azure-based DevOps cloud migration for major automotive manufacturer.",
    metrics: "35% defect reduction",
    tech: ["Azure DevOps", "CI/CD", "Digital Twin"],
    gradient: "from-red-500 to-pink-600",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-500"
  },
  {
    icon: Tv,
    title: "Technology & Media Agile Transformation",
    category: "Technology & Media",
    description: "Trained 1,000+ engineers in CI/CD, IaC, and automation practices.",
    metrics: "1,000+ engineers trained",
    tech: ["DevOps Training", "CI/CD", "IaC"],
    gradient: "from-purple-500 to-indigo-600",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500"
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Checkout & Security Automation",
    category: "E-Commerce & Retail",
    description: "Multi-tenant identity management and checkout orchestration APIs.",
    metrics: "25% lower abandonment",
    tech: ["Identity Management", "Checkout API"],
    gradient: "from-green-500 to-teal-600",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-500"
  },
  {
    icon: Building2,
    title: "Industrial Automation Invoice Processing",
    category: "Industrial Automation",
    description: "OCR-powered invoice workflow with automated ERP/CRM integration.",
    metrics: "70% time reduction",
    tech: ["OCR", "AI/ML", "RPA"],
    gradient: "from-orange-500 to-red-600",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500"
  },
  {
    icon: Truck,
    title: "B2B Commerce RPA & Sales Automation",
    category: "B2B Commerce",
    description: "RPA bots for finance and logistics automation.",
    metrics: "45% efficiency gain",
    tech: ["RPA", "Finance Automation", "Logistics"],
    gradient: "from-cyan-500 to-blue-600",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-500"
  },
  {
    icon: Building2,
    title: "Oil & Gas Data Systems Optimization",
    category: "Oil & Gas",
    description: "Predictive maintenance and taxonomy-driven data classification.",
    metrics: "40% downtime reduction",
    tech: ["Predictive Maintenance", "IoT", "AI"],
    gradient: "from-gray-500 to-slate-600",
    iconBg: "bg-gray-500/10",
    iconColor: "text-gray-500"
  }
];

const ProjectsShowcase = () => {
  const { prefersReducedMotion } = useMotion();

  return (
    <section id="projects" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Featured Work</span>
          </div>
          <h2 className="heading-section text-foreground mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Transforming industries with cutting-edge technology solutions
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="max-w-6xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, idx) => {
                const ProjectIcon = project.icon;
                return (
                  <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card 
                      className={`group relative overflow-hidden bg-background border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col ${!prefersReducedMotion ? 'hover:-translate-y-2' : ''}`}
                    >
                      <div className="flex-grow">
                        {/* Icon Header */}
                        <div className="p-6 pb-0">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-16 h-16 rounded-2xl ${project.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                              <ProjectIcon className={`w-8 h-8 ${project.iconColor}`} />
                            </div>
                            <Badge 
                              variant="secondary" 
                              className="text-xs bg-primary/20 text-primary border-primary/30"
                            >
                              {project.category}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            {project.description}
                          </p>
                        </div>

                        {/* Metrics */}
                        <div className="px-6 mb-4">
                          <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">{project.metrics}</span>
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="px-6 pb-6">
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIdx) => (
                              <Badge 
                                key={techIdx} 
                                variant="outline" 
                                className="text-xs border-primary/20 text-muted-foreground"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Gradient Accent at Bottom */}
                      <div className={`h-1 bg-gradient-to-r ${project.gradient} mt-auto`}></div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-lg transition-all duration-300 pointer-events-none"></div>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* See More Button */}
        <div className="text-center mt-12 mb-16">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.location.href = '/projects'}
            className="group"
          >
            See All Projects
            <TrendingUp className="ml-2 w-4 h-4 group-hover:text-primary transition-colors" />
          </Button>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/30 transition-all">
            <div className="flex items-center justify-center mb-3">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-1">500+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-accent/10 hover:border-accent/30 transition-all">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            <div className="text-3xl font-bold text-accent mb-1">90%</div>
            <div className="text-sm text-muted-foreground">Automation ROI</div>
          </div>
          <div className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-success/10 hover:border-success/30 transition-all">
            <div className="flex items-center justify-center mb-3">
              <Zap className="w-8 h-8 text-success" />
            </div>
            <div className="text-3xl font-bold text-success mb-1">25+</div>
            <div className="text-sm text-muted-foreground">Years Collectively</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
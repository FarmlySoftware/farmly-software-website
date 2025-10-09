import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, ShoppingBag, Radio, Truck, Zap, Tv } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Automotive Fleet Management System",
      industry: "Automotive",
      icon: Building2,
      description: "AI-powered fleet management solution with real-time tracking, predictive maintenance, and automated scheduling for a leading automotive manufacturer.",
      technologies: ["IoT", "AI Forecasting", "Digital Twin", "Process Automation"],
      gradient: "from-primary to-primary-dark"
    },
    {
      id: 2,
      title: "E-Commerce Platform Transformation",
      industry: "E-Commerce",
      icon: ShoppingBag,
      description: "End-to-end e-commerce platform migration from legacy system to modern Shopify Plus with custom product configurator and AI-powered recommendations.",
      technologies: ["Shopify Plus", "AI Recommendations", "Complex Configurator", "Checkout Automation"],
      gradient: "from-primary-dark to-primary-light"
    },
    {
      id: 3,
      title: "Media Streaming Infrastructure",
      industry: "Media",
      icon: Tv,
      description: "Cloud-native media streaming platform with CDN optimization, real-time analytics, and automated content delivery for millions of concurrent users.",
      technologies: ["Cloud Infrastructure", "DevOps", "Real-time Analytics", "CDN Optimization"],
      gradient: "from-primary-light to-primary"
    },
    {
      id: 4,
      title: "Telecom BSS/OSS Automation",
      industry: "Telecommunications",
      icon: Radio,
      description: "Business support system automation with AI-driven customer insights, billing automation, and intelligent network optimization.",
      technologies: ["Process Automation", "AI Validation", "EDI Integration", "RPA"],
      gradient: "from-primary to-primary-light"
    },
    {
      id: 5,
      title: "Logistics Optimization Platform",
      industry: "Logistics",
      icon: Truck,
      description: "AI-powered logistics platform with route optimization, real-time tracking, automated scheduling, and predictive demand forecasting.",
      technologies: ["AI Forecasting", "IoT Integration", "Process Automation", "Real-time Tracking"],
      gradient: "from-primary-dark to-primary"
    },
    {
      id: 6,
      title: "EV Charging Network Management",
      industry: "EV Charging",
      icon: Zap,
      description: "Comprehensive EV charging management platform with roaming capabilities, dynamic pricing, CRM integration, and real-time monitoring.",
      technologies: ["IoT", "Roaming Protocol", "CRM Integration", "Billing Automation"],
      gradient: "from-primary-light to-primary-dark"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-dark rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-sm font-medium text-primary">Our Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mb-6 animate-gradient"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Transforming industries with innovative solutions. From concept to deployment,
            we deliver excellence across automotive, e-commerce, media, telecom, logistics, and EV charging.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.id}
                className="group relative overflow-hidden transition-all duration-500 hover:shadow-custom-lg hover:-translate-y-2 border-border hover:border-primary/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {project.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-primary/5 text-primary text-xs font-medium rounded-full border border-primary/10 group-hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to start your next project?
          </p>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors group"
          >
            Let's discuss your requirements
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

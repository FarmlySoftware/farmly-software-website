import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, ShoppingBag, Radio, Truck, Zap, Tv } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "EV Charging & Energy SaaS Platform Migration",
      industry: "EV Charging & Energy",
      icon: Zap,
      description: "Migrated legacy EV charger and billing systems to AWS SaaS. Automated 90% of operations across roaming, CRM, and billing. Expanded platform to 5 markets with 30% faster deployment cycles.",
      challenge: "Legacy infrastructure, complex integrations",
      result: "90% automation, 5-market expansion",
      technologies: ["AWS SaaS", "IoT", "Roaming Protocol", "CRM Integration", "Billing Automation"],
      gradient: "from-primary to-primary-dark"
    },
    {
      id: 2,
      title: "Telecommunications B2C/B2B App MVP",
      industry: "Telecommunications",
      icon: Radio,
      description: "Multi-cloud B2C/B2B customer app with intelligent chatbot and CRM/Finance integrations. Delivered MVP within budget, improving customer experience metrics by 45%.",
      challenge: "Multi-cloud complexity, tight timeline",
      result: "On-time delivery, 45% CX improvement",
      technologies: ["Multi-Cloud", "AI Chatbot", "CRM/Finance Integration", "Process Automation"],
      gradient: "from-primary-dark to-primary-light"
    },
    {
      id: 3,
      title: "Automotive Manufacturing DevOps Platform",
      industry: "Automotive",
      icon: Building2,
      description: "Azure-based DevOps cloud migration for major automotive manufacturer. Achieved 35% defect reduction and 20% faster delivery cycles through automated CI/CD pipelines.",
      challenge: "Legacy systems, enterprise scale",
      result: "35% defect reduction, 20% faster delivery",
      technologies: ["Azure DevOps", "CI/CD", "IaC", "Digital Twin", "Process Automation"],
      gradient: "from-primary-light to-primary"
    },
    {
      id: 4,
      title: "Technology & Media Agile Transformation",
      industry: "Technology & Media",
      icon: Tv,
      description: "Trained 1,000+ engineers in CI/CD, IaC, and automation practices. Implemented enterprise-wide DevOps transformation with 40% improvement in deployment frequency.",
      challenge: "Large-scale cultural transformation",
      result: "1,000+ engineers trained, 40% faster deploys",
      technologies: ["DevOps Training", "CI/CD", "IaC", "Cloud Migration", "Agile Coaching"],
      gradient: "from-primary to-accent"
    },
    {
      id: 5,
      title: "E-Commerce Checkout & Security Automation",
      industry: "E-Commerce & Retail",
      icon: ShoppingBag,
      description: "Multi-tenant identity management and checkout orchestration APIs. Reduced cart abandonment by 25% and improved security compliance with automated threat detection.",
      challenge: "Security at scale, checkout optimization",
      result: "25% lower abandonment, enhanced security",
      technologies: ["Identity Management", "Checkout API", "Security Automation", "Multi-tenant SaaS"],
      gradient: "from-accent to-primary-dark"
    },
    {
      id: 6,
      title: "Industrial Automation Invoice Processing",
      industry: "Industrial Automation",
      icon: Building2,
      description: "OCR-powered invoice workflow with automated ERP/CRM integration. Reduced manual processing time by 70% and improved accuracy to 98% through intelligent validation.",
      challenge: "Manual processes, data accuracy",
      result: "70% time reduction, 98% accuracy",
      technologies: ["OCR", "RPA", "ERP/CRM Integration", "AI Validation", "Workflow Automation"],
      gradient: "from-primary-dark to-primary-light"
    },
    {
      id: 7,
      title: "B2B Commerce RPA & Sales Automation",
      industry: "B2B Commerce",
      icon: Truck,
      description: "RPA bots for finance and logistics automation. Improved operational efficiency by 45% and reduced processing errors by 60% through intelligent automation.",
      challenge: "Manual workflows, error rates",
      result: "45% efficiency gain, 60% fewer errors",
      technologies: ["RPA", "Finance Automation", "Logistics Optimization", "AI Forecasting"],
      gradient: "from-primary-light to-accent"
    },
    {
      id: 8,
      title: "Oil & Gas Data Systems Optimization",
      industry: "Oil & Gas",
      icon: Building2,
      description: "Predictive maintenance and taxonomy-driven data classification. Reduced equipment downtime by 40% and improved data governance with automated categorization.",
      challenge: "Data silos, equipment reliability",
      result: "40% less downtime, unified data governance",
      technologies: ["Predictive Maintenance", "Data Governance", "IoT", "AI Classification"],
      gradient: "from-accent to-primary"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
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
                    <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                      {project.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight mb-3">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  {/* Challenge & Result */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 bg-background/50 rounded-lg border border-border">
                      <div className="text-xs font-semibold text-muted-foreground mb-1">Challenge</div>
                      <div className="text-sm text-foreground">{project.challenge}</div>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                      <div className="text-xs font-semibold text-primary mb-1">Result</div>
                      <div className="text-sm text-foreground font-medium">{project.result}</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-primary/5 text-primary text-xs font-medium rounded-full border border-primary/10 group-hover:bg-primary/10 transition-colors"
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

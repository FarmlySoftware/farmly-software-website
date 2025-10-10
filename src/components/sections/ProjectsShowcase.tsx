import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Laptop, Smartphone, Tablet, TrendingUp, Zap, Shield } from "lucide-react";
import { useMotion } from "@/contexts/MotionContext";

const projects = [
  {
    icon: Laptop,
    title: "Enterprise AI Platform",
    category: "AI & Automation",
    description: "Intelligent automation system reducing manual processing by 85%",
    metrics: "85% efficiency gain",
    tech: ["Python", "TensorFlow", "AWS"],
    gradient: "from-primary to-accent",
    iconBg: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    icon: Smartphone,
    title: "EV Charging Network",
    category: "IoT Solutions",
    description: "Smart charging infrastructure managing 10,000+ stations",
    metrics: "10K+ stations",
    tech: ["IoT", "React", "Node.js"],
    gradient: "from-accent to-success",
    iconBg: "bg-accent/10",
    iconColor: "text-accent"
  },
  {
    icon: Tablet,
    title: "E-Commerce Platform",
    category: "Digital Commerce",
    description: "Multi-vendor marketplace handling $50M+ annual transactions",
    metrics: "$50M+ revenue",
    tech: ["React", "Stripe", "PostgreSQL"],
    gradient: "from-success to-primary",
    iconBg: "bg-success/10",
    iconColor: "text-success"
  }
];

const ProjectsShowcase = () => {
  const { prefersReducedMotion } = useMotion();

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 mb-4">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Featured Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Transforming industries with cutting-edge technology solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => {
            const ProjectIcon = project.icon;
            return (
              <Card 
                key={idx} 
                className={`group relative overflow-hidden bg-background border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${!prefersReducedMotion ? 'hover:-translate-y-2' : ''}`}
              >
                {/* Icon Header */}
                <div className="p-6 pb-0">
                  <div className={`w-16 h-16 rounded-2xl ${project.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative`}>
                    <ProjectIcon className={`w-8 h-8 ${project.iconColor}`} />
                    <Badge 
                      variant="secondary" 
                      className="absolute -top-2 -right-2 text-xs bg-primary/20 text-primary border-primary/30"
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

                {/* Gradient Accent at Bottom */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-lg transition-all duration-300 pointer-events-none"></div>
              </Card>
            );
          })}
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
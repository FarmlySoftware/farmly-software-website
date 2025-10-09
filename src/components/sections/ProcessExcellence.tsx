import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, GitBranch, Shield, Workflow, Users, Target } from "lucide-react";

const ProcessExcellence = () => {
  const methodologies = [
    {
      icon: Workflow,
      title: "Agile & Scrum",
      description: "Iterative development with sprint-based delivery for rapid value creation and continuous improvement.",
      gradient: "from-primary to-primary-dark"
    },
    {
      icon: GitBranch,
      title: "DevOps & DevSecOps",
      description: "Automated CI/CD pipelines with integrated security, ensuring fast, reliable, and secure deployments.",
      gradient: "from-primary-dark to-primary-light"
    },
    {
      icon: Users,
      title: "Kanban & SAFe",
      description: "Visual workflow management and scaled agile framework for enterprise-level coordination.",
      gradient: "from-primary-light to-primary"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive testing strategies including automated testing, security audits, and performance optimization.",
      gradient: "from-primary to-primary-light"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "Deep dive into your business requirements, challenges, and opportunities through collaborative workshops.",
      icon: Target
    },
    {
      number: "02",
      title: "Architecture & Design",
      description: "Design scalable, secure, and maintainable solutions aligned with your business goals and technical requirements.",
      icon: GitBranch
    },
    {
      number: "03",
      title: "Agile Implementation",
      description: "Iterative development with regular feedback loops, ensuring alignment and early value delivery.",
      icon: Workflow
    },
    {
      number: "04",
      title: "Quality & Security",
      description: "Rigorous testing, security audits, and performance optimization throughout the development lifecycle.",
      icon: Shield
    },
    {
      number: "05",
      title: "Deployment & Training",
      description: "Smooth production deployment with comprehensive documentation and team training for seamless adoption.",
      icon: CheckCircle2
    },
    {
      number: "06",
      title: "Continuous Improvement",
      description: "Ongoing monitoring, optimization, and support to ensure long-term success and evolution.",
      icon: Users
    }
  ];

  return (
    <section id="process" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-sm font-medium text-primary">Our Approach</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Process Excellence
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mb-6 animate-gradient"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Delivering quality through proven methodologies, agile practices, and continuous improvement.
          </p>
        </div>

        {/* Methodologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {methodologies.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card 
                key={method.title}
                className="group relative overflow-hidden transition-all duration-500 hover:shadow-custom-lg hover:-translate-y-2 border-border hover:border-primary/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative text-center">
                  <div className="mx-auto mb-4">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${method.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative text-center">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Our Development Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.number}
                  className="group relative p-6 rounded-lg border border-border hover:border-primary/40 bg-gradient-card hover:shadow-custom-md transition-all duration-300"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md group-hover:scale-110 transition-transform">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications & Standards */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-foreground mb-6">
            Industry Standards & Best Practices
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {['ISO 27001', 'GDPR Compliant', 'SOC 2', 'Agile Certified', 'Cloud Native', 'Security First'].map((standard, idx) => (
              <div 
                key={standard}
                className="px-5 py-2 bg-primary/5 text-primary text-sm font-medium rounded-full border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {standard}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessExcellence;

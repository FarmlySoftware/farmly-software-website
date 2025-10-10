import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Building2, ShoppingBag, Radio, Truck, Zap, Tv } from "lucide-react";
import { useMotion } from "@/contexts/MotionContext";

const ProjectsPage = () => {
  const { prefersReducedMotion } = useMotion();
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "EV Charging & Energy SaaS Platform Migration",
      industry: "EV Charging & Energy",
      icon: Zap,
      description: "Migrated legacy EV charger and billing systems to AWS SaaS. Automated 90% of operations across roaming, CRM, and billing. Expanded platform to 5 markets with 30% faster deployment cycles.",
      challenge: "Legacy infrastructure with complex integrations across roaming protocols, CRM systems, and billing platforms required seamless migration without service disruption.",
      solution: "Built cloud-native microservices architecture on AWS with automated CI/CD pipelines. Implemented OCPP protocol integration, real-time billing engine, and multi-tenant SaaS platform.",
      result: "90% automation achieved, 5-market expansion completed, 30% faster deployments",
      impact: "Enabled rapid market expansion and reduced operational costs by 60%",
      technologies: ["AWS SaaS", "IoT", "OCPP Protocol", "CRM Integration", "Billing Automation", "Microservices"],
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      id: 2,
      title: "Telecommunications B2C/B2B App MVP",
      industry: "Telecommunications",
      icon: Radio,
      description: "Multi-cloud B2C/B2B customer app with intelligent chatbot and CRM/Finance integrations. Delivered MVP within budget, improving customer experience metrics by 45%.",
      challenge: "Tight timeline to deliver multi-cloud customer application with complex integrations across CRM, finance systems, and legacy infrastructure.",
      solution: "Developed cloud-agnostic architecture with AI-powered chatbot for customer support. Integrated seamlessly with existing CRM and finance systems using event-driven architecture.",
      result: "On-time MVP delivery, 45% improvement in customer experience metrics",
      impact: "Reduced customer support costs by 35% and improved satisfaction scores significantly",
      technologies: ["Multi-Cloud", "AI Chatbot", "CRM/Finance Integration", "Event-Driven Architecture", "Process Automation"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 3,
      title: "Automotive Manufacturing DevOps Platform",
      industry: "Automotive",
      icon: Building2,
      description: "Azure-based DevOps cloud migration for major automotive manufacturer. Achieved 35% defect reduction and 20% faster delivery cycles through automated CI/CD pipelines.",
      challenge: "Legacy on-premise systems with manual deployment processes causing delays and quality issues across global development teams.",
      solution: "Migrated to Azure DevOps with automated CI/CD pipelines, infrastructure as code, and comprehensive testing automation. Implemented digital twin for manufacturing simulation.",
      result: "35% defect reduction, 20% faster delivery cycles, 99.9% platform uptime",
      impact: "Accelerated time-to-market for new vehicle features and reduced production defects",
      technologies: ["Azure DevOps", "CI/CD", "Infrastructure as Code", "Digital Twin", "Automated Testing"],
      gradient: "from-red-500 to-pink-600"
    },
    {
      id: 4,
      title: "Technology & Media Agile Transformation",
      industry: "Technology & Media",
      icon: Tv,
      description: "Trained 1,000+ engineers in CI/CD, IaC, and automation practices. Implemented enterprise-wide DevOps transformation with 40% improvement in deployment frequency.",
      challenge: "Organization-wide cultural shift required to move from waterfall to agile methodology across 1,000+ engineers in multiple countries.",
      solution: "Designed comprehensive training program, established DevOps practices, automated deployment pipelines, and created centers of excellence for continuous improvement.",
      result: "1,000+ engineers trained, 40% faster deployments, 50% reduction in incidents",
      impact: "Transformed engineering culture and significantly improved product delivery velocity",
      technologies: ["DevOps Training", "CI/CD", "Infrastructure as Code", "Cloud Migration", "Agile Coaching"],
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      id: 5,
      title: "E-Commerce Checkout & Security Automation",
      industry: "E-Commerce & Retail",
      icon: ShoppingBag,
      description: "Multi-tenant identity management and checkout orchestration APIs. Reduced cart abandonment by 25% and improved security compliance with automated threat detection.",
      challenge: "High cart abandonment rates and security vulnerabilities in checkout process affecting conversion and customer trust.",
      solution: "Implemented optimized checkout flow with one-click purchasing, multi-tenant identity management, and AI-powered fraud detection system.",
      result: "25% lower cart abandonment, 98% fraud detection accuracy, PCI compliance achieved",
      impact: "Increased revenue by $2M annually and enhanced customer trust through improved security",
      technologies: ["Identity Management", "Checkout API", "Security Automation", "Fraud Detection", "Multi-tenant SaaS"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 6,
      title: "Industrial Automation Invoice Processing",
      industry: "Industrial Automation",
      icon: Building2,
      description: "OCR-powered invoice workflow with automated ERP/CRM integration. Reduced manual processing time by 70% and improved accuracy to 98% through intelligent validation.",
      challenge: "Manual invoice processing causing delays, errors, and high operational costs across global operations.",
      solution: "Built AI-powered OCR system with intelligent document classification, automated validation, and seamless ERP/CRM integration using RPA.",
      result: "70% reduction in processing time, 98% accuracy rate, 60% cost savings",
      impact: "Eliminated bottlenecks in accounts payable and freed finance team for strategic work",
      technologies: ["OCR", "AI/ML", "RPA", "ERP/CRM Integration", "Workflow Automation", "Document Classification"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 7,
      title: "B2B Commerce RPA & Sales Automation",
      industry: "B2B Commerce",
      icon: Truck,
      description: "RPA bots for finance and logistics automation. Improved operational efficiency by 45% and reduced processing errors by 60% through intelligent automation.",
      challenge: "Manual workflows in finance and logistics causing inefficiencies, errors, and delayed order fulfillment.",
      solution: "Deployed RPA bots for order processing, invoice generation, and logistics tracking. Integrated with existing systems using API orchestration.",
      result: "45% efficiency improvement, 60% fewer errors, 3x faster order processing",
      impact: "Significantly improved customer satisfaction and reduced operational overhead",
      technologies: ["RPA", "Finance Automation", "Logistics Optimization", "API Integration", "AI Forecasting"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 8,
      title: "Oil & Gas Data Systems Optimization",
      industry: "Oil & Gas",
      icon: Building2,
      description: "Predictive maintenance and taxonomy-driven data classification. Reduced equipment downtime by 40% and improved data governance with automated categorization.",
      challenge: "Data silos and equipment failures causing significant downtime and safety concerns in oil & gas operations.",
      solution: "Implemented IoT-based predictive maintenance system with AI-driven data classification and unified data governance framework.",
      result: "40% reduction in downtime, unified data governance, 50% faster incident response",
      impact: "Enhanced operational safety, reduced maintenance costs, and improved regulatory compliance",
      technologies: ["Predictive Maintenance", "IoT", "AI Classification", "Data Governance", "Real-time Monitoring"],
      gradient: "from-gray-500 to-slate-600"
    }
  ];

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion, projects.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentData = projects[currentProject];
  const Icon = currentData.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" role="main">
        {/* Hero Section with Rotating Project */}
        <section className="page-top-spacing bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto container-padding relative z-10">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Featured Projects
              </Badge>
              <h1 className="heading-page text-foreground mb-6">
                Transforming Industries Worldwide
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From concept to deployment, delivering excellence across automotive, e-commerce, media, telecom, and energy sectors.
              </p>
            </div>

            {/* Rotating Project Showcase */}
            <div className="max-w-6xl mx-auto relative">
              <Card className="border-2 border-primary/20 shadow-custom-lg overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${currentData.gradient} opacity-5`}></div>
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${currentData.gradient} shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {currentData.industry}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {currentProject + 1} / {projects.length}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={prevProject}
                        className="h-8 w-8"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={nextProject}
                        className="h-8 w-8"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground mb-4">
                    {currentData.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {currentData.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-bold text-primary mb-2">Challenge</h4>
                        <p className="text-sm text-muted-foreground">{currentData.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-primary mb-2">Solution</h4>
                        <p className="text-sm text-muted-foreground">{currentData.solution}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <h4 className="text-sm font-bold text-primary mb-2">Results Achieved</h4>
                        <p className="text-sm text-foreground font-medium mb-3">{currentData.result}</p>
                        <h4 className="text-sm font-bold text-primary mb-2">Business Impact</h4>
                        <p className="text-sm text-foreground">{currentData.impact}</p>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentData.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-primary/5 text-primary text-xs font-medium rounded-full border border-primary/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <Button size="lg" onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setTimeout(() => {
                        window.location.href = '/#contact';
                      }, 500);
                    }}>
                      Start Your Project
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project Navigation Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentProject(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentProject 
                        ? 'w-8 bg-primary' 
                        : 'w-2 bg-primary/30 hover:bg-primary/50'
                    }`}
                    aria-label={`Go to project ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Projects Grid */}
        <section className="section-padding bg-background">
          <div className="container mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="heading-section text-foreground mb-4">
                All Projects
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore our complete portfolio of successful transformations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {projects.map((project, idx) => {
                const ProjectIcon = project.icon;
                return (
                  <Card 
                    key={project.id}
                    className="group cursor-pointer hover:shadow-custom-lg hover:-translate-y-1 transition-all duration-300 border-border hover:border-primary/40"
                    onClick={() => setCurrentProject(idx)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient}`}>
                          <ProjectIcon className="h-5 w-5 text-white" />
                        </div>
                        <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                          {project.industry}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs font-semibold text-primary mb-1">Result</div>
                      <div className="text-sm text-foreground">{project.result}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;

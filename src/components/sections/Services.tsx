import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Scale, CheckCircle2 } from "lucide-react";
import { useMotion } from "@/contexts/MotionContext";

const Services = () => {
  const { prefersReducedMotion } = useMotion();

  const services = [
    {
      icon: Stethoscope,
      title: "Healthcare — Clinic Management Software",
      description: "Automate patient workflows, digitize medical records, and streamline appointment scheduling to save time and improve care quality.",
      features: [
        "Automated patient registration & tracking",
        "Digital medical records (EMR)",
        "Smart appointment scheduling",
        "Real-time vitals tracking",
        "Multi-doctor workflow management"
      ],
      gradient: "from-primary to-primary-dark"
    },
    {
      icon: Scale,
      title: "Legal — Documentation Assistant",
      description: "Eliminate manual paperwork with automated legal document creation, case tracking, and secure storage for faster case resolution.",
      features: [
        "Automated document generation",
        "Smart legal templates & workflows",
        "Case progress & deadline tracking",
        "Secure searchable repository"
      ],
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${!prefersReducedMotion ? 'animate-slide-up' : ''}`}>
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-sm font-medium text-primary">Our Solutions</span>
          </div>
          <h2 className="heading-section text-foreground mb-4">
            Business Process Automation for Healthcare & Legal
          </h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mb-6 animate-gradient"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Transform manual workflows into automated systems that save time, reduce errors, and boost productivity.
          </p>
        </div>

        {/* Services Grid - 2 Large Tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group ${!prefersReducedMotion ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="h-full card-interactive overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`}></div>
                  <CardHeader className="pb-6">
                    <div className={`mb-6 p-5 rounded-2xl bg-primary/10 inline-block ${!prefersReducedMotion ? 'group-hover:scale-110' : ''} transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle className="text-3xl mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-base text-foreground/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

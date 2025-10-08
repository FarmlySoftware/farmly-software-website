import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

const Services = () => {
  const packages = [
    {
      id: "static",
      name: "Static Website Package",
      price: "₹10,000",
      description: "Perfect for simple business sites or portfolios. Includes custom design, up to 5 pages, basic AI optimization.",
      features: [
        "Custom responsive design",
        "Up to 5 pages",
        "Basic AI optimization",
        "Contact form integration",
        "Google Analytics setup",
        "Mobile-friendly design",
        "1 month free support"
      ],
      popular: false,
      ctaText: "Learn More"
    },
    {
      id: "ecommerce",
      name: "E-Commerce Package",
      price: "₹50,000",
      description: "AI-powered online store with smart product recommendations, automated inventory management, and intelligent user analytics.",
      features: [
        "Complete e-commerce setup",
        "Product catalog management",
        "Payment gateway integration",
        "User account system",
        "Inventory management",
        "Order tracking system",
        "AI-powered analytics",
        "3 months free support"
      ],
      popular: true,
      ctaText: "Learn More"
    },
    {
      id: "maintenance",
      name: "Maintenance Package",
      price: "₹15,000",
      priceUnit: "per website/month",
      description: "AI-powered maintenance with automated updates, intelligent security monitoring, and performance optimization.",
      features: [
        "Weekly website updates",
        "Security monitoring",
        "Performance optimization",
        "Content updates",
        "Backup management",
        "Technical support",
        "Monthly reports"
      ],
      popular: false,
      ctaText: "Learn More"
    }
  ];

  const handleLearnMore = (packageId: string) => {
    // Scroll to contact form with package pre-selected
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
      // Pre-select the package in the form (we'll implement this in the contact form)
      setTimeout(() => {
        const packageSelect = document.getElementById('package-select') as HTMLSelectElement;
        if (packageSelect) {
          packageSelect.value = packageId;
        }
      }, 500);
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Service Packages
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Choose the perfect package for your business needs. All packages include 
            professional development, AI optimization, and ongoing support.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`relative transition-all duration-300 hover:shadow-custom-lg hover:-translate-y-2 ${
                pkg.popular 
                  ? 'border-primary shadow-custom-md ring-1 ring-primary/20' 
                  : 'border-border hover:border-primary/30'
              }`}
            >
              {pkg.popular && (
                <Badge 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-primary-foreground px-4 py-1"
                >
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {pkg.name}
                </CardTitle>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  {pkg.priceUnit && (
                    <span className="text-sm text-muted-foreground ml-1">
                      {pkg.priceUnit}
                    </span>
                  )}
                </div>
                <CardDescription className="text-muted-foreground">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="pt-6">
                <Button
                  variant={pkg.popular ? "default" : "outline"}
                  className="w-full group"
                  onClick={() => handleLearnMore(pkg.id)}
                >
                  {pkg.ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="p-4 bg-gradient-card rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Domain Registration</h4>
              <p className="text-sm text-muted-foreground">Secure your perfect domain name</p>
            </div>
            <div className="p-4 bg-gradient-card rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">SSL Certificates</h4>
              <p className="text-sm text-muted-foreground">Secure your website with HTTPS</p>
            </div>
            <div className="p-4 bg-gradient-card rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">AI Content Creation</h4>
              <p className="text-sm text-muted-foreground">AI-powered content generation and optimization</p>
            </div>
            <div className="p-4 bg-gradient-card rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-2">Digital Marketing</h4>
              <p className="text-sm text-muted-foreground">Boost your online presence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
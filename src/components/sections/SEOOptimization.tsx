import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Globe, TrendingUp, MapPin, Star, Users } from "lucide-react";

const SEOOptimization = () => {
  const seoFeatures = [
    {
      icon: Search,
      title: "Advanced SEO Setup",
      description: "Complete on-page optimization with meta tags, structured data, and keyword optimization",
      features: ["Meta titles & descriptions", "Header tag optimization", "Image alt texts", "Schema markup"]
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Fast-loading websites that rank higher in search results",
      features: ["Code minification", "Image compression", "Lazy loading", "Core Web Vitals optimization"]
    },
    {
      icon: Globe,
      title: "Technical SEO",
      description: "Technical foundation for better search engine visibility",
      features: ["XML sitemaps", "Robots.txt optimization", "Canonical URLs", "Mobile-first indexing"]
    },
    {
      icon: MapPin,
      title: "Local SEO Integration",
      description: "Boost your local search presence and attract nearby customers",
      features: ["Google My Business setup", "Local schema markup", "NAP consistency", "Location-based keywords"]
    }
  ];

  const keywords = [
    "website development India",
    "affordable web hosting",
    "SEO optimized websites",
    "business website design",
    "e-commerce development",
    "responsive web design",
    "website maintenance services",
    "web development company Delhi"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            SEO-Optimized for Success
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Every website we build is optimized for search engines from day one. 
            Get found by your customers with our comprehensive SEO approach.
          </p>
        </div>

        {/* SEO Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {seoFeatures.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-custom-md transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {feature.features.map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Target Keywords */}
        <div className="bg-gradient-card rounded-lg border border-border p-8 mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
            Target Keywords We Optimize For
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {keywords.map((keyword, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-primary/10 text-primary border border-primary/20"
              >
                {keyword}
              </Badge>
            ))}
          </div>
        </div>

        {/* Local SEO Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Local SEO & Google Business Integration
            </h3>
            <p className="text-muted-foreground">
              Dominate local search results with our comprehensive local SEO strategy. 
              We help your business appear in Google Maps and local search queries.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Star className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Google My Business Optimization</h4>
                  <p className="text-sm text-muted-foreground">Complete profile setup with photos, reviews, and regular updates</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Review Management Strategy</h4>
                  <p className="text-sm text-muted-foreground">Tools and guidance for collecting and managing customer reviews</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Local Citation Building</h4>
                  <p className="text-sm text-muted-foreground">Consistent NAP (Name, Address, Phone) across all platforms</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-card rounded-lg border border-border p-6">
            <h4 className="text-lg font-semibold text-foreground mb-4">Our Location</h4>
            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.06396406817!2d77.04417!3d28.527554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WebCraft Consultants Location - New Delhi, India"
              ></iframe>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Address:</strong> New Delhi, India
              </p>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Service Area:</strong> Pan India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOOptimization;
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">Farmly Software Pvt. Ltd.</h3>
            <p className="text-sm text-muted-foreground">
              Leading software development and AI automation company based in Tamil Nadu, India, serving businesses across India and globally.
            </p>
            <address className="space-y-2 not-italic">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <a 
                  href="mailto:Contact@farmlysoftwares.com" 
                  className="hover:text-primary transition-colors"
                  aria-label="Email us at Contact@farmlysoftwares.com"
                >
                  Contact@farmlysoftwares.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <a 
                  href="tel:+918220001607" 
                  className="hover:text-primary transition-colors"
                  aria-label="Call us at +91 82200 01607"
                >
                  +91 82200 01607
                </a>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <nav className="space-y-4" aria-label="Footer navigation">
            <h4 className="text-md font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                aria-label="Navigate to home section"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                aria-label="Navigate to about section"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                aria-label="Navigate to services section"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                aria-label="Navigate to contact section"
              >
                Contact
              </button>
            </div>
          </nav>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Expertise</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">AI & Automation</p>
              <p className="text-sm text-muted-foreground">IoT & Digital Twin</p>
              <p className="text-sm text-muted-foreground">Cloud & DevOps</p>
              <p className="text-sm text-muted-foreground">E-Commerce Solutions</p>
              <p className="text-sm text-muted-foreground">Enterprise Consulting</p>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Stay Connected</h4>
            <p className="text-sm text-muted-foreground">
              Follow us on social media for updates and web development tips.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-3" role="group" aria-label="Social media links">
              <a
                href="https://linkedin.com/company/farmly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  aria-label="LinkedIn"
                  asChild
                >
                  <span>
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Button>
              </a>
              <a
                href="https://twitter.com/FarmlyTech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter/X page"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  aria-label="Twitter/X"
                  asChild
                >
                  <span>
                    <Twitter className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Button>
              </a>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="Send us an email"
                onClick={() => window.location.href = 'mailto:Contact@farmlysoftwares.com'}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
            
            {/* Call to Action */}
            <Button
              variant="cta"
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="w-full"
            >
              Get Free Quote
            </Button>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Farmly Software Pvt. Ltd. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <button className="hover:text-primary transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-primary transition-colors">
              Terms of Service
            </button>
            <button className="hover:text-primary transition-colors">
              Sitemap
            </button>
          </div>
        </div>

        {/* SEO Footer Text */}
        <div className="pb-6">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Farmly Software Pvt. Ltd.</strong> - Leading software development company in Tamil Nadu, India | 
            Expert in AI automation, agentic AI, cloud migration (AWS, Azure, Google Cloud), DevOps & DevSecOps, 
            IoT solutions & digital twin, e-commerce development (Shopify, Magento, Adobe Commerce, Saleor), 
            SaaS & PaaS platforms, microservices architecture, API-first development, MACH architecture, 
            data management, PIM implementation, business process automation, lean process optimization, 
            data forecasting & prediction | Serving B2B, B2C, D2C, and A2A businesses | 
            Custom software development for automotive, EV charging, telecommunications, retail, finance, 
            logistics, energy, and manufacturing industries | Founded by Karthik Pandian Duraipandi | 
            Trusted by businesses across India and globally
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
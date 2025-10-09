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
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">Farmly</h3>
            <p className="text-sm text-muted-foreground">
              Software consulting, implementation, and operations across AI, IoT, E-Commerce, Cloud, and Custom Development.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:Contact@farmlysoftwares.com" className="hover:text-primary transition-colors">
                  Contact@farmlysoftwares.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+918220001607" className="hover:text-primary transition-colors">
                  +91 82200 01607
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Our Services</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">AI & Automation</p>
              <p className="text-sm text-muted-foreground">IoT Solutions</p>
              <p className="text-sm text-muted-foreground">E-Commerce</p>
              <p className="text-sm text-muted-foreground">Cloud & DevOps</p>
              <p className="text-sm text-muted-foreground">Custom Development</p>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Stay Connected</h4>
            <p className="text-sm text-muted-foreground">
              Follow us on social media for updates and web development tips.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="Email"
                onClick={() => window.location.href = 'mailto:Contact@farmlysoftwares.com'}
              >
                <Mail className="h-4 w-4" />
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
            © {currentYear} Farmly. All rights reserved.
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
            AI & Automation Consulting | IoT Solutions | E-Commerce Implementation | Cloud Migration & DevOps | 
            Custom Software Development | EV Charging Management | Business Process Automation | 
            Serving Automotive, Telecom, Logistics, Media & EV Charging Industries
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
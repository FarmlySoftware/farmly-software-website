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
            <h3 className="text-lg font-bold text-primary">Farmly Softwares</h3>
            <p className="text-sm text-muted-foreground">
              Leading software development firm offering end-to-end AI-powered solutions and reliable hosting services in India.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@farmlysoftware.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 8220001607</span>
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
              <p className="text-sm text-muted-foreground">Software Development</p>
              <p className="text-sm text-muted-foreground">AI-Powered Solutions</p>
              <p className="text-sm text-muted-foreground">Cloud Hosting</p>
              <p className="text-sm text-muted-foreground">AI Optimization</p>
              <p className="text-sm text-muted-foreground">Smart Maintenance</p>
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
                onClick={() => window.location.href = 'mailto:contact@farmlysoftware.com'}
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
            © {currentYear} Farmly Softwares. All rights reserved.
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
            Professional AI software development services in India | Affordable cloud hosting solutions | 
            AI optimized business applications | Smart e-commerce development | Responsive software design | 
            Intelligent maintenance and support services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
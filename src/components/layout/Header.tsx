import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50" role="banner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Farmly</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6" role="navigation" aria-label="Main navigation">
            <button
              onClick={() => scrollToSection('home')}
              className="text-muted-foreground hover:text-primary transition-smooth text-sm"
              aria-label="Navigate to home section"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-smooth text-sm"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="text-muted-foreground hover:text-primary transition-smooth text-sm"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-smooth text-sm"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-primary transition-smooth text-sm"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-smooth text-sm"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              variant="cta"
              onClick={() => scrollToSection('contact')}
              className="shadow-custom-md"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border bg-background">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-smooth w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-smooth w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('why-choose-us')}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-smooth w-full text-left"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-smooth w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-smooth w-full text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-smooth w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button
                  variant="cta"
                  onClick={() => scrollToSection('contact')}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
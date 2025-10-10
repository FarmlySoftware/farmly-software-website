import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import SkipToContent from "@/components/ui/skip-to-content";
import MotionToggle from "@/components/ui/motion-toggle";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Send email via edge function
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      toast({
        title: "Message Sent Successfully!",
        description: data.message || "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Submission Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try emailing us directly at contact@farmlysoftware.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      content: "Contact@farmlysoftwares.com",
      link: "mailto:Contact@farmlysoftwares.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 82200 01607",
      link: "tel:+918220001607",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+91 82200 01607",
      link: "https://wa.me/918220001607",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SkipToContent />
      <Header />
      <main id="main-content" role="main" className="page-top-spacing">
        <section className="section-padding bg-secondary/30 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto container-padding relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="heading-page text-foreground mb-4">
                Get in Touch
              </h1>
              <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to transform your business with cutting-edge solutions? Reach out for a free consultation
                and let's discuss how we can help you achieve your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Contact Methods */}
              <div className="space-y-6 lg:col-span-1">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={method.title}
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block group"
                    >
                       <Card className="card-interactive overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <CardContent className="p-6 relative">
                          <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-lg bg-primary/10 shadow-md group-hover:scale-110 transition-transform duration-300">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-muted-foreground mb-1">{method.title}</p>
                              <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                                {method.content}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  );
                })}

                {/* Additional Info */}
                <Card className="border-primary/20 bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-primary" />
                      <h3 className="font-bold text-foreground">Business Hours</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                      Saturday: 10:00 AM - 4:00 PM IST<br />
                      Sunday: Closed
                    </p>
                    <div className="pt-4 border-t border-border">
                      <h3 className="font-bold text-foreground mb-2">Response Time</h3>
                      <p className="text-sm text-muted-foreground">
                        We typically respond within 24 hours on business days.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-border shadow-custom-md">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and our team will get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                            className="border-input"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                            className="border-input"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 82200 01607"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="border-input"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="service-select">Service Interest</Label>
                          <Select
                            value={formData.service}
                            onValueChange={(value) => handleInputChange('service', value)}
                          >
                            <SelectTrigger id="service-select" className="border-input">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ai-automation">AI & Agentic Automation</SelectItem>
                              <SelectItem value="business-optimization">Business Process Engineering</SelectItem>
                              <SelectItem value="software-ecommerce">Enterprise Software & E-Commerce</SelectItem>
                              <SelectItem value="cloud-iot">Cloud, IoT & Digital Twin</SelectItem>
                              <SelectItem value="devops-devsecops">DevOps & DevSecOps</SelectItem>
                              <SelectItem value="ev-charging">EV Charging Management</SelectItem>
                              <SelectItem value="digital-transformation">Digital Transformation Consulting</SelectItem>
                              <SelectItem value="consultation">Free Consultation</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project requirements, timeline, industry, and any specific features you need..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          required
                          className="border-input resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="cta"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full md:w-auto group"
                      >
                        {isSubmitting ? "Sending Message..." : "Send Message"}
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MotionToggle />
    </div>
  );
};

export default ContactPage;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does Farmly Software provide in Tamil Nadu?",
      answer: "Farmly Software Pvt. Ltd. is a comprehensive software development company based in Tamil Nadu, India. We specialize in AI & machine learning consulting, business process automation, cloud migration services (AWS, Azure, Google Cloud), DevOps & DevSecOps implementation, IoT solutions, e-commerce development (Shopify, Magento, Adobe Commerce), SaaS/PaaS platforms, microservices architecture, API-first development, data management, MACH architecture, and complete digital transformation services for businesses across India and globally."
    },
    {
      question: "How can AI automation benefit my business in India?",
      answer: "AI automation can transform your business by reducing operational costs by 30-90%, improving accuracy and efficiency, enabling 24/7 operations, providing data-driven insights for better decision-making, and freeing up your team to focus on strategic initiatives. Our agentic AI solutions are specifically designed for Indian businesses, considering local market conditions, compliance requirements, and budget constraints. We implement process automation, intelligent document processing, predictive analytics, chatbots, and custom AI models tailored to your industry needs."
    },
    {
      question: "What is the cost of digital transformation services in India?",
      answer: "The cost of digital transformation varies based on your business size, industry, current technology infrastructure, and specific goals. At Farmly Software, we offer flexible engagement models including fixed-price projects, time & material contracts, and dedicated team models. Our solutions are designed to provide ROI within 6-12 months through efficiency gains, cost reduction, and revenue growth. We work with businesses of all sizes - from startups to enterprises - with budgets ranging from ₹5 lakhs to ₹50+ lakhs. Contact us for a free consultation and customized quote."
    },
    {
      question: "Which cloud platform is best for my small business - AWS, Azure, or Google Cloud?",
      answer: "The best cloud platform depends on your specific requirements, existing technology stack, budget, and team expertise. AWS offers the most comprehensive services and global reach, making it ideal for scalable applications. Azure integrates seamlessly with Microsoft products, perfect if you use Office 365 or .NET technologies. Google Cloud excels in data analytics, ML, and Kubernetes. For most Indian SMEs, we recommend AWS or Azure due to their local data centers in Mumbai and Pune. Our cloud migration experts assess your needs and recommend the most cost-effective platform, handling the complete migration process with zero downtime."
    },
    {
      question: "What are the benefits of DevOps implementation?",
      answer: "DevOps implementation accelerates software delivery by 10x, reduces deployment failures by 60%, enables faster recovery from incidents, improves collaboration between development and operations teams, and ensures consistent quality through automated testing. Our DevOps services include CI/CD pipeline setup, infrastructure as code (Terraform, CloudFormation), container orchestration (Docker, Kubernetes), monitoring & logging (Prometheus, ELK), and automated security scanning. We help Tamil Nadu businesses achieve faster time-to-market, reduced costs, and improved software quality."
    },
    {
      question: "How do I choose the right software development company in Tamil Nadu?",
      answer: "When selecting a software development partner in Tamil Nadu, consider: 1) Technical expertise across your required technologies, 2) Proven track record with case studies and client testimonials, 3) Industry-specific experience, 4) Quality of communication and project management, 5) Post-launch support and maintenance, 6) Transparent pricing and timelines, 7) Team size and scalability, 8) Security and data protection practices. Farmly Software Pvt. Ltd. offers all these qualities with 10+ years of experience, 150+ successful projects, and deep expertise in AI, cloud, IoT, and e-commerce solutions. Schedule a free consultation to discuss your requirements."
    },
    {
      question: "What is MACH architecture and why should Indian businesses adopt it?",
      answer: "MACH stands for Microservices-based, API-first, Cloud-native, and Headless architecture. It's a modern approach to building flexible, scalable digital platforms that can adapt quickly to market changes. Indian businesses benefit from MACH by: faster feature deployment, easier integration with third-party services, better scalability during peak traffic, technology independence (no vendor lock-in), and improved customer experiences across all channels. This is especially valuable for e-commerce, fintech, and B2B platforms serving the growing Indian digital market."
    },
    {
      question: "Do you provide e-commerce development services for Indian businesses?",
      answer: "Yes! Farmly Software specializes in e-commerce development for B2B, B2C, and D2C businesses in India. We build custom solutions on Shopify, Magento, Adobe Commerce, Saleor, and Medusa platforms. Our services include multi-vendor marketplace development, payment gateway integration (Razorpay, PayU, Stripe), inventory management, order fulfillment automation, analytics & reporting, mobile app development, and conversion rate optimization. We understand Indian e-commerce challenges like COD management, regional payment preferences, multi-language support, and GST compliance."
    },
    {
      question: "What is agentic AI and how is it different from traditional AI?",
      answer: "Agentic AI refers to autonomous AI systems that can perceive their environment, make decisions, take actions, and learn from outcomes without constant human intervention. Unlike traditional AI that follows predefined rules, agentic AI can adapt to new situations, chain multiple tasks together, and achieve complex goals independently. Use cases include: intelligent customer service agents, automated workflow orchestration, predictive maintenance systems, and autonomous supply chain optimization. Farmly Software helps Indian businesses implement agentic AI to achieve unprecedented levels of automation and efficiency."
    },
    {
      question: "How long does it take to implement business process automation?",
      answer: "Implementation timelines vary based on process complexity, system integrations, and organizational readiness. Typical timelines: Simple automation (document processing, email workflows): 2-4 weeks, Medium complexity (CRM integration, approval workflows): 1-3 months, Enterprise-wide transformation (ERP integration, multiple departments): 3-6 months. At Farmly Software, we follow an agile approach with quick wins in the first 30 days, iterative improvements, and continuous optimization. We prioritize high-impact, low-complexity automations first to demonstrate ROI quickly while building toward comprehensive automation."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our software development, AI automation, and digital transformation services in Tamil Nadu, India
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.slice(0, 5).map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/40 rounded-lg px-6 hover:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* See More Button */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = '/faq'}
              className="group"
            >
              See All FAQs
              <HelpCircle className="ml-2 w-4 h-4 group-hover:text-primary transition-colors" />
            </Button>
          </div>
        </div>

        {/* Structured Data for FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </div>
    </section>
  );
};

export default FAQ;

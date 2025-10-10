import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipToContent from "@/components/ui/skip-to-content";
import MotionToggle from "@/components/ui/motion-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Sparkles } from "lucide-react";

const faqCategories = [
  {
    category: "Farmly Services",
    questions: [
      {
        question: "What services does Farmly Software provide?",
        answer: "Farmly Software Pvt. Ltd. is a comprehensive software development company based in Tamil Nadu, India. We specialize in AI & machine learning consulting, business process automation, cloud migration services (AWS, Azure, Google Cloud), DevOps & DevSecOps implementation, IoT solutions, e-commerce development, SaaS/PaaS platforms, microservices architecture, API-first development, data management, MACH architecture, and complete digital transformation services."
      },
      {
        question: "What industries does Farmly Software serve?",
        answer: "We serve a diverse range of industries including e-commerce, fintech, healthcare, manufacturing, logistics, retail, education, and government sectors. Our solutions are tailored to meet specific industry requirements and compliance standards."
      },
      {
        question: "Does Farmly offer custom software development?",
        answer: "Yes, we specialize in custom software development tailored to your unique business requirements. From web and mobile applications to enterprise solutions, we build scalable, secure, and user-friendly software that aligns with your business goals."
      },
      {
        question: "What is your project delivery approach?",
        answer: "We follow an agile methodology with iterative development, regular client feedback, and transparent communication. Our approach includes discovery, design, development, testing, deployment, and ongoing support phases to ensure successful project delivery."
      },
      {
        question: "Do you provide post-launch support and maintenance?",
        answer: "Absolutely! We offer comprehensive post-launch support including bug fixes, performance optimization, security updates, feature enhancements, and 24/7 monitoring to ensure your application runs smoothly and stays up-to-date."
      }
    ]
  },
  {
    category: "Agile",
    questions: [
      {
        question: "What is Agile methodology and why is it important?",
        answer: "Agile is an iterative approach to software development that emphasizes flexibility, collaboration, and customer satisfaction. It allows for rapid delivery of working software, quick adaptation to changes, and continuous improvement based on feedback, making it ideal for today's fast-paced business environment."
      },
      {
        question: "How does Farmly implement Agile in projects?",
        answer: "We implement Agile through sprint-based development cycles (typically 2 weeks), daily stand-ups, sprint planning, retrospectives, and regular client demos. We use tools like Jira, Trello, or Azure DevOps for project tracking and maintain transparent communication throughout the development process."
      },
      {
        question: "What are the benefits of Agile for my business?",
        answer: "Agile provides faster time-to-market, improved product quality through continuous testing, better risk management, increased flexibility to adapt to changing requirements, enhanced team collaboration, and greater customer satisfaction through regular feedback incorporation."
      },
      {
        question: "Can Agile work for large enterprise projects?",
        answer: "Yes! We scale Agile using frameworks like SAFe (Scaled Agile Framework) or LeSS (Large Scale Scrum) for enterprise projects. This allows multiple teams to work cohesively on large initiatives while maintaining Agile principles of flexibility and iterative delivery."
      },
      {
        question: "How do you measure success in Agile projects?",
        answer: "We measure success through velocity (story points completed per sprint), sprint burndown charts, release burnup, code quality metrics, customer satisfaction scores, and business value delivered. Regular retrospectives help us continuously improve our processes and outcomes."
      }
    ]
  },
  {
    category: "DevOps",
    questions: [
      {
        question: "What is DevOps and how can it benefit my organization?",
        answer: "DevOps is a culture and practice that combines software development (Dev) and IT operations (Ops) to shorten development cycles, increase deployment frequency, and deliver higher quality software. Benefits include 10x faster deployment, 60% fewer failures, faster recovery, improved collaboration, and reduced costs."
      },
      {
        question: "What DevOps tools does Farmly use?",
        answer: "We use industry-leading tools including Jenkins, GitLab CI/CD, GitHub Actions for continuous integration; Docker and Kubernetes for containerization; Terraform and CloudFormation for infrastructure as code; Prometheus, Grafana, and ELK stack for monitoring; and Ansible for configuration management."
      },
      {
        question: "What is CI/CD and why is it important?",
        answer: "CI/CD (Continuous Integration/Continuous Deployment) automates the software release process. Continuous Integration automatically builds and tests code changes, while Continuous Deployment automatically releases validated changes to production. This reduces manual errors, accelerates delivery, and ensures consistent quality."
      },
      {
        question: "How does DevOps improve security (DevSecOps)?",
        answer: "DevSecOps integrates security practices into every stage of the development lifecycle. We implement automated security scanning, vulnerability testing, compliance checks, secrets management, and security-as-code practices to identify and fix security issues early, reducing risks and ensuring compliance."
      },
      {
        question: "Can you help migrate our existing infrastructure to DevOps practices?",
        answer: "Yes! We provide comprehensive DevOps transformation services including current state assessment, roadmap development, tool selection and implementation, CI/CD pipeline setup, automation of manual processes, team training, and ongoing optimization to ensure successful adoption."
      }
    ]
  },
  {
    category: "AI",
    questions: [
      {
        question: "What AI services does Farmly Software offer?",
        answer: "We offer end-to-end AI services including machine learning model development, natural language processing (NLP), computer vision, predictive analytics, recommendation systems, chatbots and virtual assistants, document intelligence, and custom AI solutions tailored to your business needs."
      },
      {
        question: "How can AI automation reduce my operational costs?",
        answer: "AI automation can reduce operational costs by 30-90% through intelligent document processing, automated customer service, predictive maintenance, inventory optimization, fraud detection, and process automation. It eliminates repetitive manual tasks, reduces errors, and enables 24/7 operations without proportional cost increases."
      },
      {
        question: "What is agentic AI and how is it different from traditional AI?",
        answer: "Agentic AI refers to autonomous AI systems that can perceive, decide, act, and learn independently. Unlike traditional AI that follows predefined rules, agentic AI can adapt to new situations, chain multiple tasks together, and achieve complex goals without constant human intervention, enabling unprecedented automation levels."
      },
      {
        question: "Do I need large amounts of data to implement AI?",
        answer: "Not necessarily. While more data generally improves AI models, we can implement AI solutions with limited data using techniques like transfer learning, data augmentation, synthetic data generation, and pre-trained models. We assess your data availability and recommend the most suitable approach."
      },
      {
        question: "How do you ensure AI model accuracy and reliability?",
        answer: "We ensure accuracy through rigorous data preparation, feature engineering, model selection, hyperparameter tuning, cross-validation, and extensive testing. We implement monitoring systems to track model performance in production, detect drift, and trigger retraining when needed to maintain reliability."
      }
    ]
  },
  {
    category: "IoT",
    questions: [
      {
        question: "What IoT solutions does Farmly Software develop?",
        answer: "We develop comprehensive IoT solutions including smart device integration, industrial IoT (IIoT) for manufacturing, asset tracking, predictive maintenance systems, environmental monitoring, smart building automation, connected healthcare devices, and agricultural IoT solutions with real-time data analytics."
      },
      {
        question: "How can IoT benefit my manufacturing business?",
        answer: "IoT transforms manufacturing through real-time production monitoring, predictive maintenance to prevent downtime, quality control automation, supply chain optimization, energy efficiency monitoring, worker safety improvements, and data-driven decision making that increases overall equipment effectiveness (OEE)."
      },
      {
        question: "What IoT platforms and protocols do you support?",
        answer: "We work with major IoT platforms including AWS IoT Core, Azure IoT Hub, Google Cloud IoT, and open-source platforms. We support protocols like MQTT, CoAP, HTTP/HTTPS, WebSocket, and industry-specific protocols, ensuring seamless integration with various devices and systems."
      },
      {
        question: "How do you ensure IoT security and data privacy?",
        answer: "We implement multi-layered security including device authentication, encrypted communication (TLS/SSL), secure boot, regular security updates, network segmentation, access control, and data encryption at rest and in transit. We follow industry standards like ISO 27001 and comply with data protection regulations."
      },
      {
        question: "Can you integrate IoT with our existing systems?",
        answer: "Yes! We specialize in IoT integration with existing ERP, MES, SCADA, and other enterprise systems. We use APIs, message brokers, and data pipelines to ensure seamless data flow between IoT devices and your legacy systems, enabling comprehensive digital transformation."
      }
    ]
  },
  {
    category: "Digital Twin",
    questions: [
      {
        question: "What is a Digital Twin and how can it benefit my business?",
        answer: "A Digital Twin is a virtual replica of a physical asset, process, or system that uses real-time data to simulate, predict, and optimize performance. Benefits include predictive maintenance, performance optimization, risk reduction, design validation, remote monitoring, and informed decision-making before physical implementation."
      },
      {
        question: "What industries can benefit from Digital Twin technology?",
        answer: "Digital Twins benefit manufacturing (production optimization), automotive (vehicle design and testing), aerospace (aircraft maintenance), energy (plant operations), healthcare (patient care modeling), smart cities (infrastructure management), and construction (building lifecycle management)."
      },
      {
        question: "How do you create a Digital Twin?",
        answer: "We create Digital Twins by collecting data from IoT sensors and existing systems, building 3D models or mathematical representations, integrating real-time data streams, implementing simulation and analytics capabilities, developing visualization dashboards, and establishing feedback loops for continuous improvement."
      },
      {
        question: "What technologies are used in Digital Twin development?",
        answer: "We use IoT for data collection, cloud platforms (AWS, Azure) for computing power, 3D modeling tools (Unity, Unreal Engine), AI/ML for predictive analytics, time-series databases for data storage, real-time data processing (Apache Kafka), and AR/VR for immersive visualization."
      },
      {
        question: "What ROI can I expect from Digital Twin implementation?",
        answer: "Organizations typically see 10-30% reduction in maintenance costs, 15-25% improvement in operational efficiency, 20-40% decrease in downtime, faster time-to-market for new products, and better resource utilization. Specific ROI depends on your industry, use case, and implementation scope."
      }
    ]
  },
  {
    category: "Cloud",
    questions: [
      {
        question: "Which cloud platform should I choose - AWS, Azure, or Google Cloud?",
        answer: "The best platform depends on your specific needs. AWS offers the most comprehensive services and global reach. Azure integrates seamlessly with Microsoft products. Google Cloud excels in data analytics and ML. For most Indian businesses, we recommend AWS or Azure due to local data centers in Mumbai and Pune, better latency, and data residency compliance."
      },
      {
        question: "What are the benefits of cloud migration?",
        answer: "Cloud migration provides scalability to handle traffic spikes, cost optimization through pay-as-you-go pricing, enhanced security and compliance, disaster recovery capabilities, global reach, automatic updates, improved collaboration, faster deployment, and reduced infrastructure management overhead."
      },
      {
        question: "How do you ensure zero downtime during cloud migration?",
        answer: "We ensure zero downtime through phased migration strategies, parallel running of old and new systems, database replication and synchronization, comprehensive testing, load balancing, gradual traffic shifting, rollback plans, and 24/7 monitoring during the migration process."
      },
      {
        question: "What is cloud-native architecture and why is it important?",
        answer: "Cloud-native architecture uses microservices, containers, orchestration (Kubernetes), and DevOps practices to build scalable, resilient applications. It enables faster development, easier scaling, better fault isolation, technology flexibility, and optimal use of cloud resources, making applications more reliable and cost-effective."
      },
      {
        question: "How do you optimize cloud costs?",
        answer: "We optimize costs through right-sizing resources, using reserved instances and savings plans, implementing auto-scaling, leveraging spot instances for non-critical workloads, optimizing storage tiers, eliminating unused resources, implementing cost monitoring and alerts, and continuous review and optimization."
      }
    ]
  }
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SkipToContent />
      <Header />
      <main id="main-content" role="main" className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
                <HelpCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Comprehensive FAQ</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our services, technologies, and methodologies
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-16">
              {faqCategories.map((category, categoryIdx) => (
                <div key={categoryIdx} className="space-y-6">
                  <div className="flex items-center gap-3 mb-8">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <h2 className="text-3xl font-bold text-foreground">
                      {category.category}
                    </h2>
                  </div>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, faqIdx) => (
                      <AccordionItem
                        key={faqIdx}
                        value={`item-${categoryIdx}-${faqIdx}`}
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Still have questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team is here to help you with any inquiries about our services
              </p>
              <button
                onClick={() => {
                  window.location.href = '/#contact';
                }}
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-foreground bg-gradient-primary rounded-lg hover:opacity-90 transition-opacity"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MotionToggle />
    </div>
  );
};

export default FAQPage;

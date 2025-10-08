import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Zap, TrendingUp, Shield, Cpu, Bot } from "lucide-react";

const AIOptimization = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Analytics",
      description: "AI-powered insights to understand user behavior and optimize your digital presence."
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Automated workflows that save time and reduce manual tasks through intelligent systems."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "AI algorithms continuously monitor and improve your software performance."
    },
    {
      icon: Shield,
      title: "Predictive Security",
      description: "Advanced AI security measures that predict and prevent potential threats."
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      description: "Custom ML models that learn from your data to provide personalized experiences."
    },
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Intelligent conversational interfaces that enhance customer engagement."
    }
  ];

  return (
    <section id="ai-optimization" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI-Powered Solutions
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Leverage the power of artificial intelligence to transform your business operations 
            and create intelligent, adaptive solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-border hover:shadow-custom-md transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIOptimization;
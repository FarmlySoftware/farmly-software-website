import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServiceOverview from "@/components/sections/ServiceOverview";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
import SEOOptimization from "@/components/sections/SEOOptimization";
import ProcessExcellence from "@/components/sections/ProcessExcellence";
import SkipToContent from "@/components/ui/skip-to-content";
import MotionToggle from "@/components/ui/motion-toggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SkipToContent />
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <ServiceOverview />
        <About />
        <SEOOptimization />
        <ProcessExcellence />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MotionToggle />
    </div>
  );
};

export default Index;

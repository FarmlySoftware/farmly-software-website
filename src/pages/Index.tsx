import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServiceOverview from "@/components/sections/ServiceOverview";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";
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
        <WhyChooseUs />
        <Services />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MotionToggle />
    </div>
  );
};

export default Index;

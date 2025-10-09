import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import ProcessExcellence from "@/components/sections/ProcessExcellence";
import AIOptimization from "@/components/sections/AIOptimization";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <ProcessExcellence />
        <AIOptimization />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

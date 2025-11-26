import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import SkipToContent from "@/components/ui/skip-to-content";
import MotionToggle from "@/components/ui/motion-toggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SkipToContent />
      <Header />
      <main id="main-content" role="main">
      <Hero />
      <Services />
      <About />
      <Contact />
      </main>
      <Footer />
      <MotionToggle />
    </div>
  );
};

export default Index;

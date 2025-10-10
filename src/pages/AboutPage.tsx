import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import SkipToContent from "@/components/ui/skip-to-content";
import MotionToggle from "@/components/ui/motion-toggle";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SkipToContent />
      <Header />
      <main id="main-content" role="main" className="page-top-spacing">
        <About />
      </main>
      <Footer />
      <MotionToggle />
    </div>
  );
};

export default AboutPage;

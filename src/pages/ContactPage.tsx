import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import SkipToContent from "@/components/ui/skip-to-content";
import MotionToggle from "@/components/ui/motion-toggle";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SkipToContent />
      <Header />
      <main id="main-content" role="main" className="page-top-spacing">
        <Contact />
      </main>
      <Footer />
      <MotionToggle />
    </div>
  );
};

export default ContactPage;

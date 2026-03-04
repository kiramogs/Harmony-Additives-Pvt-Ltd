import ScrollAnimation from "@/components/ScrollAnimation";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main>
      {/* Phase 1: Scroll-driven frame animation */}
      <ScrollAnimation />

      {/* Phase 2: Glassmorphism content sections */}
      <div id="content-start" className="content-wrapper">
        <Navbar />

        {/* Ambient glassmorphism background blobs */}
        <div className="ambient-bg" aria-hidden="true">
          <div className="ambient-blob blob-1" />
          <div className="ambient-blob blob-2" />
          <div className="ambient-blob blob-3" />
          <div className="ambient-blob blob-4" />
        </div>

        <AboutSection />
        <IndustriesSection />
        <ProductsSection />
        <ContactSection />
      </div>

      {/* AI Chatbot Widget */}
      <Chatbot />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Chatbot from "@/components/Chatbot";
import ParticleField from "@/components/ParticleField";

export default function Home() {
  return (
    <main>
      <div id="content-start" className="content-wrapper">
        <Navbar />

        {/* Ambient glassmorphism background blobs */}
        <div className="ambient-bg" aria-hidden="true">
          <div className="ambient-blob blob-1" />
          <div className="ambient-blob blob-2" />
          <div className="ambient-blob blob-3" />
          <div className="ambient-blob blob-4" />
        </div>

        {/* Floating particle background */}
        <ParticleField />

        {/* Lightweight static hero (replaces the 87-frame scroll animation) */}
        <Hero />

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

import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Header } from "@/components/Header";
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { ServicesIT } from "@/components/ServicesIT";
import { WebsiteCreation } from "@/components/WebsiteCreation";
import { AIChatbots } from "@/components/AIChatbots";

import { LocalSEO } from "@/components/LocalSEO";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";

import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { RemoteAccessModal } from "@/components/RemoteAccessModal";
import { ANYDESK_URL } from "@/lib/contact";

const Index = () => {
  const [remoteOpen, setRemoteOpen] = useState(false);
  useReveal();

  const handleRemoteAccess = () => {
    // Open AnyDesk download in a new tab
    window.open(ANYDESK_URL, "_blank", "noopener,noreferrer");
    // Show instructions modal
    setTimeout(() => setRemoteOpen(true), 300);
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header onRemoteAccess={handleRemoteAccess} />
      <main className="pt-8">
        <Hero />
        <ServicesIT />
        <WebsiteCreation />
        <AIChatbots />
        
        <LocalSEO />
        <HowItWorks />
        <About />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <RemoteAccessModal open={remoteOpen} onOpenChange={setRemoteOpen} />
    </div>
  );
};

export default Index;

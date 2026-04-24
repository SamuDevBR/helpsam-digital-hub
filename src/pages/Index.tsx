import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Differentials } from "@/components/Differentials";
import { ServicesIT } from "@/components/ServicesIT";
import { Automation } from "@/components/Automation";
import { WebsiteCreation } from "@/components/WebsiteCreation";
import { AIChatbots } from "@/components/AIChatbots";
import { Audience } from "@/components/Audience";
import { LocalSEO } from "@/components/LocalSEO";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { RemoteAccessModal } from "@/components/RemoteAccessModal";
import { ANYDESK_URL } from "@/lib/contact";

const Index = () => {
  const [remoteOpen, setRemoteOpen] = useState(false);

  const handleRemoteAccess = () => {
    // Open AnyDesk download in a new tab
    window.open(ANYDESK_URL, "_blank", "noopener,noreferrer");
    // Show instructions modal
    setTimeout(() => setRemoteOpen(true), 300);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onRemoteAccess={handleRemoteAccess} />
      <main>
        <Hero />
        <Differentials />
        <ServicesIT />
        <Automation />
        <WebsiteCreation />
        <AIChatbots />
        <Audience />
        <LocalSEO />
        <HowItWorks />
        <About />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <RemoteAccessModal open={remoteOpen} onOpenChange={setRemoteOpen} />
    </div>
  );
};

export default Index;

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProjectSection from "@/components/ProjectSection";
import Amenities from "@/components/Amenities";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustStrip />
      <ProjectSection />
      <Amenities />
      {/* <Testimonials /> */}
      <LeadForm />
      <Footer />
    </>
  );
}

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";

const ProjectSection = dynamic(() => import("@/components/ProjectSection"));
const Amenities = dynamic(() => import("@/components/Amenities"));
// const Testimonials = dynamic(() => import("@/components/Testimonials"));
const LeadForm = dynamic(() => import("@/components/LeadForm"));
const Footer = dynamic(() => import("@/components/Footer"));

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

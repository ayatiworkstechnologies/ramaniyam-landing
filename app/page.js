import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";

const ProjectSection = dynamic(() => import("@/components/ProjectSection"));
const Amenities = dynamic(() => import("@/components/Amenities"));
// const Testimonials = dynamic(() => import("@/components/Testimonials"));
const LeadForm = dynamic(() => import("@/components/LeadForm"));

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProjectSection />
      <Amenities />
      {/* <Testimonials /> */}
      <LeadForm />
    </>
  );
}

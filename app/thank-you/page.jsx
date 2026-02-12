import ThankYouContent from "@/components/ThankYouContent";

import { Suspense } from "react";

export const metadata = {
  title: "Thank You | Ramaniyam Real Estates",
  description:
    "Discover premium residential apartments in Adyar, Anna Nagar, Mylapore and prime Chennai locations. 35+ years legacy. RERA approved projects.",
};

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}

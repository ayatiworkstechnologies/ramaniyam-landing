import ThankYouContent from "@/components/ThankYouContent";
import Script from "next/script";

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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-17942239966"
      />
      <Script id="google-ads-conversion">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17942239966');
        `}
      </Script>
      <ThankYouContent />
    </Suspense>
  );
}

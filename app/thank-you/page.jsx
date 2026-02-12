import ThankYouContent from "@/components/ThankYouContent";
import { Suspense } from "react";
import Script from "next/script";

export const metadata = {
  title: "Thank You | Ramaniyam Real Estates",
  description:
    "Discover premium residential apartments in Adyar, Anna Nagar, Mylapore and prime Chennai locations. 35+ years legacy. RERA approved projects.",
};

export default function ThankYouPage() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17942239966"
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17942239966');
          `}
      </Script>
      <Suspense fallback={<div className="p-20 text-center">Loading...</div>}>
        <ThankYouContent />
      </Suspense>
    </>
  );
}

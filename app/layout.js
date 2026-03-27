import dynamic from "next/dynamic";
import { Catamaran } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";

import GoogleAnalytics from "@/components/GoogleAnalytics";
const Footer = dynamic(() => import("@/components/Footer"));
import Header from "@/components/Header";

const catamaran = Catamaran({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cata",
  display: "swap",
});

export const metadata = {
  title: "Premium 1, 2, 3 & 4 BHK Flats for Sale in Chennai | Ramaniyam Projects",
  description:
    "Looking for 1, 2, 3 & 4 BHK apartments for sale in Chennai? Explore Ramaniyam's premium flats across prime locations including Anna Nagar & Adyar. Book a site visit today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={catamaran.variable}>

      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-X9BL4WSL2H"
      />

      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-X9BL4WSL2H');
        `}
      </Script>

      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5SS3HJQV');
        `}
      </Script>

      <body>

        {/* GTM Noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5SS3HJQV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Tracks GA4 page_view on every AJAX/client-side route change */}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>

        <Header />
        {children}
        <Footer />

      </body>
    </html>
  );
}
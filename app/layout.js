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
      <head>
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

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e);
            t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
            }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1518971539657058');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

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

        {/* Meta Pixel Noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1518971539657058&ev=PageView&noscript=1"
            alt=""
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
import dynamic from "next/dynamic";
import { Catamaran } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const Footer = dynamic(() => import("@/components/Footer"));
import Header from "@/components/Header";

const catamaran = Catamaran({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cata",
  display: "swap",
});

export const metadata = {
  title: "Premium 2, 3 & 4 BHK Flats for Sale in Chennai | Ramaniyam Projects",
  description:
    "Looking for 2, 3 & 4 BHK apartments for sale in Chennai? Explore Ramaniyam's premium flats across prime locations including Anna Nagar & Adyar. Book a site visit today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={catamaran.variable}>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T2CTB9FR');`}
      </Script>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T2CTB9FR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { Catamaran } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
      <body>
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
        {children}
      </body>
    </html>
  );
}

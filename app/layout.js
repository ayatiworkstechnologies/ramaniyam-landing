import { Catamaran } from "next/font/google";
import "./globals.css";

const catamaran = Catamaran({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cata",
  display: "swap",
});


export const metadata = {
  title: "Ramaniyam Real Estates | Premium Apartments in Chennai",
  description: "Discover premium residential apartments in Adyar, Anna Nagar, Mylapore and prime Chennai locations. 35+ years legacy. RERA approved projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={catamaran.variable}>
      <body      >
        {children}
      </body>
    </html>
  );
}

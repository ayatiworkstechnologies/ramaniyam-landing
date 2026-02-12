import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Facebook,
  Instagram,
  Youtube,
  ChevronUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="text-white relative"
      style={{ backgroundColor: "var(--primary)" }}
    >
      {/* MAIN FOOTER */}
      <div className="container py-20 grid md:grid-cols-4 gap-14">
        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold mb-5">Ramaniyam Real Estates</h3>

          <div className="text-sm text-white/80 leading-relaxed mb-6">
            A trusted name in premium residential developments across Chennai
            for over three decades. Built with quality, integrity and timeless
            design.
          </div>

          {/* SOCIAL */}
          {/* <div className="flex gap-4">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white hover:text-black transition"
              >
                <Icon size={17} />
              </a>
            ))}
          </div> */}
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>

          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", href: "#home" },
              { name: "Projects", href: "#projects" },
              { name: "Amenities", href: "#amenities" },
              { name: "Enquire Now", href: "#lead" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition"
                >
                  <ArrowUpRight className="opacity-60" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="md:col-span-2">
          <h4 className="font-semibold mb-6 text-lg">Contact Us</h4>

          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 text-white" />
              <span className="text-white/80">
                Ramaniyam Real Estates <br />
                14/67, 3rd Main Rd, Gandhi Nagar, Adyar, Chennai – 600020
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Phone className="mt-1 text-white" />
              <div className="flex flex-col">
                <a href="tel:+914443447500" className="hover:underline">
                  +91 44 4344 7500
                </a>
                <a href="tel:+919710928855" className="hover:underline">
                  +91 97109 28855
                </a>
                <a href="tel:+917299922617" className="hover:underline">
                  +91 72999 22617
                </a>
              </div>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="text-white" />
              <a href="mailto:sales@ramaniyam.com" className="hover:underline">
                sales@ramaniyam.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/20" />

      {/* BOTTOM BAR (Darker Red Shade) */}
      <div
        className="py-6 text-sm"
        style={{ backgroundColor: "var(--primary)" }}
      >
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-white/80">
          <span>
            © {new Date().getFullYear()} Ramaniyam Real Estates. All rights
            reserved.
          </span>

          <span className="text-xs tracking-wide uppercase">
            RERA Approved Projects • Premium Living
          </span>
        </div>
      </div>

      {/* BACK TO TOP */}
      <a
        href="#home"
        className="fixed right-6 bottom-6 w-12 h-12 rounded-full flex items-center justify-center shadow-xl bg-white text-black transition hover:scale-110"
      >
        <ChevronUp size={20} />
      </a>
    </footer>
  );
}

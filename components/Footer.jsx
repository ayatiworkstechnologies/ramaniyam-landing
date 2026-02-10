import Link from "next/link";
import { FiMapPin, FiPhone, FiMail, FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        {/* BRAND */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            Ramaniyam Real Estates
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            A trusted name in premium residential developments across Chennai
            for over three decades. Built with quality, integrity, and timeless
            design.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
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
                  className="inline-flex items-center gap-2 hover:text-white transition"
                >
                  {link.name}
                  <FiArrowUpRight className="text-sm opacity-60" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-0.5 text-orange-500" />
              Ramaniyam Real Estates, 14/67, 3rd Main Rd, Gandhi Nagar, Adyar,
              Chennai 600 020
            </li>

            <li className="flex items-center gap-2">
              <FiPhone className="text-orange-500" />
              <a
                href="tel:+919999999999"
                className="hover:text-white transition"
              >
                +91 4443447500 +91 9710928855 +91 7299922617
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FiMail className="text-orange-500" />
              <a
                href="mailto:sales@ramaniyam.com"
                className="hover:text-white transition"
              >
                sales@ramaniyam.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ramaniyam Real Estates. All rights
        reserved.
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Amenities", href: "#amenities", id: "amenities" },
    { name: "Contact", href: "#lead", id: "lead" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-md py-2"
          : "bg-white/90 backdrop-blur py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link href="#home" className="flex items-center gap-2">
          <Image
            src="/logo.svg"   // place logo in public/images
            alt="Ramaniyam Logo"
            width={180}
            height={80}
            priority
            className="h-16 w-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`font-medium transition ${
                active === link.id
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#lead"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg font-semibold transition"
          >
            Enquire Now
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 border-b transition ${
                active === link.id
                  ? "text-orange-500 font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#lead"
            onClick={() => setOpen(false)}
            className="block text-center bg-orange-500 text-white py-4 font-semibold"
          >
            Enquire Now
          </Link>
        </div>
      )}
    </header>
  );
}

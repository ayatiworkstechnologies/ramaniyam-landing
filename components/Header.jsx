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
      setScrolled(window.scrollY > 30);

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
          ? "bg-white shadow-md py-2"
          : "bg-white/95 backdrop-blur py-4"
      }`}
    >
      <div className="container flex items-center justify-between">

        {/* LOGO */}
        <Link href="#home" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Ramaniyam Logo"
            width={170}
            height={60}
            priority
            className="h-14 w-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`relative font-medium transition ${
                active === link.id
                  ? "text-[var(--primary)]"
                  : "text-gray-700 hover:text-[var(--primary)]"
              }`}
            >
              {link.name}

              {/* Active underline */}
              {active === link.id && (
                <span className="absolute -bottom-1 left-0 w-full "></span>
              )}
            </Link>
          ))}

          {/* CTA BUTTON */}
          <Link href="#lead" className="btn-primary">
            Enquire Now
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-[var(--primary)]"
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
      <div
        className={`md:hidden bg-white border-t transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`block px-6 py-4 border-b transition ${
              active === link.id
                ? "text-[var(--primary)] font-semibold"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            {link.name}
          </Link>
        ))}

        <div className="p-6">
          <Link
            href="#lead"
            onClick={() => setOpen(false)}
            className="btn-primary w-full block text-center"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </header>
  );
}

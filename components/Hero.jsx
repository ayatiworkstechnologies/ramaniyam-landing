"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LeadFormComponent from "./Form";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6 }}
        className="absolute inset-0 bg-gray-900"
      >
        <Image
          src="/banner-2.png"
          alt="Luxury Apartments"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* Content */}
      <div className="relative container py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-center text-white">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-6 text-xs tracking-[0.25em] uppercase font-semibold bg-white/10 px-4 py-2 rounded-full backdrop-blur">
            Trusted Since 1986
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Find Your Perfect Home with{" "}
            <span
              className="font-extrabold text-white px-3 rounded-md inline-block leading-tight"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Ramaniyam
            </span>
          </h1>

          <div className="text-lg md:text-xl text-white/80 mb-12 max-w-xl">
            Discover premium residential projects across Chennai’s most
            sought-after locations. RERA approved. Designed with integrity and
            timeless architecture.
          </div>

          {/* FEATURE HIGHLIGHTS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["35+ Years Legacy", "Ready & Upcoming", "2, 3 & 4 BHK"].map(
              (item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.2 }}
                  className="bg-white/10 backdrop-blur-xl text-white border border-white/10 px-5 py-4 rounded-xl text-sm font-medium"
                >
                  ✓ {item}
                </motion.div>
              ),
            )}
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-red-800"
        >
          <LeadFormComponent />
        </motion.div>
      </div>
    </section>
  );
}

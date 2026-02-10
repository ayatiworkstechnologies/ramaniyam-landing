import Image from "next/image";
import LeadFormComponent from "./Form";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/banner.jpg" // optional
          alt="Luxury Apartments"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 text-orange-400 font-semibold tracking-wide uppercase text-sm">
            Trusted Since 1986
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
            Find Your Perfect Home with{" "}
            <span className="text-orange-400">Ramaniyam</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
            Discover 15 premium residential projects across Chennai’s
            most sought-after locations. RERA approved. Built to last.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-orange-400">✔</span>
              35+ Years Legacy
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-400">✔</span>
              Ready & Upcoming
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-400">✔</span>
              2, 3 & 4 BHK
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white/95 backdrop-blur-xl text-gray-800 rounded-2xl shadow-2xl">
         <LeadFormComponent />
        </div>
      </div>
    </section>
  );
}

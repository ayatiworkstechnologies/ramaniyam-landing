"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, FileText, Phone } from "lucide-react";
import { useState } from "react";
import BrochureModal from "./BrochureModal";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-[420px] bg-white">

        {/* IMAGE */}
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-700"
        />

        {/* SOFT WHITE GRADIENT (BRIGHT) */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent"></div> */}

        {/* LOCATION BADGE */}
        <div className="absolute top-5 left-5 bg-white/80 backdrop-blur-md text-[var(--primary)] px-4 py-1.5 rounded-full flex items-center gap-2 text-sm font-medium shadow-sm">
          <MapPin className="w-4 h-4" />
          {project.location}
        </div>

        {/* BOTTOM CONTENT */}
        <div className="absolute bottom-0 left-0 w-full p-6">

          <div className="bg-white/30 backdrop-blur-xl rounded-2xl p-5 shadow-md">

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {project.name}
            </h3>

            <div className="flex gap-3">

              {/* BROCHURE BUTTON */}
              <button
                onClick={() => setOpen(true)}
                className="flex-1 flex items-center justify-center gap-2 
                           border border-[var(--primary)] 
                           text-[var(--primary)] 
                           py-2.5 rounded-xl font-semibold 
                           transition-all duration-300
                           hover:bg-[var(--primary)] 
                           hover:text-white
                           hover:shadow-md"
              >
                <FileText className="w-4 h-4" />
                Brochure
              </button>

              {/* ENQUIRE BUTTON */}
              <Link
                href="#lead"
                className="flex-1 flex items-center justify-center gap-2 
                           py-2.5 rounded-xl font-semibold text-white
                           transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: "var(--primary)" }}
              >
                <Phone className="w-4 h-4" />
                Enquire
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <BrochureModal
          project={project}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

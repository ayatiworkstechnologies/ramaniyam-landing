"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FileText, Phone } from "lucide-react";
import BrochureModal from "./BrochureModal";

export default function ProjectCard({ project, priority = false }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full border border-gray-100 group">
        {/* IMAGE CONTAINER WITH PADDING */}
        <div className="p-3 pb-0 flex-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-gray-50">
            <Image
              src={project.image}
              alt={project.name}
              fill
              priority={priority}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={90}
              className="object-cover group-hover:scale-110 transition duration-700"
            />
          </div>
        </div>

        {/* FOOTER - LIGHT PREMIUM DESIGN */}
        <div className="bg-gray-50 p-6 min-h-[160px] flex flex-col justify-between border-t border-gray-100">
          <div className="mb-5">
            <h3 className="text-lg md:text-xl font-extrabold uppercase tracking-widest text-gray-900 leading-tight mb-1.5 line-clamp-1">
              {project.name}
            </h3>
            <p className="text-xs text-gray-400 font-bold tracking-widest line-clamp-1 uppercase">
              {project.location}
            </p>
          </div>

          <div className="flex gap-4 mt-auto">
            <button
              onClick={() => setOpen(true)}
              className="flex-1 bg-white border border-gray-200 text-gray-700 py-3.5 rounded-xl text-lg font-extrabold shadow-sm transition-all duration-300 hover:bg-gray-100 hover:border-gray-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2.5"
            >
              <FileText size={18} className="text-[#8B2323]" />
              Brochure
            </button>
            <Link
              href="#lead"
              className="flex-1 bg-[#8B2323] text-white py-3.5 rounded-xl text-lg font-extrabold shadow-sm transition-all duration-300 hover:bg-[#721c1c] hover:-translate-y-0.5 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2.5"
            >
              <Phone size={18} />
              Enquire
            </Link>
          </div>
        </div>
      </div>

      {/* MODAL (only if brochure exists) */}
      {open && project.brochure && (
        <BrochureModal project={project} onClose={() => setOpen(false)} />
      )}
    </>
  );
}

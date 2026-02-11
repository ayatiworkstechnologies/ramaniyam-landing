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
      <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-200 ">

        {/* IMAGE */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />

          {/* LOCATION BADGE */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-2 text-sm font-medium shadow">
            <MapPin
              className="w-4 h-4"
              style={{ color: "var(--primary)" }}
            />
            {project.location}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-1">
            {project.name}
          </h3>

          <p className="text-gray-600 text-sm mb-3">
            {project.type || "Premium Residential Project"}
          </p>

          <p className="text-lg font-semibold mb-5">
            {project.price}
          </p>

          {/* ACTIONS */}
          <div className="flex gap-3">

            {/* BROCHURE BUTTON (OPEN MODAL) */}
            <button
              onClick={() => setOpen(true)}
              className="flex-1 btn-outline inline-flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Brochure
            </button>

            {/* ENQUIRE BUTTON */}
            <Link
              href="#lead"
              className="flex-1 btn-primary inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Enquire
            </Link>
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

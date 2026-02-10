import Image from "next/image";
import Link from "next/link";
import { MapPin, FileText, Phone } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border">

      {/* IMAGE */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* LOCATION BADGE */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium">
          <MapPin className="w-4 h-4 text-orange-500" />
          {project.location}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{project.name}</h3>

        <p className="text-gray-600 text-sm mb-3">
          {project.type || "Premium Residential Project"}
        </p>

        <p className="text-lg font-semibold text-gray-900 mb-4">
          {project.price}
        </p>

        {/* ACTIONS */}
        <div className="flex gap-3">
          <Link
            href={project.brochure}
            target="_blank"
            className="flex-1 inline-flex items-center justify-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-2.5 rounded-lg font-semibold transition"
          >
            <FileText className="w-4 h-4" />
            Brochure
          </Link>

          <Link
            href="#lead"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-lg font-semibold transition"
          >
            <Phone className="w-4 h-4" />
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}

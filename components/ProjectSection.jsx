import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-orange-500 font-semibold uppercase tracking-wider text-sm mb-3">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Explore Our Premium Projects
          </h2>
          <p className="text-gray-600">
            Choose from ready-to-move and upcoming residential projects
            in Chennai’s most desirable locations.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

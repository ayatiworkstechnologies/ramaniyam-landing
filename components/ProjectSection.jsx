import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="section bg-white"
    >
      <div className="container">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-block font-semibold uppercase tracking-widest text-sm mb-4"
            style={{ color: "var(--primary)" }}
          >
            Our Portfolio
          </span>

          <h2 className="mb-6">
            Explore Our Premium Projects
          </h2>

          <p className="text-gray-600 font-medium">
            Choose from ready-to-move and upcoming residential projects
            in Chennai’s most desirable locations, thoughtfully designed
            for modern living.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

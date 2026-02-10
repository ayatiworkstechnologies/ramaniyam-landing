import projects from "@/data/projects";

export function getUniqueLocations() {
  const locations = projects.map((p) => p.location);
  return [...new Set(locations)].sort();
}

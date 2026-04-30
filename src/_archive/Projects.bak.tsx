import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projectsData";

export default function Projects() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6">Mes Projets</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

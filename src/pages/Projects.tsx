import PageHeader from '../components/PageHeader';
import Projects from '../components/Projects';
import { projectsData } from '../data/projectsData';

const ProjectsPage = () => (
  <div className="min-h-dvh bg-ink-950">
    <PageHeader
      tone="violet"
      title="Projets"
      subtitle={`${projectsData.length} projets : data et IA, stages en entreprise et projets du BTS SIO. Chaque fiche détaille le contexte, mon rôle et les technologies.`}
    />
    <Projects />
  </div>
);

export default ProjectsPage;

import ProjectCard from "./ProjectCard";

function Projects({ projects }) {
  return (
    <section>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
        />
      ))}
    </section>
  );
}

export default Projects;
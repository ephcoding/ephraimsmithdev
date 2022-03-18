import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
  return (
    <ul className="grid gap-8 grid-cols-1 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectItem key={project.title} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;

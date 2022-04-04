import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
	return (
		<ul className='grid gap-8 grid-col-1 sm:grid-cols-2 md:grid-cols-3'>
			{projects.map(project => (
				<ProjectItem key={project.title} project={project} />
			))}
		</ul>
	);
};

export default ProjectList;

import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
	return (
		<ul className='border border-blue-600'>
			{projects.map(project => (
				<ProjectItem key={project.title} project={project} />
			))}
		</ul>
	);
};

export default ProjectList;

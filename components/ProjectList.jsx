import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {
	return (
		<ul className='border border-blue-600'>
			{projects.map(project => (
				<ProjectListItem key={project.title} project={project} />
			))}
		</ul>
	);
};

export default ProjectList;

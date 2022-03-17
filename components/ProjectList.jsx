import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {
	return (
		<ul className=''>
			{projects.map(project => (
				<ProjectListItem key={project.title} project={project} />
			))}
		</ul>
	);
};

export default ProjectList;

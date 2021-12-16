import FccProjectLink from "@/components/FccProjectLink";

const ProjectCard = ({ projectMeta }) => {
	const { title, certificate } = projectMeta;
	const isJSProject = certificate === "JAVASCRIPT ALGORITHMS & DATA STRUCTURES";
	const classes = isJSProject ? "card-content js" : "card-content";

	console.log(isJSProject);

	return (
		<li className='fcc-projects__card'>
			<div className={classes}>
				<h3>{certificate}</h3>
				<h2>{title}</h2>
			</div>
			<FccProjectLink projectMeta={projectMeta} />
		</li>
	);
};

export default ProjectCard;

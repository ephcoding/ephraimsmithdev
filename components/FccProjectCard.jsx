import FccProjectLink from "@/components/FccProjectLink";

const FccProjectCard = ({ projectMeta }) => {
	const { title, certificate } = projectMeta;
	return (
		<li className='fcc-projects__card'>
			<div className='card-content'>
				<h3>{certificate}</h3>
				<h2>{title}</h2>
			</div>
			<FccProjectLink projectMeta={projectMeta} />
		</li>
	);
};

export default FccProjectCard;

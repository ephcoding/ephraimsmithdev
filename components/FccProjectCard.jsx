import FccProjectLink from "@/components/FccProjectLink";

const FccProjectCard = ({ projectMeta }) => {
	const { title, certificate } = projectMeta;
	return (
		<li className='fcc-projects__card'>
			<div className='card-content'>
				<h2>{title}</h2>
				<h3>{certificate}</h3>
			</div>
			<FccProjectLink projectMeta={projectMeta} />
		</li>
	);
};

export default FccProjectCard;

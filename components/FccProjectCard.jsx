import FccProjectLink from "@/components/FccProjectLink";

const FccProjectCard = ({ projectMeta }) => {
	const { title } = projectMeta;
	return (
		<li>
			<div className='fcc-projects__card'>
				<h2>{title}</h2>
				<FccProjectLink projectMeta={projectMeta} />
			</div>
		</li>
	);
};

export default FccProjectCard;

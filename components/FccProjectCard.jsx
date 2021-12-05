import FccProjectLink from "@/components/FccProjectLink";

const FccProjectCard = ({ projectMeta }) => {
	return (
		<li>
			<div className='fcc-projects__card'>
				<FccProjectLink projectMeta={projectMeta} />
			</div>
		</li>
	);
};

export default FccProjectCard;

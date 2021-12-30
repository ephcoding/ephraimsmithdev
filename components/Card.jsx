import CardLinks from "@/components/CardLinks";

const Card = ({ cardMeta }) => {
	const { bgImgClass, description, focusArea, name, urls } = cardMeta;

	return (
		<li className={`card ${bgImgClass}`}>
			<div className='card-text'>
				<h2>{name}</h2>
				<p>Focus: {focusArea}</p>
				<p>{description}</p>
			</div>
			<CardLinks links={urls} />
		</li>
	);
};

export default Card;

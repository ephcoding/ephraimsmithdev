import CardLinks from "@/components/CardLinks";

const Card = ({ cardMeta }) => {
	const { bgImgClass, description, focusArea, name, tags, urls } = cardMeta;

	const cardTags = tags.map(tag => (
		<span className='tag' key={tag}>
			{tag}
		</span>
	));

	return (
		<li className={`card ${bgImgClass}`}>
			<div className='card-text'>
				<h2>{name}</h2>
				<p className='project-description'>{description}</p>
				<div className='tags'>{cardTags}</div>
			</div>
			<CardLinks links={urls} />
		</li>
	);
};

export default Card;

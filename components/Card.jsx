import CardLinks from "@/components/CardLinks";
import CardTags from "@/components/CardTags";

const Card = ({ card }) => {
	const { bgImgClass, description, name, tags, urls } = card;

	return (
		<li className={`card ${bgImgClass}`}>
			<div className='card__content'>
				<div className='card__text'>
					<h2>{name}</h2>
					<p className='card__description'>{description}</p>
				</div>
				<CardLinks links={urls} />
			</div>
			<CardTags cardTags={tags} />
		</li>
	);
};

export default Card;

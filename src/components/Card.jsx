import CardLinks from "components/CardLinks";
import CardTags from "components/CardTags";

const Card = ({ cardMeta }) => {
	const { bgImgClass, description, name, tags, urls } = cardMeta;

	return (
		<li ={`card ${bgImgClass}`}>
			<div>
				<div>
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
				<CardLinks links={urls} />
			</div>
			<CardTags cardTags={tags} />
		</li>
	);
};

export default Card;

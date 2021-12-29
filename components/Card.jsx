import CardLinks from "@/components/CardLinks";

const Card = ({ cardMeta }) => {
	const { description, name, URLs } = cardMeta;

	return (
		<li className='card'>
			<h2>{name}</h2>
			<p>{description}</p>
			<CardLinks links={URLs} />
		</li>
	);
};

export default Card;

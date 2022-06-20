const CardTags = ({ cardTags }) => {
	const tags = cardTags.map((tag) => <li key={tag}>{tag}</li>);

	return <ul>{tags}</ul>;
};

export default CardTags;

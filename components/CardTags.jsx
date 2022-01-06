const CardTags = ({ cardTags }) => {
	const tags = cardTags.map(tag => (
		<li className='card__tag' key={tag}>
			{tag}
		</li>
	));

	return <ul className='card__tags'>{tags}</ul>;
};

export default CardTags;

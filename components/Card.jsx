import CardLinks from "@/components/CardLinks";

const Card = ({ cardMeta }) => {
	const { assets, bgImgClass, description, focusArea, name, tags, urls } =
		cardMeta;

	const cardTags = tags.map(tag => (
		<span className='tag' key={tag}>
			{tag}
		</span>
	));
	const assetLogos = assets.map(srcUri => {
		return srcUri ? (
			<img src={srcUri} alt={srcUri} key={srcUri} className='asset' />
		) : null;
	});

	return (
		<li className={`card ${bgImgClass}`}>
			<div className='card-text'>
				<h2>{name}</h2>
				<p className='project-description'>{description}</p>
				<div className='text-footer'>
					<div className='tags'>{cardTags}</div>
					<div>
						<span>{assetLogos.length ? "powered by: " : null}</span>
						<div className='assets'>{assetLogos}</div>
					</div>
				</div>
			</div>
			<CardLinks links={urls} />
		</li>
	);
};

export default Card;

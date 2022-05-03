import Link from "next/link";

export const ArticlePreviewCard = ({ article }) => {
	const {
		slug,
		frontmatter: { cover_image, title, sub_title, date },
	} = article;

	return (
		<div className="p-4 bg-[url('/bg_mars-glowing.jpg')] bg-center bg-cover">
			<h3>Title: {title}</h3>
			<p>Slug: {slug}</p>
			<div className='card_header'>
				<Link href={`/articles/${article.slug}`} passHref>
					<h3 className='card_title'>
						<a className='link'>{article.frontmatter.title}</a>
					</h3>
				</Link>
				<h2 className='card_subtitle'>{article.frontmatter.subtitle}</h2>
			</div>
			<p className='card__excerpt'>{article.frontmatter.excerpt}</p>
			<div className='card_footer'>
				<span className='card_date'>{article.frontmatter.date}</span>
				<Link href={`/articles/${article.slug}`} passHref>
					<a className='btn_read-article'>Read</a>
				</Link>
			</div>
		</div>
	);
};

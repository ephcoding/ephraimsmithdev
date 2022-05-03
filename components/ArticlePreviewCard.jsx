import Link from "next/link";

export const ArticlePreviewCard = ({ article }) => {
	return (
		<div className='card'>
			<div className='card_header'>
				<Link href={`/articles/${article.slug}`} passHref>
					<h3 className='card_title'>
						<a className='link'>{article.frontmatter.title}</a>
					</h3>
				</Link>
				<h2 className='card_subtitle'>{article.frontmatter.subtitle}</h2>
			</div>
			{/* <p className='card__excerpt'>{article.frontmatter.excerpt}</p> */}
			<div className='card_footer'>
				<span className='card_date'>{article.frontmatter.date}</span>
				<Link href={`/articles/${article.slug}`} passHref>
					<a className='btn_read-article'>Read</a>
				</Link>
			</div>
		</div>
	);
};

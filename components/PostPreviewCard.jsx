import Link from "next/link";

export const PostPreviewCard = ({ post }) => {
	return (
		<div id='PostPreviewCard' className='card'>
			<div className='card_header'>
				<Link href={`/articles/${post.slug}`} passHref>
					<h3 className='card_title'>
						<a className='link'>{post.frontmatter.title}</a>
					</h3>
				</Link>
				<h2 className='card_subtitle'>{post.frontmatter.subtitle}</h2>
			</div>
			{/* <p className='card__excerpt'>{post.frontmatter.excerpt}</p> */}
			<div className='card_footer'>
				<span className='card_date'>{post.frontmatter.date}</span>
				<Link href={`/articles/${post.slug}`} passHref>
					<a className='btn_read-post'>Read</a>
				</Link>
			</div>
		</div>
	);
};

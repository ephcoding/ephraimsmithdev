import Link from 'next/link';

export default function PostPreviewCard({ post }) {
	return (
		<div id='PostPreviewCard' className='card'>
			<div className='card__header'>
				<Link href={`/blog/${post.slug}`}>
					<h2 className='card__title'>
						<a className='link'>{post.frontmatter.title}</a>
					</h2>
				</Link>
				<h3 className='card__subtitle'>{post.frontmatter.subtitle}</h3>
				<p className='card__date'>{post.frontmatter.date}</p>
			</div>
			<p className='card__excerpt'>{post.frontmatter.excerpt}</p>
			<p className='card__link'>
				<Link href={`/blog/${post.slug}`}>
					<a>
						READ <span className='card__link-arrows'>{`>>`}</span>
					</a>
				</Link>
			</p>
		</div>
	);
}

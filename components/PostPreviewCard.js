import Link from 'next/link';

export default function PostPreviewCard({ post }) {
	return (
		<div id='PostPreviewCard' className='card'>
			<div className='card__header'>
				<Link href={`/blog/${post.slug}`}>
					<h3 className='card__title'>
						<a className='link'>{post.frontmatter.title}</a>
					</h3>
				</Link>
				<h2 className='card__subtitle'>{post.frontmatter.subtitle}</h2>
			</div>
			{/* <p className='card__excerpt'>{post.frontmatter.excerpt}</p> */}
			<p className='card-footer'>
			{post.frontmatter.date}
				<Link href={`/blog/${post.slug}`}>
					<a className='card-footer__link'>{`READ >>`}</a>
				</Link>
			</p>
		</div>
	);
}

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
				<p className='card__date'>{post.frontmatter.date}</p>
			</div>
			<p className='card__excerpt'>
				{post.frontmatter.excerpt}
				<p className='card__link'>
					<span>
						<Link href={`/blog/${post.slug}`}>
							<a className='link'>read post</a>
						</Link>{' '}
						{` >>`}
					</span>
				</p>
			</p>
		</div>
	);
}

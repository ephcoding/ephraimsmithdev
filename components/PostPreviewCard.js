import Link from 'next/link';
import Image from 'next/image';

export default function PostPreviewCard({ post, compact }) {
	return (
		<div id='PostPreviewCard' className='postprev'>
			<div className='postprev__content'>
				<Link href={`/blog/${post.slug}`}>
					<a className='postprev__title'>{post.frontmatter.title}</a>
				</Link>
				<div className='postprev__date-container'>
					<span className='postprev__date-text'>{post.frontmatter.date}</span>
				</div>
				<p className='postprev__excerpt'>{post.frontmatter.excerpt}</p>
			</div>

			<div className='postprev__read-more'>
				<Link href={`/blog/${post.slug}`}>
					<a className=''>Read More</a>
				</Link>
			</div>
		</div>
	);
}

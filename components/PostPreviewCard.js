import Link from 'next/link';
import Image from 'next/image';

export default function PostPreviewCard({ post, compact }) {
	return (
		<div id='post-preview-card' className=''>
			<div className=''>
				<Link href={`/blog/${post.slug}`}>
					<a className=''>{post.frontmatter.title}</a>
				</Link>
				<div className=''>
					<span className=''>{post.frontmatter.date}</span>
				</div>
				<p className=''>{post.frontmatter.excerpt}</p>
			</div>

			{!compact && (
				<div className=''>
					<Link href={`/blog/${post.slug}`}>
						<a className=''>Read More</a>
					</Link>
				</div>
			)}
		</div>
	);
}

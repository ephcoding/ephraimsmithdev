import Link from "next/link";

export default function PostPreviewCard({ post }) {
	return (
		<div id='PostPreviewCard'>
			<div>
				<Link href={`/blog/${post.slug}`}>
					<h3>
						<a>{post.frontmatter.title}</a>
					</h3>
				</Link>
				<h2>{post.frontmatter.subtitle}</h2>
			</div>
			{/* <p>{post.frontmatter.excerpt}</p> */}
			<div>
				<span>{post.frontmatter.date}</span>
				<Link href={`/blog/${post.slug}`}>
					<a>Read</a>
				</Link>
			</div>
		</div>
	);
}

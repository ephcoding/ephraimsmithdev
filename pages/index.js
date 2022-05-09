import { useRef } from "react";
import Link from "next/link";
import { BlogPostPreviewCard, PageWrapper, SearchBar } from "components";
import { BLOG_POST_TAGS } from "constants";
import { getSortedBlogPostSlugsAndFrontmatter, getTagIcon } from "utils";

export default function HomePage({ blog_posts }) {
	const tagFilterIcons = BLOG_POST_TAGS.map((tagName) => {
		const TagIcon = getTagIcon(tagName, 20);
		return <TagIcon />;
	});

	return (
		<PageWrapper>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
				{blog_posts
					? blog_posts.map((blogPost, index) => (
							<BlogPostPreviewCard key={index} blog_post={blogPost} />
					  ))
					: "that definitely wasn't supposed to happen..."}
			</div>
		</PageWrapper>
	);
}

export async function getStaticProps() {
	return {
		props: {
			blog_posts: getSortedBlogPostSlugsAndFrontmatter(),
		},
	};
}

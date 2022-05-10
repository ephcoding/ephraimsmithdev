import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "utils";
import Link from "next/link";
import { BlogPostPreviewCard, PageWrapper, SearchBar } from "components";
import { BLOG_POST_TAGS } from "constants";
import { getSlugsWithFrMat } from "utils";

export default function HomePage({ blog_posts }) {
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
	const fileNames = fs.readdirSync(path.join("blog_posts"));

	const slugsAndFrontmatterObjARR = fileNames.map((filename) => {
		const blogPostSlug = filename.replace(".md", "");

		const blogPostContent = fs.readFileSync(
			path.join("blog_posts", filename),
			"utf-8"
		);

		const { data: frontmatter } = matter(blogPostContent);

		return {
			blogPostSlug,
			frontmatter,
		};
	});

	return {
		props: {
			blog_posts: slugsAndFrontmatterObjARR.sort(sortByDate),
		},
	};
}

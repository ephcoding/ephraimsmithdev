import { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "utils";
import Link from "next/link";
import { BlogPostPreviewCardList, PageWrapper, SearchBar } from "components";
import { getSlugsWithFrMat } from "utils";

export default function HomePage({ blog_posts: cachedBlogPosts }) {
	const [searchResults, setSearchResults] = useState([]);

	const blogPostsToDisplay =
		searchResults.length > 0 ? searchResults : cachedBlogPosts;

	return (
		<PageWrapper>
			<SearchBar setResultsCallback={setSearchResults} />
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
				<BlogPostPreviewCardList blog_posts={blogPostsToDisplay} />
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

		const { data: blogPostMeta } = matter(blogPostContent);

		return {
			blog_post_slug: blogPostSlug,
			blog_post_meta: blogPostMeta,
		};
	});

	return {
		props: {
			blog_posts: slugsAndFrontmatterObjARR.sort(sortByDate),
		},
	};
}

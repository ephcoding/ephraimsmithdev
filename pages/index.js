import { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "utils";
import Link from "next/link";
import { BlogPostPreviewCard, PageWrapper, SearchBar } from "components";
import { getSlugsWithFrMat } from "utils";

export default function HomePage({ blog_posts }) {
	const [searchResults, setSearchResults] = useState([]);

	return (
		<PageWrapper>
			<SearchBar setResultsCallback={setSearchResults} />
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
				{searchResults.length > 0 ? (
					<BlogPostSearchResults posts={searchResults} />
				) : (
					<CachedBlogPosts posts={blog_posts} />
				)}
			</div>
		</PageWrapper>
	);
}

const CachedBlogPosts = ({ posts }) => {
	return (
		<>
			{posts.length > 0
				? posts.map((post, index) => (
						<BlogPostPreviewCard key={index} blog_post={post} />
				  ))
				: "No cached blog posts.."}
		</>
	);
};
const BlogPostSearchResults = ({ posts }) => {
	return (
		<>
			{posts.length > 0
				? posts.map((post, index) => (
						<BlogPostPreviewCard key={index} blog_post={post} />
				  ))
				: "No posts matching that search..."}
		</>
	);
};

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

import fs from "fs";
import path from "path";
import { BlogPostPreviewCard, Pagination, PageWrapper } from "components";
import { BLOG_POST_RESULTS_COUNT } from "constants";
import { getSortedBlogPostSlugsAndFrontmatter } from "utils";

export default function SearchBlogPostsPage({
	posts,
	numPages,
	currentPage,
	categories,
}) {
	return (
		<PageWrapper>
			<div className='flex justify-between flex-col md:flex-row'>
				<div className='w-3/4 mr-10'>
					<h1 className='text-5xl border-b-4 p-5 font-bold'>Blog</h1>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
						{posts.map((post, index) => (
							<Post key={index} post={post} />
						))}
					</div>

					<Pagination currentPage={currentPage} numPages={numPages} />
				</div>

				<div className='w-1/4'>
					{/* <CategoryList categories={categories} /> */}
				</div>
			</div>
		</PageWrapper>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts"));

	const numPages = Math.ceil(files.length / POSTS_PER_PAGE);

	let paths = [];

	for (let i = 1; i <= numPages; i++) {
		paths.push({
			params: { page_index: i.toString() },
		});
	}

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const page = parseInt((params && params.page_index) || 1);

	const fileNames = fs.readdirSync(path.join("blog_posts"));

	const posts = getSortedBlogPostSlugsAndFrontmatter();

	// Get categories for sidebar
	const categories = posts.map((post) => post.frontmatter.category);
	const uniqueCategories = [...new Set(categories)];

	const numPages = Math.ceil(fileNames.length / BLOG_POST_RESULTS_COUNT);
	const pageIndex = page - 1;
	const orderedPosts = posts.slice(
		pageIndex * BLOG_POST_RESULTS_COUNT,
		(pageIndex + 1) * BLOG_POST_RESULTS_COUNT
	);

	return {
		props: {
			posts: orderedPosts,
			numPages,
			currentPage: page,
			categories: uniqueCategories,
		},
	};
}

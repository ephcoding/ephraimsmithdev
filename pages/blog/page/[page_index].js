import fs from 'fs';
import { getPosts } from '@/lib/posts';
import path from 'path';
import Layout from '@/components/Layout';
import Pagination from '@/components/Pagination';
import PostPreviewCard from '@/components/PostPreviewCard';
import { POSTS_PER_PAGE } from '@/config/index';
import Search from '@/components/Search';

export default function AllBlogPostsPage({
	posts,
	numPages,
	currentPage,
	categories,
}) {
	return (
		<Layout>
			<div id='blog-landing-page' className=''>
				<div className=''>
					{/* <h1 className='text-5xl border-b-4 p-5 font-bold'>Blog</h1> */}
					<Search />
					<div className=''>
						{posts.map((post, index) => (
							<PostPreviewCard key={index} post={post} />
						))}
					</div>

					<Pagination currentPage={currentPage} numPages={numPages} />
				</div>

				<div className=''>
					<CategoryList categories={categories} />
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('posts'));

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

	const files = fs.readdirSync(path.join('posts'));

	const posts = getPosts();

	// Get categories for sidebar
	const categories = posts.map((post) => post.frontmatter.category);
	const uniqueCategories = [...new Set(categories)];

	const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
	const pageIndex = page - 1;
	const orderedPosts = posts.slice(
		pageIndex * POSTS_PER_PAGE,
		(pageIndex + 1) * POSTS_PER_PAGE
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

import fs from 'fs';
import { getPosts } from '@/lib/posts';
import Link from 'next/link';
import MetaContainer from '@/components/MetaContainer';
import Pagination from '@/components/Pagination';
import PostPreviewCard from '@/components/PostPreviewCard';
// import { POSTS_PER_PAGE } from '@/config/index';
import path from 'path';
// import SearchInputField from '@/components/SearchInputField';
import BlogPageFooter from '@/components/BlogPageFooter';

export default function DisplayPostsPage({ posts, numPages, currentPage }) {
	return (
		<MetaContainer>
			<div id='AllBlogPostsPage' className='blog-posts'>
				<span className='blog-posts__home-link'>
					{`<< `}
					<Link href='/'>home</Link>
				</span>
				<div className='blog-posts__cards'>
					{/* TODO: only display h1 on md & lg screens */}
					{/* <h1 className=''>Blog</h1> */}

					<div className=''>
						{posts.map((post, index) => (
							<PostPreviewCard key={index} post={post} />
						))}
					</div>
				</div>
				<BlogPageFooter />
			</div>
		</MetaContainer>
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
		},
	};
}

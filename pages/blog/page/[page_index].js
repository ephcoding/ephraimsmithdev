// NODE
import fs from 'fs';
import path from 'path';
// UTILS
import { getPosts } from '@/lib/posts';
import { POSTS_PER_PAGE } from '@/config/index';
// COMPONENTS
import Link from 'next/link';
import MetaContainer from '@/components/MetaContainer';
import PostPreviewCard from '@/components/PostPreviewCard';
import Head from 'next/head';
// import Pagination from '@/components/Pagination';
// import SearchInputField from './style_components.searchInputField';

export default function DisplayPostsPage({ posts, numPages, currentPage }) {
	return (
		<MetaContainer
			title='ephcoding.com | blog'
			keywords='javascript, typescript, node.js, coding blog'
		>
			<div id='DisplayPostsPage'>
				{/* <nav className='header-nav'>
					<Link href='https://github.com/ephcoding'>
						<a className='header-nav__link'>github</a>
					</Link>
					<Link href='https://twitter.com/ephcoding'>
						<a className='header-nav__link'>twitter</a>
					</Link>
					<Link href='https://linkedin.com/in/ephraimjsmith'>
						<a className='header-nav__link'>linkedin</a>
					</Link>
				</nav> */}

				<div className='blog-posts__cards'>
					<h1>Latest Posts</h1>
					<div className=''>
						{posts.map((post, index) => (
							<PostPreviewCard key={index} post={post} />
						))}
					</div>
				</div>
			</div>

			{/* <SearchInputField /> */}
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
			// numPages,
			currentPage: page,
		},
	};
}

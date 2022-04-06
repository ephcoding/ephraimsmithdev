// import fs from "fs";
import path from "path";
import { getPosts } from "../../lib";
import { PAGE_META } from "../../constants";
import { Page, Post } from "../../components";

export default function BlogPostsPage({ posts }) {
	const { blog_posts } = PAGE_META;

	return (
		<Page pageInfo={blog_posts}>
			<div className='flex justify-between flex-col md:flex-row'>
				<div className='w-3/4 mr-10'>
					<h1 className='text-5xl border-b-4 p-5 font-bold'>Blog</h1>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
						{posts.map((post, index) => (
							<Post key={index} post={post} />
						))}
					</div>
				</div>
			</div>
		</Page>
	);
}

// export async function getStaticPaths() {
// 	const files = fs.readdirSync(path.join("posts"));
// 	const paths = files.map(file => {
// 		return {
// 			params: {
// 				slug: file.replace(".md", ""),
// 			},
// 		};
// 	});
// 	return {
// 		paths,
// 		fallback: false,
// 	};
// }

export async function getStaticProps() {
	return {
		props: {
			posts: getPosts(),
		},
	};
}

import Link from "next/link";
import { BlogPostPreviewCard, PageWrapper } from "components";
import { getPosts } from "utils";

export default function HomePage({ blog_posts }) {
	return (
		<PageWrapper>
			<h1 className='text-5xl p-5 font-bold'>new posts</h1>

			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
				{blog_posts.map((blogPost, index) => (
					<BlogPostPreviewCard key={index} blog_post={blogPost} />
				))}
			</div>

			{/* <Link href='/blog'>
        <a className='block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full'>
          All Posts
        </a>
      </Link> */}
		</PageWrapper>
	);
}

export async function getStaticProps() {
	return {
		props: {
			blog_posts: getPosts(),
		},
	};
}

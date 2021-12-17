import { getPosts } from "@/lib/posts";
import Link from "next/link";
import Meta from "@/components/Meta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_META } from "../../sitedata/meta";

export default function Archives({ posts }) {
	const { blog } = PAGE_META;

	return (
		<Meta meta={blog}>
			<div className='page blog-page'>
				<Header />
				<main className='content'>
					<h1>
						<span className='blue'>Blog</span> Posts
					</h1>
					{posts.map((post, index) => {
						return (
							<div>
								<Link href={`/blog/${post.slug}`} passHref>
									<a>
										<h3 className='blog__post-'>
											{post.frontmatter.leadTitle}
										</h3>
									</a>
								</Link>
								<h2>{post.frontmatter.headingTitle}</h2>
							</div>
						);
					})}
				</main>
				<Footer />
			</div>
		</Meta>
	);
}

export async function getStaticProps() {
	return {
		props: {
			posts: getPosts(),
		},
	};
}

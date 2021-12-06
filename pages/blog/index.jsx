import { getPosts } from "@/lib/posts";
import Link from "next/link";
import MetaContainer from "@/components/MetaContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_META_DATA } from "../../sitedata/pages";

export default function Archives({ posts }) {
	const { blog } = PAGE_META_DATA;

	return (
		<MetaContainer meta={blog}>
			<div className='page blog-page'>
				<Header />
				<main className='content'>
					{posts.map((post, index) => {
						return (
							<div>
								<Link href={`/blog/${post.slug}`} passHref>
									<a>
										<h3>{post.frontmatter.leadTitle}</h3>
									</a>
								</Link>
								<h2>{post.frontmatter.headingTitle}</h2>
							</div>
						);
					})}
				</main>
				<Footer />
			</div>
		</MetaContainer>
	);
}

export async function getStaticProps() {
	return {
		props: {
			posts: getPosts(),
		},
	};
}

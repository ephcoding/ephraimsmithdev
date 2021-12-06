import { getDateMonthName } from "../../utils";
import { getPosts } from "@/lib/posts";
import Link from "next/link";
import MetaContainer from "@/components/MetaContainer";
import Nav from "react-bootstrap/Nav";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_META_DATA } from "../../sitedata/meta_data";

export default function Archives({ posts }) {
	const { blog } = PAGE_META_DATA;
	let prevBlogPostMonth;

	return (
		<MetaContainer meta={blog}>
			<div className='blog-page'>
				<Header />
				<main className='blog-page__content'>
					<div className='flex-fill pt-3'>
						{posts.map((post, index) => {
							const blogPostDate = new Date(post.frontmatter.date);
							const blogPostMonth = blogPostDate.getMonth();
							const blogPostYear = blogPostDate.getFullYear();
							const blogPostMonthName = getDateMonthName(blogPostDate);
							const isDiffMonth = blogPostMonth !== prevBlogPostMonth;
							prevBlogPostMonth = blogPostMonth;

							return (
								<>
									{!isDiffMonth && (
										<h2>
											{blogPostMonthName} {blogPostYear}
										</h2>
									)}
									<div className='text-white'>
										<h3 className='h1 my-0'>
											<Link href={`/blog/${post.slug}`}>
												<a className='nav-link px-0 '>
													{post.frontmatter.title}
												</a>
											</Link>
										</h3>
										<h2>{post.frontmatter.subtitle}</h2>
										<p>{post.frontmatter.date}</p>
									</div>
								</>
							);
						})}
						<Nav
							id='BlogPageNav'
							as='ul'
							className='justify-content-center mt-5'
						>
							<Nav.Item as='li'>
								<Nav.Link href='/' className='px-2 site-nav-btn'>
									home
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</div>
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

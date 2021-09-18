import { getDateMonthName } from '../../utils';
import { getPosts } from '@/lib/posts';
import Link from 'next/link';
import MetaContainer from '@/components/MetaContainer';
import Nav from 'react-bootstrap/Nav';
import Footer from '@/components/Footer';

export default function Archives({ posts }) {
	let prevBlogPostMonth;

	return (
		<MetaContainer>
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
										<a className='nav-link px-0 '>{post.frontmatter.title}</a>
									</Link>
								</h3>
								<h2>{post.frontmatter.subtitle}</h2>
								<p>{post.frontmatter.date}</p>
							</div>
						</>
					);
				})}
				<Nav className='justify-content-center'>
					<Nav.Link href='/' className='nav-link-btn'>
						home
					</Nav.Link>
				</Nav>
			</div>

			<Footer />
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

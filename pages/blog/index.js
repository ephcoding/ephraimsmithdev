import { getDateMonthName } from '../../utils';
import { getPosts } from '@/lib/posts';
import Link from 'next/link';
import MetaContainer from '@/components/MetaContainer';
import Nav from 'react-bootstrap/Nav';

export default function Archives({ posts }) {
	let prevBlogPostMonth;

	return (
		<MetaContainer>
			<Nav.Link href='/' className='nav-links'>
				home
			</Nav.Link>

			<div className='archives'>
				{posts.map((post, index) => {
					const blogPostDate = new Date(post.frontmatter.date);
					const blogPostMonth = blogPostDate.getMonth();
					const blogPostYear = blogPostDate.getFullYear();
					const blogPostMonthName = getDateMonthName(blogPostDate);
					const isDiffMonth = blogPostMonth !== prevBlogPostMonth;
					prevBlogPostMonth = blogPostMonth;

					return (
						<>
							{isDiffMonth && (
								<h2 className='archives_month'>
									{blogPostMonthName} {blogPostYear}
								</h2>
							)}
							<div className='text-white'>
								<h3 className='archives_title'>
									<Link href={`/blog/${post.slug}`}>
										<a className='archives_title_link'>
											{post.frontmatter.title}
										</a>
									</Link>
								</h3>
								<h2 className='archives_subtitle'>
									{post.frontmatter.subtitle}
								</h2>
								<p className='archives_date'>{post.frontmatter.date}</p>
							</div>
						</>
					);
				})}
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

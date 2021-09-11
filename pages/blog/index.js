import { getDateMonthName } from '../../utils';
import { getPosts } from '@/lib/posts';
import Link from 'next/link';
import MetaContainer from '@/components/MetaContainer';

export default function Archives({ posts }) {
	let prevBlogPostMonth;

	return (
		<MetaContainer>
			<div className='btn-row'>
				<Link href='/'>
					<a className='btn-nav_home'>&lt; home</a>
				</Link>
			</div>

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
							<div className='archives_card'>
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
			<div className='btn-row'>
				<Link href='/'>
					<a className='btn-nav_home'>&lt; home</a>
				</Link>
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

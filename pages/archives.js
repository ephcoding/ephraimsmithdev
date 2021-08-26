import { getDateMonthName } from '../utils';
import { getPosts } from '@/lib/posts';
import Link from 'next/link';
import MetaContainer from '@/components/MetaContainer';
import PostPreviewCard from '@/components/PostPreviewCard';

export default function Archives({ posts }) {
	let prevBlogPostMonth;

	return (
		<MetaContainer>
			<div className='btn_home_row'>
				<div className='btn_home'>
					<Link href='/'>
						<a className='btn_home_link'>&lt; home</a>
					</Link>
				</div>
			</div>
			<div className='archives'>
				{posts.map((post, index) => {
					const blogPostDate = new Date(post.frontmatter.date);
					const blogPostMonth = blogPostDate.getMonth();
					const blogPostMonthName = getDateMonthName(blogPostDate);
					const isDiffMonth = blogPostMonth !== prevBlogPostMonth;
					prevBlogPostMonth = blogPostMonth;

					return (
						<>
							{isDiffMonth && (
								<h2 className='archives_month'>{blogPostMonthName}</h2>
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
			<div className='btn_home_row'>
				<div className='btn_home'>
					<Link href='/'>
						<a className='btn_home_link'>&lt; home</a>
					</Link>
				</div>
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

import { getDateMonthName } from '../utils';
import { getPosts } from '@/lib/posts';
import Link from 'next/link';
import MetaContainer from '@/components/MetaContainer';
import PostPreviewCard from '@/components/PostPreviewCard';

export default function Archives({ posts }) {
	let prevBlogPostMonth;

	return (
		<MetaContainer>
			<div className='archive_cards'>
				{posts.map((post, index) => {
					const blogPostDate = new Date(post.frontmatter.date);
					const blogPostMonth = blogPostDate.getMonth();
					const blogPostMonthName = getDateMonthName(blogPostDate);
					const isDiffMonth = blogPostMonth !== prevBlogPostMonth;
					prevBlogPostMonth = blogPostMonth;

					return (
						<>
							{isDiffMonth && (
								<h2 className='month_divider'>{blogPostMonthName}</h2>
							)}
							<div className='archive_card'>
								<p className='row1'>
									<Link href={`/blog/${post.slug}`}>
										<a>{post.frontmatter.title}</a>
									</Link>
									<span>{post.frontmatter.date}</span>
								</p>
								<p className='row2'>{post.frontmatter.subtitle}</p>
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

import { getPosts } from '@/lib/posts';
import Link from 'next/link';
import MetaContainer from '@/components/MetaContainer';
import PostPreviewCard from '@/components/PostPreviewCard';

export default function Archives({ posts }) {
	let mostRecentMonth = new Date(posts[0].frontmatter.date);
	let date, previousMonth, postMonth, monthName, isNewMonth;

	return (
		<MetaContainer>
			<h2 className='month_divider'>
				{mostRecentMonth.toLocaleString('default', { month: 'long' })}
			</h2>
			<div className='archive_cards'>
				{posts.map((post, index) => {
					date = new Date(post.frontmatter.date);
					postMonth = date.getMonth();
					monthName = date.toLocaleString('default', { month: 'long' });
					isNewMonth = postMonth < previousMonth;
					previousMonth = postMonth;
					return (
						<>
							{isNewMonth && <h2 className='month_divider'>{monthName}</h2>}
							{/* <PostPreviewCard key={index} post={post} /> */}
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

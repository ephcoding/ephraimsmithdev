import { getPosts } from '@/lib/posts';
import Link from 'next/link';
import MetaContainer from '@/components/MetaContainer';
import PostPreviewCard from '@/components/PostPreviewCard';

export default function HomePage({ posts }) {
	return (
		<MetaContainer title='ephcoding.com | home'>
			<div className='blog-posts__cards'>
				{/* <div className=''> */}
				{posts.map((post, index) => (
					<PostPreviewCard key={index} post={post} />
				))}
				{/* </div> */}
			</div>
			<div className='btn_archives'>
				<Link href='/archives'>
					<a className='btn_archives_link'>archives &gt;</a>
				</Link>
			</div>
		</MetaContainer>
	);
}

export async function getStaticProps() {
	return {
		props: {
			posts: getPosts().slice(0, 5),
		},
	};
}

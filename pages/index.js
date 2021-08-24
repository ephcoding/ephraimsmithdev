import { getPosts } from '@/lib/posts';

import Link from 'next/link';
import MetaContainer from '@/components/MetaContainer';
import PostPreviewCard from '@/components/PostPreviewCard';

export default function HomePage({ posts }) {
	return (
		<MetaContainer title='ephcoding.com | home'>
			<img className='logo' src='/images/ephcoding-text-logo.png' />
			{/* <nav className='homepage-nav'>
				<Link href='/blog'>
					<a className='homepage-nav__item'>blog</a>
				</Link>
				<Link href='https://github.com/ephcoding'>
					<a className='homepage-nav__item' target='_blank'>
						github
					</a>
				</Link>
				<Link href='https://twitter.com/ephcoding'>
					<a className='homepage-nav__item' target='_blank'>
						twitter
					</a>
				</Link>
				<Link href='https://linkedin.com/in/ephraimjsmith'>
					<a className='homepage-nav__item' target='_blank'>
						linkedin
					</a>
				</Link>
			</nav> */}
			<div className='blog-posts__cards'>
				<h1>Latest Posts</h1>
				<div className=''>
					{posts.map((post, index) => (
						<PostPreviewCard key={index} post={post} />
					))}
				</div>
			</div>
		</MetaContainer>
	);
}

export async function getStaticProps() {
	return {
		props: {
			posts: getPosts().slice(0, 7),
		},
	};
}

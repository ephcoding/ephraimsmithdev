import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import Post from '@/components/Post';
import { getPosts } from '@/lib/posts';
import styles from '../styles/HomePage.module.scss';

export default function HomePage({ posts }) {
	return (
		<Layout>
			{/* TODO: center HomePage logo */}
			<div className={styles['homepage-wrapper']}>
				<img
					className={styles.logo}
					src='/images/ephcoding-text-logo.png'
					height={417}
					width={1000}
				/>

				<nav className={styles['landing-page-nav']}>
					<ul className={styles['landing-page-nav__ul']}>
						<li className={styles['landing-page-nav__li']}>
							<Link href='/blog'>
								<a>blog</a>
							</Link>
						</li>
						<li className={styles['landing-page-nav__li']}>
							<Link href='https://github.com/ephcoding'>
								<a target='_blank'>github</a>
							</Link>
						</li>
						<li className={styles['landing-page-nav__li']}>
							<Link href='https://twitter.com/ephcoding'>
								<a target='_blank'>twitter</a>
							</Link>
						</li>
						{/* TODO: add Postman link */}
						<li className={styles['landing-page-nav__li']}>
							<Link href='https://www.linkedin.com/in/ephraimjsmith'>
								<a target='_blank'>linkedIn</a>
							</Link>
						</li>
					</ul>
				</nav>
				{/* <h1 className='text-5xl border-b-4 p-5 font-bold'>Latest Posts</h1>

			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
				{posts.map((post, index) => (
					<Post key={index} post={post} />
				))}
			</div>

			<Link href='/blog'>
				<a className='block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full'>
					All Posts
				</a>
			</Link> */}
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	return {
		props: {
			posts: getPosts().slice(0, 6),
		},
	};
}

import Link from 'next/link';
import Layout from '@/components/Layout';

export default function HomePage({ posts }) {
	return (
		<Layout>
			<div id='ephcoding-landing-page'>
				<img
					className='logo'
					src='/images/ephcoding-text-logo.png'
					height={417}
					width={1000}
				/>

				<nav id='landing-page-nav' className='landing-page-nav'>
					<ul className='landing-page-nav__ul'>
						<li className='landing-page-nav__li'>
							<Link href='/blog'>
								<a>blog</a>
							</Link>
						</li>
						<li className='landing-page-nav__li'>
							<Link href='https://github.com/ephcoding'>
								<a target='_blank'>github</a>
							</Link>
						</li>
						<li className='landing-page-nav__li'>
							<Link href='https://twitter.com/ephcoding'>
								<a target='_blank'>twitter</a>
							</Link>
						</li>
						<li className='landing-page-nav__li'>
							<Link href='https://linkedin.com/in/ephraimjsmith'>
								<a target='_blank'>linkedin</a>
							</Link>
						</li>
					</ul>
				</nav>
				{/* TODO: add Postman link */}
			</div>
		</Layout>
	);
}

// export async function getStaticProps() {
// 	return {
// 		props: {
// 			posts: getPosts().slice(0, 6),
// 		},
// 	};
// }

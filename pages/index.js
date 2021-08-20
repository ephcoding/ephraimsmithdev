import Link from 'next/link';
import MetaContainer from '@/components/MetaContainer';

export default function HomePage({ posts }) {
	return (
		<MetaContainer>
			<div id='HomePage'>
				<img
					className='logo'
					src='/images/ephcoding-text-logo.png'
					height={417}
					width={1000}
				/>

				<nav id='HomePageNavMenu' className='main-nav'>
					<ul className='main-nav__list'>
						<li className='main-nav__item'>
							<Link href='/blog'>
								<a>blog</a>
							</Link>
						</li>
						<li className='main-nav__item'>
							<Link href='https://github.com/ephcoding'>
								<a target='_blank'>github</a>
							</Link>
						</li>
						<li className='main-nav__item'>
							<Link href='https://twitter.com/ephcoding'>
								<a target='_blank'>twitter</a>
							</Link>
						</li>
						<li className='main-nav__item'>
							<Link href='https://linkedin.com/in/ephraimjsmith'>
								<a target='_blank'>linkedin</a>
							</Link>
						</li>
					</ul>
				</nav>
				{/* TODO: add Postman link */}
			</div>
		</MetaContainer>
	);
}

// export async function getStaticProps() {
// 	return {
// 		props: {
// 			posts: getPosts().slice(0, 6),
// 		},
// 	};
// }

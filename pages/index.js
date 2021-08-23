import Link from 'next/link';
import { getCurrentYear } from '../utils/index';
import MetaContainer from '@/components/MetaContainer';

export default function HomePage({ posts }) {
	return (
		<MetaContainer>
			<div id='HomePage' className='homepage'>
				<div className='container'>
					<img
						className='logo'
						src='/images/ephcoding-text-logo.png'
						height={417}
						width={1000}
					></img>
				</div>

				<nav id='HomePageNavMenu' className='main-nav'>
					<ul className='main-nav__list'>
						<li className='main-nav__item'>
							<Link href='/blog'>
								<a className='main-nav__item-link'>blog</a>
							</Link>
						</li>
						<li className='main-nav__item'>
							<Link href='https://github.com/ephcoding'>
								<a className='main-nav__item-link' target='_blank'>
									github
								</a>
							</Link>
						</li>
						<li className='main-nav__item'>
							<Link href='https://twitter.com/ephcoding'>
								<a className='main-nav__item-link' target='_blank'>
									twitter
								</a>
							</Link>
						</li>
						<li className='main-nav__item'>
							<Link href='https://linkedin.com/in/ephraimjsmith'>
								<a className='main-nav__item-link' target='_blank'>
									linkedin
								</a>
							</Link>
						</li>
					</ul>
				</nav>
				{/* TODO: add Postman link */}
				<footer>
					<p className='copyright'>
						<span className='copyright__symbol'>&copy;</span> {getCurrentYear()}{' '}
						ephcoding.com
					</p>
				</footer>
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

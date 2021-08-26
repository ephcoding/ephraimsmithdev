import Link from 'next/link';

export default function Header() {
	return (
		<header className='header'>
			<nav className='header-nav'>
				<Link href='/'>
					<a className='header-nav__logo-link'>
						<img className='header-nav__logo' src='/images/ephcoding-text-logo.png' />
					</a>
				</Link>
				<div className="sub-nav">
					<Link href='/about'>
						<a className='sub-nav__link'>about</a>
					</Link>
					<Link href='/archives'>
						<a className='sub-nav__link'>archives</a>
					</Link>
				</div>
			</nav>
		</header>
	);
}

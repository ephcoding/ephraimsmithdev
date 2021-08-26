import Link from 'next/link';

export default function Header() {
	return (
		<header className='header'>
			<nav className='header-nav'>
				<Link href='/'>
					<a className='header-logo'>
						<img
							className='header-logo_img'
							src='/images/ephcoding-logo_1000x325.png'
						/>
					</a>
				</Link>
				{/* SUB-NAV moved to <index.js> */}
			</nav>
		</header>
	);
}

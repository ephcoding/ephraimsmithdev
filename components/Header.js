import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<Link href='/'>
				<a>
					<img src='/images/ephcoding-text-logo.png' />
				</a>
			</Link>
			<nav>
				<Link href='/about'>
					<a>about</a>
				</Link>
				<Link href='/archives'>
					<a>archives</a>
				</Link>
			</nav>
		</header>
	);
}

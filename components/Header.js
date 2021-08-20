import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
	return (
		// <header className='bg-gray-900 text-gray-100 shadow w-full'>
		<header id='header' className='header'>
			<div className=''>
				<Link href='/'>
					<a className=''>
						<Image
							src='/images/ephcoding-text-logo.png'
							height={417}
							width={1000}
							className='logo'
							alt='logo'
						/>
					</a>
				</Link>
			</div>
		</header>
	);
}

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
						{/* <Image
							src='/images/ephcoding-text-logo.png'
							height={417}
							width={1000}
							className={styles.logo}
							alt='logo'
						/> */}
					</a>
				</Link>
				{/* TODO: use nav in main body of minimalistic landing page */}
				{/* <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
					<Link href='/blog'>
						<a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
							Blog
						</a>
					</Link>
					<Link href='/about'>
						<a className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
							About
						</a>
					</Link>
				</nav> */}
			</div>
		</header>
	);
}

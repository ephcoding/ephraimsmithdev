import Head from 'next/head';

export default function MetaContainer({
	title,
	keywords,
	description,
	children,
}) {
	// (function () {
	// 	const vh = window.innerHeight * 0.01;
	// 	document.documentElement.style.setProperty('--vh', `${vh}px`);

	// 	document.addEventListener('resize', () => {
	// 		const vh = window.innerHeight * 0.01;
	// 		document.documentElement.style.setProperty('--vh', `${vh}px`);
	// 	});
	// })();

	return (
		<div id='MetaContainer' className='bg-dark text-white px-4'>
			<Head>
				<title>{title}</title>
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{/* <main className='main-container container-fluid d-flex flex-column bg-dark'> */}
			<main className='main-container container-fluid d-flex flex-column'>
				{children}
			</main>
		</div>
	);
}

MetaContainer.defaultProps = {
	title: 'ephcoding.com',
	keywords:
		'react native, mobile apps, mobile development, android, ios, coding, programming, software, software development',
	description:
		"Ephraim Smith shares his experiences in building software applications and lessons he's learned along the way.",
};

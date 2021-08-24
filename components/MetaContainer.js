import Head from 'next/head';
import Footer from './Footer';

export default function MetaContainer({
	title,
	keywords,
	description,
	children,
}) {
	return (
		<div id='MetaContainer' className='meta-container'>
			<Head>
				<title>{title}</title>
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='page'>
				<div className='content'>
					<main className='main'>{children}</main>
				</div>
				<Footer />
			</div>
		</div>
	);
}

MetaContainer.defaultProps = {
	title: 'ephcoding.com',
	keywords:
		'react native, mobile apps, mobile development, android, ios, coding, programming, software, software development',
	description: "Ephraim Smith's documented misadventures in software",
};

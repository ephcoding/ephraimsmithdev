import Footer from './Footer';
import Head from 'next/head';
import Header from '@/components/Header';

export default function MetaContainer({
	title,
	keywords,
	description,
	children,
}) {
	return (
		<div id='MetaContainer'>
			<Head>
				<title>{title}</title>
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='baseline_page'>
				<Header />
				<div className='baseline_content'>
					<main>{children}</main>
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

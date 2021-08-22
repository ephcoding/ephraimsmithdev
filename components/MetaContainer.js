import Head from 'next/head';
import Header from './Header';
import SearchInputField from './SearchInputField';

export default function MetaContainer({
	title,
	keywords,
	description,
	children,
}) {
	return (
		<div id='MetaContainer' className='meta'>
			<Head>
				<title>{title}</title>
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='meta-main'>{children}</main>
		</div>
	);
}

MetaContainer.defaultProps = {
	title: 'ephcoding.com',
	keywords:
		'react native, mobile apps, mobile development, android, ios, coding, programming, software, software development',
	description: "Ephraim Smith's documented software experiences.",
};

import Head from 'next/head';
import Header from './Header';
import Search from './Search';

export default function Layout({ title, keywords, description, children }) {
	return (
		<div id='layout'>
			<Head>
				<title>{title}</title>
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='container'>{children}</main>
			{/* <main className={styles.container}>{children}</main> */}
		</div>
	);
}

Layout.defaultProps = {
	title: 'ephcoding.com',
	keywords:
		'react native, mobile apps, mobile development, android, ios, coding, programming, software, software development',
	description: "Ephraim Smith's documented software experiences.",
};

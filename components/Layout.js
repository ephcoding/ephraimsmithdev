import Head from 'next/head';
import Header from './Header';
import Search from './Search';
import styles from '../styles/Layout.module.scss';

export default function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* <Header /> */}
			{/* <Search /> */}
			{/* <main className='container mx-auto my-7'>{children}</main> */}
			<main className={styles.container}>{children}</main>
		</div>
	);
}

Layout.defaultProps = {
	title: 'ephcoding.com',
	keywords:
		'react native, mobile apps, mobile development, android, ios, coding, programming, software, software development',
	description: "Ephraim Smith's documented software experiences.",
};

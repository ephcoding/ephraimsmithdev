import Head from "next/head";
import { Header } from "components";

export const PageWrapper = ({ title, children }) => {
	return (
		<div className='bg-black text-slate-100 min-h-screen'>
			<Head>
				<meta
					name='keywords'
					content='Ephraim Smith, coding, software development, React Native, React, mobile development, mobile apps, mobile software, web development'
				/>
				<meta
					name='description'
					content="Ephraim Smith's personal website and software development portfolio"
				/>
				<link rel='icon' href='/favicon.ico' />
				<meta property='og:title' content='ephraimsmith.dev' />
				<meta property='og:url' content='https://www.ephraimsmith.dev' />
				<meta
					property='og:description'
					content="Ephraim Smith's personal website and software development portfolio"
				/>
				<meta
					property='og:image'
					content='https://ephraimsmith.dev/repo-preview-esdev.png'
				/>
				<meta property='og:type' content='website' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:creator' content='@ephcoding' />
				<title>Ephraim Smith</title>
			</Head>

			<Header />

			<main className='container px-4 mx-auto'>{children}</main>
		</div>
	);
};

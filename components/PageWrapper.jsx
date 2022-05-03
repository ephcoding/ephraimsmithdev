import { defaultProps } from "react";
import Head from "next/head";
import { Footer, Header } from "components";

export const PageWrapper = ({ pageInfo = {}, children }) => {
	const { description, keywords, title } = pageInfo;

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
				{/* LinkedIn Meta */}
				<meta property='og:title' name='title' content='ephraimsmith.dev' />
				<meta property='og:type' content='website' />
				<meta
					property='og:image'
					name='image'
					content='https://www.ephraimsmith.dev/repo-preview-ephraimsmith-dot-dev.png'
				/>
				<meta
					name='description'
					property='og:description'
					content='Ephraim Smith | sharing software, mistakes, bad dad jokes, and lessons learned with the world.  Probably not in that order.'
				/>
				<meta name='author' content='Ephraim Smith' />
				{/* Twitter Meta */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:creator' content='@ephraimsmithdev' />
				{/* <meta
					name='twitter:site'
					content='[@Your-twitter-site-handle (optional)]'
				/> */}
				<meta
					name='twitter:image'
					content='https://www.ephraimsmith.dev/repo-preview-ephraimsmith-dot-dev.png'
				/>
				<meta
					name='twitter:description'
					content='Ephraim Smith | sharing software, mistakes, bad dad jokes, and lessons learned with the world.  Probably not in that order.'
				/>
			</Head>
			<div className='flex flex-col min-h-screen px-4 py-2 bg-neutral-700 text-white'>
				<Header title={title} />
				<main className='container mx-auto grow'>{children}</main>
				<Footer />
			</div>
		</>
	);
};

// PageWrapper.defaultProps = {
// 	description: "",
// 	keywords: "",
// 	title: "",
// };
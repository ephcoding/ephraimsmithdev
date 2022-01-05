import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Page({ pageInfo, children }) {
	const {
		cssClass,
		pageHeading,
		pageIntro,
		metaDescription,
		metaKeywords,
		metaTitle,
	} = pageInfo;

	return (
		<div id='Meta' className='meta'>
			<Head>
				<title>{metaTitle}</title>
				<meta name='keywords' content={metaKeywords} />
				<meta name='description' content={metaDescription} />
				<link rel='icon' href='/favicon.ico' />
				{/* LinkedIn Meta */}
				<meta property='og:title' name='title' content='ephraimsmith.dev' />
				<meta property='og:type' content='website' />
				<meta
					property='og:image'
					name='image'
					content='/repo-preview-ephraimsmith-dot-dev.png'
				/>
				<meta
					name='description'
					property='og:description'
					content='Ephraim Smith | sharing software, mistakes, bad dad jokes, and lessons learned with the world.  Probably not in that order.'
				/>
				<meta name='author' content='Ephraim Smith' />
				{/* Twitter Meta */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:creator' content='@ephcoding' />
				{/* <meta
					name='twitter:site'
					content='[@Your-twitter-site-handle (optional)]'
				/> */}
				<meta
					name='twitter:image'
					content='https://repository-images.githubusercontent.com/378638394/7f8970e2-6225-45e2-b3cb-bed47e9f853e'
				/>
				<meta
					name='twitter:description'
					content='Ephraim Smith | sharing software, mistakes, bad dad jokes, and lessons learned with the world.  Probably not in that order.'
				/>
			</Head>
			<div className={`page ${cssClass}-page`}>
				<Header title={pageHeading} />
				<main className='content'>
					<p className='pPageIntro'>{pageIntro}</p>
					{children}
				</main>
				<Footer />
			</div>
		</div>
	);
}

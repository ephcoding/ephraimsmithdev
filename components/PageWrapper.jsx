import PropTypes from "prop-types";
import Head from "next/head";
import { Footer, Header } from "components";

PageWrapper.propTypes = {
	page_meta: PropTypes.shape({
		metaDesc: PropTypes.string.isRequired,
		metaKeywords: PropTypes.string.isRequired,
		metaTitle: PropTypes.string.isRequired,
		pageIntro: PropTypes.string.isRequired,
		pageTitle: PropTypes.string.isRequired,
	}),
};

export function PageWrapper({ page_meta, children }) {
	const { metaDesc, metaKeywords, metaTitle, pageIntro, pageTitle } = page_meta;

	return (
		<div className='bg-black text-white min-h-screen'>
			<Head>
				<title>{metaTitle}</title>
				<meta name='keywords' content={metaKeywords} />
				<meta name='description' content={metaDesc} />
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
			<div className='flex flex-col min-h-screen'>
				{/* <Header title={pageTitle} /> */}
				<main className='grow'>{children}</main>
				<Footer />
			</div>
		</div>
	);
}

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
			</Head>
			<div className={`page ${cssClass}-page`}>
				<Header title={pageHeading} />
				<main className='content'>
					<p className='pPageIntro'>{pageIntro}</p>
					{children}
					{/* <!--JavaScript at end of body for optimized loading--> */}
					<script type='text/javascript' src='js/materialize.min.js'></script>
				</main>
				<Footer />
			</div>
		</div>
	);
}

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Page({ pageInfo, children }) {
	const { cssClass, description, heading, keywords, title } = pageInfo;

	return (
		<div id='Meta' className='meta'>
			<Head>
				<title>{title}</title>
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={`page ${cssClass}-page`}>
				<Header title={heading} />
				<main className='content'>
					{children}
					{/* <!--JavaScript at end of body for optimized loading--> */}
					<script type='text/javascript' src='js/materialize.min.js'></script>
				</main>
				<Footer />
			</div>
		</div>
	);
}

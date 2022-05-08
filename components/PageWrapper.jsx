import Head from "next/head";
import { Header } from "components";

export const PageWrapper = ({ title, keywords, description, children }) => {
	return (
		<div>
			<Head>
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
				<title>{title}</title>
			</Head>

			<Header />

			<main className='container mx-auto'>{children}</main>
		</div>
	);
};

PageWrapper.defaultProps = {
	title: "ephraimsmith.dev",
	keywords: "build, learn, repeat",
	description: "overcoming analysis paralysis by shipping code every day",
};

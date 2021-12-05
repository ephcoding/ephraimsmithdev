import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MetaContainer({
	title,
	keywords,
	description,
	children,
}) {
	return (
		<div id='MetaContainer' className='meta-container'>
			<Head>
				<title>{title}</title>
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{children}
		</div>
	);
}

MetaContainer.defaultProps = {
	title: "ephcoding.com",
	keywords:
		"react native, mobile apps, mobile development, android, ios, coding, programming, software, software development",
	description:
		"Ephraim Smith shares his experiences in building software applications and lessons he's learned along the way.",
};

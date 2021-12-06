import Head from "next/head";

export default function MetaContainer(props) {
	const { title, description, keywords } = props.meta;

	return (
		<div id='MetaContainer' className='meta-container'>
			<Head>
				<title>{title}</title>
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{props.children}
		</div>
	);
}

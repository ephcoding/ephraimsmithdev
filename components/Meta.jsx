import Head from "next/head";

export default function Meta(props) {
	const { title, description, keywords } = props.meta;

	return (
		<div id='Meta' className='meta'>
			<Head>
				<title>{title}</title>
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
				{/* <!--Import Google Icon Font--> */}
				<link
					href='https://fonts.googleapis.com/icon?family=Material+Icons'
					rel='stylesheet'
				/>
				{/* <!--Import materialize.css--> */}
				<link
					type='text/css'
					rel='stylesheet'
					href='css/materialize.min.css'
					media='screen,projection'
				/>
			</Head>
			{props.children}
			{/* <!--JavaScript at end of body for optimized loading--> */}
			<script type='text/javascript' src='js/materialize.min.js'></script>
		</div>
	);
}

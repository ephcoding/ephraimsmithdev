import PageBranding from "./PageBranding";

export default function Header({ pageBranding, navigation }) {
	const { logo, pageTitle } = pageBranding;
	return (
		<header className='header'>
			<PageBranding logo={logo} pageTitle={pageTitle} />
			{navigation}
		</header>
	);
}

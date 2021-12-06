import MetaContainer from "@/components/MetaContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_META_DATA } from "../sitedata/pages";
import PageBrandingLogo from "@/components/PageBrandingLogo";
import MainNav from "@/components/MainNav";

export default function HomePage() {
	const { home } = PAGE_META_DATA;
	const pageBranding = {
		logo: <PageBrandingLogo />,
		pageTitle: home.title,
	};

	return (
		<MetaContainer meta={home}>
			<div className='page home-page'>
				<Header pageBranding={pageBranding} navigation={<MainNav />} />
				<main className='content'></main>
				<Footer />
			</div>
		</MetaContainer>
	);
}

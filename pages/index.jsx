import MetaContainer from "@/components/MetaContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_META_DATA } from "../sitedata/meta_data";

export default function HomePage() {
	const { home } = PAGE_META_DATA;

	return (
		<MetaContainer meta={home}>
			<div className='page home-page'>
				<Header />
				<main className='content'></main>
				<Footer />
			</div>
		</MetaContainer>
	);
}

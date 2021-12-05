import { META_CONTAINER_DATA } from "../sitedata/meta_data";
import MetaContainer from "@/components/MetaContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
	const {
		home: { title, keywords, description },
	} = META_CONTAINER_DATA;

	return (
		<MetaContainer title={title} keywords={keywords} description={description}>
			<div className='home-page'>
				<Header />
				<main className='home-page__content'></main>
				<Footer />
			</div>
		</MetaContainer>
	);
}

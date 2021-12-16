import Meta from "@/components/Meta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_META } from "../sitedata/page-meta";

export default function HomePage() {
	const { home } = PAGE_META;

	return (
		<Meta meta={home}>
			<div className='page home-page'>
				<Header />
				<main className='content'></main>
				<Footer />
			</div>
		</Meta>
	);
}

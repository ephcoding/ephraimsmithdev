import Page from "@/components/Page";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_INFO } from "../sitedata/page_info";

export default function HomePage() {
	const { home } = PAGE_INFO;

	return (
		<Page pageInfo={home}>
			<article>
				<p>Hey, guys. I'm Ephraim.</p>
				<br />
				<p>
					I took the long way around to finding software. In a past life I built
					houses, played Army, sold motorcycles, jumped out of airplanes, played
					guitar, operated heavy equipment, and most recently quality-assured
					software.
				</p>
			</article>
		</Page>
	);
}

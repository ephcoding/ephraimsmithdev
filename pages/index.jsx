import Meta from "@/components/Meta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_META } from "../sitedata/meta";

export default function HomePage() {
	const { home } = PAGE_META;

	return (
		<Meta meta={home}>
			<div className='page home-page'>
				<Header />
				<main className='content'>
					<h1>
						<span className='blue'>Ephraim</span> Smith
					</h1>
					<article>
						<p>Hey, guys. I'm Ephraim.</p>
						<br />
						<p>
							I took the long way around to finding software. In a past life I
							built houses, played Army, sold motorcycles, jumped out of
							airplanes, played guitar, operated heavy equipment, and most
							recently quality-assured software.
						</p>
					</article>
				</main>
				<Footer />
			</div>
		</Meta>
	);
}

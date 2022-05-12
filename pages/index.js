import { PAGE_META } from "site_data";
import { PageWrapper } from "components";

export default function Home() {
	const { homepage_meta: home } = PAGE_META;

	return (
		<PageWrapper page_meta={home}>
			<section id='about-section'>
				<h2>Hey! I'm Ephraim Smith.</h2>
			</section>
			<section id='project-section'>
				<h2>Projects</h2>
			</section>
			<section id='contact-section'>
				<h2>Hit me up</h2>
			</section>
		</PageWrapper>
	);
}

import { PAGE_META } from "site_data";
import { PageWrapper } from "components";

export default function Home() {
	const { homepage_meta: home } = PAGE_META;

	return (
		<PageWrapper page_meta={home}>
			<section id='about-section'></section>
			<section id='project-section'></section>
			<section id='contact-section'></section>
		</PageWrapper>
	);
}

import { PageWrapper } from "components";
import { PAGE_META } from "site_data";

const TornadoActionPage = () => {
	const { tornado_action_page_meta } = PAGE_META;

	return (
		<PageWrapper page_meta={tornado_action_page_meta}>
			<section id='project-intro'>
				<h2>About Tornado Action</h2>
			</section>
			<section>
				<h2>Inspiration</h2>
			</section>
			<section>
				<h2>Features</h2>
			</section>
			<section>
				<h2>Project Status</h2>
			</section>
			<section>
				<h2>Lessons Learned</h2>
			</section>
			<section>
				<h2>Shout Outs</h2>
			</section>
		</PageWrapper>
	);
};

export default TornadoActionPage;

import { JAVASCRIPT, PAGE_META, RESPONSIVE, WEB_APPS } from "../constants";
import { Page, ProjectList } from "../components";

export default function HomePage() {
	const { home } = PAGE_META;

	return (
		<Page pageInfo={home}>
			<h2 className='text-4xl font-bold my-4'>RESPONSIVE WEB DESIGN</h2>
			<ProjectList projects={RESPONSIVE} />
			<h2 className='text-4xl font-bold my-4'>WEB APPS</h2>
			<ProjectList projects={WEB_APPS} />
			<h2 className='text-4xl font-bold my-4'>JAVASCRIPT</h2>
			<ProjectList projects={JAVASCRIPT} />
		</Page>
	);
}

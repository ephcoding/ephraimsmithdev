import { PAGE_META } from "../constants";
import PROJECTS from "../constants/projects";
import { Page, ProjectList } from "../components";

export default function HomePage() {
	const { home } = PAGE_META;

	return (
		<Page pageInfo={home}>
			<ProjectList projects={PROJECTS} />
		</Page>
	);
}

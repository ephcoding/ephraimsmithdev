import Page from "@/components/Page";
import Link from "next/link";
import PAGE_INFO from "../../sitedata/page_info";
import PROJECT_CARD_INFO from "../../sitedata/active_projects";
import Card from "@/components/Card";

export default function ProjectsPage() {
	const { projects: projectPageInfo } = PAGE_INFO;

	const activeProjectsCards = PROJECT_CARD_INFO.map(project => (
		<ul className='project-card-list'>
			<Card cardMeta={project} />
		</ul>
	));

	return <Page pageInfo={projectPageInfo}>{activeProjectsCards}</Page>;
}

import { PAGES, PROJECTS } from "../../js/site_data";
import Card from "@/components/Card";
import Link from "next/link";
import Page from "@/components/Page";

export default function ProjectsPage() {
	const { projects: projectPageInfo } = PAGES;

	const projectCards = PROJECTS.map(project => (
		<ul className='project-card-list'>
			<Card cardMeta={project} />
		</ul>
	));

	return <Page pageInfo={projectPageInfo}>{projectCards}</Page>;
}

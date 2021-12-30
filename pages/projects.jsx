import { PAGES, PROJECTS } from "../js/site_data";
import Card from "@/components/Card";
import Link from "next/link";
import Page from "@/components/Page";

export default function Projects() {
	const { projects } = PAGES;

	const projectCards = PROJECTS.map(project => (
		<ul className='project-card-list'>
			<Card cardMeta={project} key={project.name} />
		</ul>
	));

	return <Page pageInfo={projects}>{projectCards}</Page>;
}

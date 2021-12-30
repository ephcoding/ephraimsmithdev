import { PAGES, PROJECTS } from "../js/site_data";
import Card from "@/components/Card";
import Link from "next/link";
import Page from "@/components/Page";

export default function Home() {
	const { home } = PAGES;

	const projectCards = PROJECTS.map(project => (
		<Card cardMeta={project} key={project.name} />
	));

	return (
		<Page pageInfo={home}>
			<ul className='project-card-list'>{projectCards}</ul>
		</Page>
	);
}

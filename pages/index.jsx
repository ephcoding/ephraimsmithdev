import { PAGES, PROJECTS } from "../site_data/site_data";
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
			<ul className='project-card__list'>{projectCards}</ul>
		</Page>
	);
}

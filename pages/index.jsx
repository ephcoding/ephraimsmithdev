import { PAGE_META, DESIGN, WEB_APPS } from "../site_data";
import ProjectItem from "@/components/ProjectItem";
import Link from "next/link";
import Page from "@/components/Page";
import ProjectList from "@/components/ProjectList";

export default function Home() {
	const { home } = PAGE_META;

	return (
		<Page pageInfo={home}>
			<h2 className='text-4xl font-bold my-4'>RESPONSIVE WEB DESIGN</h2>
			<ProjectList projects={DESIGN} />
			<h2 className='text-4xl font-bold my-4'>WEB APPS</h2>
			<ProjectList projects={WEB_APPS} />
		</Page>
	);
}

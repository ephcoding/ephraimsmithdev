import {
	APIS,
	DESIGN,
	JAVASCRIPT,
	MOBILE_APPS,
	PAGE_META,
	WEB_APPS,
} from "../site_data";
import ProjectItem from "@/components/ProjectItem";
import Link from "next/link";
import Page from "@/components/Page";
import ProjectList from "@/components/ProjectList";

export default function Home() {
	const { home } = PAGE_META;

	return (
		<Page pageInfo={home}>
			<h2 className='text-4xl font-bold my-4'>APIs</h2>
			<ProjectList projects={APIS} />
			<h2 className='text-4xl font-bold my-4'>RESPONSIVE WEB DESIGN</h2>
			<ProjectList projects={DESIGN} />
			<h2 className='text-4xl font-bold my-4'>WEB APPS</h2>
			<ProjectList projects={WEB_APPS} />
			<h2 className='text-4xl font-bold my-4'>JAVASCRIPT</h2>
			<ProjectList projects={JAVASCRIPT} />
			<h2 className='text-4xl font-bold my-4'>MOBILE APPS</h2>
			<ProjectList projects={MOBILE_APPS} />
		</Page>
	);
}

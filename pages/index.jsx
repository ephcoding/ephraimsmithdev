import { PAGE_META, MOBILE_APPS } from "../site_data";
import ProjectItem from "@/components/ProjectItem";
import Link from "next/link";
import Page from "@/components/Page";
import ProjectList from "@/components/ProjectList";

export default function Home() {
	const { home } = PAGE_META;

	return (
		<Page pageInfo={home}>
			<p className=''>Mobile Apps</p>
			<ProjectList projects={MOBILE_APPS} />
		</Page>
	);
}

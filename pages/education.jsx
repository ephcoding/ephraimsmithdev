import Link from "next/link";
import {
	APIS,
	RESPONSIVE,
	JAVASCRIPT,
	MOBILE_APPS,
	PAGE_META,
	WEB_APPS,
} from "../constants";
import { Page, ProjectList } from "../components";
import { TOOLS_LIST, PAGE_META } from "../constants";

// import { sortHighLow } from "@/js/util_funcs";

export default function EducationPage() {
	// const sortedTools = TOOLS.sort(({ name }) => sortHighLow(this.name, name));
	const { projects } = PAGE_META;

	return (
		<Page pageInfo={projects}>
			<h2 className='text-4xl font-bold my-4'>APIs</h2>
			<ProjectList projects={APIS} />
			<h2 className='text-4xl font-bold my-4'>RESPONSIVE WEB DESIGN</h2>
			<ProjectList projects={RESPONSIVE} />
			<h2 className='text-4xl font-bold my-4'>WEB APPS</h2>
			<ProjectList projects={WEB_APPS} />
			<h2 className='text-4xl font-bold my-4'>JAVASCRIPT</h2>
			<ProjectList projects={JAVASCRIPT} />
			<h2 className='text-4xl font-bold my-4'>MOBILE APPS</h2>
			<ProjectList projects={MOBILE_APPS} />
		</Page>
	);
}

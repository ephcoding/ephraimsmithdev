import Page from "@/components/Page";
import Link from "next/link";
import { PAGE_INFO } from "../../sitedata/page_info";

export default function ProjectsPage() {
	const { projects } = PAGE_INFO;

	return (
		<Page pageInfo={projects}>
			<div>
				<Link href='/builds/tornado-action'>
					<a>Tornado Action</a>
				</Link>
			</div>
			<div>
				<Link href='/builds/freecodecamp'>
					<a>FreeCodeCamp</a>
				</Link>
			</div>
			<div>
				<Link href='/'>
					<a>HOME</a>
				</Link>
			</div>
		</Page>
	);
}

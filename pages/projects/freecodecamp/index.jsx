import MetaContainer from "@/components/MetaContainer";
import Link from "next/link";
import FCC_PROJECT_LINKS from "../../../sitedata/fcc_project_links.js";
import FccProjectLink from "@/components/FccProjectLink";
import MainNav from "@/components/MainNav";

export default function FreeCodeCamp() {
	return (
		<MetaContainer>
			<h1>FreeCodeCamp Projects</h1>
			<ul>
				{FCC_PROJECT_LINKS.map(link => {
					return <FccProjectLink key={link.repoLink} projectMeta={link} />;
				})}
			</ul>

			<MainNav />

			<div>
				<Link href='/projects'>
					<a>{`<< Back`}</a>
				</Link>
			</div>
			<div>
				<Link href='/'>HOME</Link>
			</div>
		</MetaContainer>
	);
}

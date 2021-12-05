import MetaContainer from "@/components/MetaContainer";
import Link from "next/link";
import FCC_PROJECT_LINKS from "../../../sitedata/fcc_project_links.js";
import FccProjectCard from "@/components/FccProjectCard";
import MainNav from "@/components/MainNav";

export default function FreeCodeCamp() {
	return (
		<MetaContainer>
			<h1>FreeCodeCamp Projects</h1>
			<ul className='fcc-projects'>
				{FCC_PROJECT_LINKS.map(project => {
					return (
						<FccProjectCard key={project.repoLink} projectMeta={project} />
					);
				})}
			</ul>

			<MainNav />

			{/* DEV NAV */}
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

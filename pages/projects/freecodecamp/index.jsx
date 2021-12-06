import MetaContainer from "@/components/MetaContainer";
import Link from "next/link";
import FCC_PROJECT_LINKS from "../../../sitedata/fcc_project_links.js";
import FccProjectCard from "@/components/FccProjectCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_META_DATA } from "../../../sitedata/meta_data";

export default function FreeCodeCamp() {
	const { freecodecamp } = PAGE_META_DATA;
	return (
		<MetaContainer meta={freecodecamp}>
			<div className='freecodecamp-page'>
				<Header />
				<main className='freecodecamp-page__content'>
					<h1>FreeCodeCamp Projects</h1>
					<ul className='fcc-projects'>
						{FCC_PROJECT_LINKS.map(project => {
							return (
								<FccProjectCard key={project.repoLink} projectMeta={project} />
							);
						})}
					</ul>
				</main>
				<Footer />
			</div>
		</MetaContainer>
	);
}

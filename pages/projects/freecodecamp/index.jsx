import MetaContainer from "@/components/MetaContainer";
import Link from "next/link";
import FCC_PROJECT_META from "../../../sitedata/fcc_projects.js";
import FccProjectCard from "@/components/FccProjectCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_META_DATA } from "../../../sitedata/pages";

export default function FreeCodeCamp() {
	const { freecodecamp } = PAGE_META_DATA;

	return (
		<MetaContainer meta={freecodecamp}>
			<div className='page freecodecamp-page'>
				<Header />
				<main className='content'>
					<h1>
						FreeCodeCamp <span className='white'>Projects</span>
					</h1>

					{FCC_PROJECT_META.map(({ certificate, projects }) => {
						const projectCards = projects.map(project => (
							<FccProjectCard key={project.repoLink} projectMeta={project} />
						));

						return (
							<section>
								<h2 key={certificate}>{certificate}</h2>
								<ul className='fcc-projects'>{projectCards}</ul>
							</section>
						);
					})}
				</main>
				<Footer />
			</div>
		</MetaContainer>
	);
}

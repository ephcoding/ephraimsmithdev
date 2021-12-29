import Meta from "@/components/Page";
import Link from "next/link";
import FCC_PROJECT_META from "../../../sitedata/fcc_projects.js";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_INFO } from "../../../sitedata/page_info";

export default function FreeCodeCamp() {
	const { freecodecamp } = PAGE_INFO;

	return (
		<Meta meta={freecodecamp}>
			<div className='page freecodecamp-page'>
				<Header />
				<main className='content'>
					<h1>
						FreeCodeCamp <span className='white'>Projects</span>
					</h1>

					{FCC_PROJECT_META.map(({ certificate, projects }) => {
						const projectCards = projects.map(project => (
							<ProjectCard key={project.repoLink} projectMeta={project} />
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
		</Meta>
	);
}

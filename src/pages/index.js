import Link from "next/link";
import { PageWrapper, ProjectCard } from "components";
import { PROJECTS } from "site-data";

export default function HomePage() {
	return (
		<PageWrapper>
			<section id='projects-section'>
				{PROJECTS.map((projectInfo) => (
					<ProjectCard project_info={projectInfo} />
				))}
			</section>
			<section id='experience-section'></section>
			<section id='education-section'></section>
		</PageWrapper>
	);
}

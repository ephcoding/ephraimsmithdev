import Link from "next/link";
import Image from "next/image";
import { PageWrapper, ProjectCard } from "components";
import { PROJECTS, SOFTWARE_EXPERIENCE } from "site-data";

export default function HomePage() {
	return (
		<PageWrapper>
			<section
				id='projects-section'
				className='md:grid md:grid-cols-2 md:gap-4'
			>
				<div className='container mx-auto px-4'>
					{PROJECTS.map((projectInfo) => (
						<ProjectCard project_info={projectInfo} />
					))}
				</div>
			</section>
			<section id='experience-section' className='bg-secondary'>
				{SOFTWARE_EXPERIENCE.map((company) => {
					const { co_name, logo_src, from_year, to_year, achievements } =
						company;

					return (
						<article
							key={company.co_name}
							className='text-xs container mx-auto px-5'
						>
							<div className='flex items-center justify-center border-2 border-red-500'>
								<div className='mr-5'>
									<Image
										src={logo_src}
										alt={`${co_name} company logo`}
										height={50}
										width={50}
									/>
								</div>
								<div>
									<p className='uppercase text-center'>{co_name}</p>
									<p className='text-center'>
										{from_year} - {to_year}
									</p>
								</div>
							</div>
							<div className='border-2 border-red-500'>
								<ul className='list-disc leading-4'>
									{achievements.map((item, index) => (
										<li key={`${item.slice(0, 10)}-${index}`} className='py-2'>
											{item}
										</li>
									))}
								</ul>
							</div>
						</article>
					);
				})}
			</section>
			<section id='education-section'></section>
		</PageWrapper>
	);
}

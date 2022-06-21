import Link from "next/link";
import { PageWrapper } from "components";
import { PROJECTS } from "site-data";

export default function HomePage() {
	return (
		<PageWrapper>
			<section id='projects-section'>
				{PROJECTS.map(({ name, description, img_src, hrefs }) => (
					<div className='card card-compact card-bordered bg-base-100 shadow-xl'>
						<figure>
							<img src={img_src} alt='Album' />
						</figure>
						<div className='card-body'>
							<h2 className='card-title'>{name}</h2>
							<p>{description}</p>
							<div className='card-actions justify-end'>
								<Link href={hrefs.code}>
									<a target='_blank'>
										<button className='btn btn-primary'>code</button>
									</a>
								</Link>
								<Link href={hrefs.live_project}>
									<a target='_blank'>
										<button className='btn btn-primary'>see it live</button>
									</a>
								</Link>
							</div>
						</div>
					</div>
				))}
			</section>
			<section id='experience-section'></section>
			<section id='education-section'></section>
		</PageWrapper>
	);
}

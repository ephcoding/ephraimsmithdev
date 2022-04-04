import Link from "next/link";
import Image from "next/image";

const ProjectLink = ({ link }) => {
	return (
		<Link href={link.url} key={link.label}>
			<a target='_blank'>{link.label}</a>
		</Link>
	);
};

const ProjectLinks = ({ links }) => {
	return (
		<div className='flex justify-around mt-2'>
			{links.map(link => (
				<ProjectLink link={link} />
			))}
		</div>
	);
};

const ProjectTech = ({ technologies }) => {
	const tags = technologies.map(tech => (
		<li key={tech} className='bg-slate-500 rounded-md m-1 py-0.5 px-2 text-sm'>
			{tech}
		</li>
	));

	return <ul className='flex flex-wrap'>{tags}</ul>;
};

const ProjectItem = ({ project }) => {
	const { title, imgURI, description, tech, links } = project;

	return (
		<li
			className='bg-neutral-300 rounded-md pb-3 shadow-lg shadow-slate-400/50 text-black'
			key={title}
		>
			<h3 className='font-bold px-2 py-3 text-center text-xl uppercase'>
				{title}
			</h3>
			<Image
				src={`/${imgURI}`}
				alt={`${title} image`}
				height={150}
				width={225}
				layout='responsive'
			/>
			<div className='flex flex-col h-100 px-2'>
				<p className='grow my-2 text-sm'>{description}</p>
				<ProjectTech technologies={tech} />
				<ProjectLinks links={links} />
			</div>
		</li>
	);
};

export const ProjectList = ({ projects }) => {
	return (
		<ul className='grid gap-8 grid-col-1 sm:grid-cols-2 md:grid-cols-3'>
			{projects.map(project => (
				<ProjectItem key={project.title} project={project} />
			))}
		</ul>
	);
};

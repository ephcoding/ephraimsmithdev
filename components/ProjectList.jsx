import Link from "next/link";
import Image from "next/image";

const ProjectLink = ({ link }) => {
	return (
		<Link href={link.url}>
			<a target='_blank'>{link.label}</a>
		</Link>
	);
};

const ProjectLinks = ({ links }) => {
	return (
		<div className='flex justify-around mt-2'>
			{links.map(link => (
				<ProjectLink link={link} key={link.url} />
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
	const { title, src, description, tech_labels, links } = project;

	return (
		<li
			className='p-3 rounded-md shadow-xl shadow-neutral-800 bg-neutral-600'
			key={title}
		>
			<Image
				src={`/${src}`}
				alt={`${title} image`}
				height={150}
				width={225}
				layout='responsive'
			/>
			<h2 className='font-bold text-sm uppercase'>{title}</h2>
			<ProjectTech technologies={tech_labels} />
			<p className='text-xs my-3'>{project.description}</p>
			<Link href={project.href}>
				<a className='bg-gradient-to-r from-lime-300 to-green-600 mt-3 flex flex-col h-100 px-2'>
					<span className='grow my-2 text-center'>SEE IT LIVE</span>
				</a>
			</Link>
		</li>
	);
};

export const ProjectList = ({ projects }) => {
	return (
		<ul className='grid gap-8 grid-col-1 sm:grid-cols-2 lg:grid-cols-3'>
			{projects.map(project => (
				<ProjectItem key={project.title} project={project} />
			))}
		</ul>
	);
};

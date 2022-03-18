import Image from "next/image";
import ProjectLinks from "./ProjectLinks";
import ProjectTech from "./ProjectTech";
import marsIMG from "../public/bg_mars-glowing.jpg";

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

export default ProjectItem;

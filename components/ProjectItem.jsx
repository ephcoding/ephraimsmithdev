import Image from "next/image";
import ProjectLinks from "./ProjectLinks";
import ProjectTech from "./ProjectTech";
import marsIMG from "../public/bg_mars-glowing.jpg";

const ProjectItem = ({ project }) => {
	const { title, imgURI, description, tech, links } = project;

	return (
		<li
			className='bg-neutral-900 shadow-lg rounded-md py-3 shadow-slate-400/50'
			key={title}
		>
			<h3 className='border-b border-b-yellow-300 text-center text-xl uppercase'>
				{title}
			</h3>
			<Image
				src={`/${imgURI}`}
				alt={`${title} image`}
				height={150}
				width={225}
				layout='responsive'
			/>
			<div className='border-t border-t-yellow-300 flex flex-col h-100 px-2'>
				<p className='grow my-2 text-sm'>{description}</p>
				<ProjectTech technologies={tech} />
				<ProjectLinks links={links} />
			</div>
		</li>
	);
};

export default ProjectItem;

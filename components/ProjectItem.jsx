import Image from "next/image";
import ProjectLinks from "./ProjectLinks";
import ProjectTags from "./ProjectTags";
import marsIMG from "../public/bg_mars-glowing.jpg";

const ProjectItem = ({ project }) => {
	const { title, imgURI, description, tech, links } = project;

	return (
		<li className='bg-neutral-700' key={title} style={{ postion: "relative" }}>
			<h3 className='text-center'>{title}</h3>
			<Image
				src={`/${imgURI}`}
				alt={`${title} image`}
				height={150}
				width={225}
				layout='responsive'
			/>
			<p>{description}</p>
			<ProjectTags cardTags={tech} />
			{/* <ProjectLinks links={links} /> */}
		</li>
	);
};

export default ProjectItem;

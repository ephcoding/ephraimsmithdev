import Image from "next/image";
import ProjectLinks from "./ProjectLinks";
import ProjectTags from "./ProjectTags";
import marsIMG from "../public/bg_mars-glowing.jpg";

const ProjectItem = ({ project }) => {
	const { title, imgURI, description, tech, links } = project;

	return (
		<li className='bg-neutral-700' key={title}>
			<h3 className='text-center'>{title}</h3>
			<figure>
				<Image alt='test image' src={marsIMG} />
				<figcaption>{description}</figcaption>
			</figure>
			<ProjectTags cardTags={tech} />
			{/* <ProjectLinks links={links} /> */}
		</li>
	);
};

export default ProjectItem;

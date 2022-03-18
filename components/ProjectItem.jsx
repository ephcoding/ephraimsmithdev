import Image from "next/image";
import ProjectLinks from "./ProjectLinks";
import ProjectTags from "./ProjectTags";

const ProjectItem = ({ project }) => {
	const { title, imgURI, description, tech, links } = project;

	return (
		<li className='bg-neutral-700' key={title}>
			<h3>{title}</h3>
			<figure>
				{/* <Image
          layout='fill'
          objectFit='contain'
          src={require("../public/bg_mars-glowing.jpg")}
        /> */}
				<figcaption>{description}</figcaption>
			</figure>
			<ProjectTags cardTags={tech} />
			<ProjectLinks links={links} />
		</li>
	);
};

export default ProjectItem;

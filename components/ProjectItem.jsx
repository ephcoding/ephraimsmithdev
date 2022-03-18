import Image from "next/image";
import ProjectLinks from "@/components/ProjectLinks";
// import CardTags from "@/components/CardTags";

const ProjectItem = ({ project }) => {
  const { title, imgURL, description, tech, links } = project;

  return (
    <li className="bg-neutral-700" key={title}>
      <h3 className="text-2xl text-center">{title}</h3>
      <div className="card__content">
        <div className="card__text">
          {/* <Image
						layout='fill'
						objectFit='contain'
						src={require("../public/bg_mars-glowing.jpg")}
					/> */}
          <p className="card__description">{description}</p>
        </div>
        <ProjectLinks links={links} />
      </div>
      <ProjectItem cardTags={tech} />
    </li>
  );
};

export default ProjectItem;

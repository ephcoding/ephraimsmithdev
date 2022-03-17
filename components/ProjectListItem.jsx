import Image from "next/image";
import CardLinks from "@/components/ProjectLinks";
// import CardTags from "@/components/CardTags";

const ProjectListItem = ({ project }) => {
	const { title, imgURL, description, tech, links } = project;

	return (
		<li className='border border-red-500' key={title}>
			<div className='card__content'>
				<div className='card__text'>
					<h2 className='text-red-500'>{title}</h2>
					{/* <Image
						layout='fill'
						objectFit='contain'
						src={require("../public/bg_mars-glowing.jpg")}
					/> */}
					<p className='card__description'>{description}</p>
				</div>
				{/* <CardLinks links={urls} /> */}
			</div>
			{/* <CardTags cardTags={tech} /> */}
		</li>
	);
};

export default ProjectListItem;

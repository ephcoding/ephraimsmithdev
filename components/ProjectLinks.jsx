import {
	FaGithub,
	FaTools,
	FaHome,
	FaLinkedin,
	FaMobileAlt,
	FaTv,
	FaTwitter,
} from "react-icons/fa";
import ProjectLink from "./ProjectLink";

const ProjectLinks = ({ links }) => {
	return (
		<div className='flex justify-around mt-2'>
			{links.map(link => (
				<ProjectLink link={link} />
			))}
		</div>
	);
};

export default ProjectLinks;

// {appStore ? (
//   <Link href={appStore}>
//     <a target="_blank" className="card__link">
//       <FaMobileAlt size={20} title="AppStore" />
//       <span>app store</span>
//     </a>
//   </Link>
// ) : null}
// {repo ? (
//   <Link href={repo}>
//     <a target="_blank" className="card__link">
//       <FaGithub size={20} title="GitHub" />
//       <span>code</span>
//     </a>
//   </Link>
// ) : null}
// {site ? (
//   <Link href={site}>
//     <a target="_blank" className="project-link">
//       <FaTv size={20} title="Website" />
//       <span>website</span>
//     </a>
//   </Link>
// ) : null}

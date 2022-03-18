import {
	FaGithub,
	FaTools,
	FaHome,
	FaLinkedin,
	FaMobileAlt,
	FaTv,
	FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

const ProjectLinks = ({ links }) => {
	return (
		<div className='flex justify-around mt-2'>
			{links.map(link => {
				// const { label, url } = link;

				return (
					<Link href={link.url} key={link.label}>
						<a target='_blank'>{link.label}</a>
					</Link>
				);
			})}
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

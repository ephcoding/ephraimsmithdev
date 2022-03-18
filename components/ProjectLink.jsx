import Link from "next/link";
import {
	FaGithub,
	FaTools,
	FaHome,
	FaLinkedin,
	FaMobileAlt,
	FaTv,
	FaTwitter,
} from "react-icons/fa";

const ProjectLink = ({ link }) => {
	return (
		<Link href={link.url} key={link.label}>
			<a target='_blank'>{link.label}</a>
		</Link>
	);
};

export default ProjectLink;

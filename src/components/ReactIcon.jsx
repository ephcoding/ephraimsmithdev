import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const ReactIconLink = ({ name }) => {
	const iconMap = {
		envelope: FaEnvelope,
		github: FaGithub,
		linkedin: FaLinkedin,
		twitter: FaTwitter,
	};
	const Component = iconMap[name];

	return <Component size={25} />;
};

import { IconContext } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const ReactIconLink = ({ name }) => {
	const iconMap = {
		envelope: FaEnvelope,
		github: FaGithub,
		linkedin: FaLinkedin,
		twitter: FaTwitter,
	};
	const Component = iconMap[name];

	return (
		<IconContext.Provider
			value={{ className: "text-content text-2xl md:text-3xl" }}
		>
			<Component />
		</IconContext.Provider>
	);
};

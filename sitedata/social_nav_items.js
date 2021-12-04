import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const iconStyles = {
	color: "$black",
	height: "1rem",
};

export const SOCIAL_NAV_LINKS = [
	{
		label: "Github",
		reactIcon: <FaGithub style={iconStyles} />,
		url: "https://github.com/ephcoding",
		username: "ephcoding",
	},
	{
		label: "Twitter",
		reactIcon: <FaTwitter style={iconStyles} />,
		url: "https://www.twitter.com/ephcoding",
		username: "ephcoding",
	},
	{
		label: "LinkedIn",
		reactIcon: <FaLinkedin style={iconStyles} />,
		url: "https://www.linkedin.com/in/ephraimjsmith",
		username: "ephraimjsmith",
	},
];

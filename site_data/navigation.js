import {
	FaGithub,
	FaTools,
	FaHome,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa";

const SITE_NAV = [
	{
		label: "home",
		url: "/",
		title: "ephraimsmith.dev",
	},
	{
		label: "tools",
		url: "/tools",
		title: "tools",
	},
];

const SOCIAL_NAV = [
	{
		label: "github",
		url: "https://github.com/ephcoding",
		icon: <FaGithub size={20} title='github' />,
	},
	{
		label: "twitter",
		url: "https://www.twitter.com/ephcoding",
		icon: <FaTwitter size={20} title='twitter' />,
	},
	{
		label: "linkedin",
		url: "https://www.linkedin.com/in/ephcoding",
		icon: <FaLinkedin size={20} title='linkedin' />,
	},
];

export { SITE_NAV, SOCIAL_NAV };

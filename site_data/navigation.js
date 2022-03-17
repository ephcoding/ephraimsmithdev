import {
	FaGithub,
	FaTools,
	FaHome,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa";

const SITE = {};

const SOCIAL = {};

export const NAV_ITEMS = [
	{
		label: "home",
		url: "/",
		icon: <FaHome size={22} title='ephraimsmith.dev' />,
	},
	{
		label: "tools",
		url: "/tools",
		icon: <FaTools size={20} title='tools' />,
	},
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

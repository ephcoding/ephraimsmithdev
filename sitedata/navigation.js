import { FaBook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const NAVIGATION = [
	{
		label: "projects",
		url: "/projects",
	},
	{
		label: "github",
		url: "https://github.com/ephraimsmith",
		icon: <FaGithub size={20} title='github' />,
	},
	{
		label: "resources",
		url: "/resources",
		icon: <FaBook size={20} title='resources' />,
	},
	{
		label: "twitter",
		url: "https://www.twitter.com/_ephraimsmith",
		icon: <FaTwitter size={20} title='twitter' />,
	},
	{
		label: "linkedin",
		url: "https://www.linkedin.com/in/ephraimjsmith",
		icon: <FaLinkedin size={20} title='linkedin' />,
	},
];

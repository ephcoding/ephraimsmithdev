import { FaBook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const NAVIGATION = [
	{
		label: "blog",
		url: "/blog",
	},
	{
		label: "builds",
		url: "/builds",
	},
	{
		label: "resources",
		url: "/resources",
		icon: <FaBook size={20} title='resources' />,
	},
	{
		label: "github",
		url: "https://github.com/ephcoding",
		icon: <FaGithub size={20} title='GitHub' />,
	},
	{
		label: "twitter",
		url: "https://www.twitter.com/ephcoding",
		icon: <FaTwitter size={20} title='Twitter' />,
	},
	{
		label: "linkedin",
		url: "https://www.linkedin.com/in/ephraimjsmith",
		icon: <FaLinkedin size={20} title='LinkedIn' />,
	},
];

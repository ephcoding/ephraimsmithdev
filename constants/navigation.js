import {
	FaGithub,
	FaTools,
	FaHome,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa";

const PROJECTS_NAV = [
	{
		label: "Responsive Design",
		url: "#design",
		title: "Responsive Web Design",
	},
	{
		label: "JavaScript",
		url: "#javascript",
		title: "JavaScript",
	},
	{
		label: "Mobile",
		url: "#mobile",
		title: "Mobile Apps",
	},
	{
		label: "Web Apps",
		url: "#web-apps",
		title: "Web Apps",
	},
];

const SITE_NAV = [
	// home = projects
	{
		label: "projects",
		href: "/",
		title: "ephraimsmith.dev",
	},
	{
		label: "training",
		href: "/training",
		title: "training",
	},
	// {
	// 	label: "posts",
	// 	href: "/posts",
	// 	title: "posts",
	// },

	// {
	// 	label: "tools",
	// 	href: "/tools",
	// 	title: "tools",
	// },
	// {
	// 	label: "connect",
	// 	href: "/connect",
	// 	title: "connect",
	// },
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

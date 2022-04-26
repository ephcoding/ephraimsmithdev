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
		label: "home",
		href: "/",
		title: "ephraimsmith.dev",
	},
	{
		label: "learn",
		href: "/education",
		title: "education",
	},
	{
		label: "build",
		href: "/build",
		title: "build",
	},
	{
		label: "share",
		href: "/share",
		title: "share",
	},
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

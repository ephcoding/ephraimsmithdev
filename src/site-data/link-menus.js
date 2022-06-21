import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const SITE_NAV = [
	{ name: "projects", tooltip: "Projects", href: "#projects" },
	{ name: "experience", tooltip: "Experience", href: "#experience" },
	{ name: "education", tooltip: "Education", href: "#education" },
];

export const SOCIAL_LINKS = [
	{
		name: "email",
		href: "mailto:ephraim@modevx.com",
		icon: FaEnvelope,
	},
	{
		name: "GitHub",
		href: "https://github.com/ephbuilding",
		icon: FaGithub,
	},
	{
		name: "Twitter",
		href: "https://twitter.com/ephbuilding",
		icon: FaTwitter,
	},
	{
		name: "LinkedIn",
		href: "https://linkedin.com/in/ephbuilding",
		icon: FaLinkedin,
	},
];

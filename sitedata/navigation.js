import {
	FaBook,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
// import ModevxIcon from "../components/ModevxIcon";
// import "../sass/variables.scss";

export const NAVIGATION = [
	{
		label: "projects",
		url: "/projects",
	},
	{
		label: "modevx",
		url: "https://modevx.com",
		// icon: <ModevxIcon height={25} width={25} fill={`${$grey}`} />,
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

	// {
	// 	label: "instagram",
	// 	url: "https://www.instagram.com/ephcoding/",
	// 	icon: <FaInstagram size={20} title='GitHub' />,
	// },
];

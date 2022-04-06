import Link from "next/link";
import {
	FaCss3,
	FaGithub,
	FaHome,
	FaHtml5,
	FaLinkedin,
	FaMobileAlt,
	FaReact,
	FaSass,
	FaTools,
	FaTv,
	FaTwitter,
} from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
// GITHUB BASE URLS
const GH_REPO_BASE = "https://github.com/ephraimsmithdev";
const GH_PAGES_BASE = "https://ephraimsmithdev.github.io";

// export const APIS = [
// 	{
// 		title: "VORTX",
// 		src: "p-vortx.jpg",
// 		description:
// 			"VORTX is a REST API that will give developers access to over 65,000 historical tornado events.  VORTX will pull double-duty as the initial data source for my upcoming project, tornadoaction.com.",
// 		tech_labels: ["GraphQL", "Hasura", "Knex", "PostgreSQL"],
// 		href: `${GH_PAGES_BASE/vortx}`,
// 			},
// 		],
// 	},
// ];

export default [
	// {
	// 	title: "ALSTR",
	// 	src: "p-alstr.jpg",
	// 	description:
	// 		"ALSTR ( Algo-Strategy ) is my long-term project where I'll develop a platform for implementing my own algorithmic stock trading strategies.",
	// 	tech_labels: ["Cloud Architecture", "Event-Driven Data", "Websockets"],
	// 	href: [
	// 		{
	// 			label: "GitHub",
	// 			url: "https://www.github.com/ephraimsmithdev/alstr",
	// 		},
	// 	],
	// },
	{
		title: "Calculator",
		src: "p-calculator.png",
		description:
			"Tired of using a standard-looking calculator?  Check out this one with a natural wood finish.",
		tech_labels: ["CSS", "GitHub Pages", "React", "Sass"],
		href: [
			{
				label: "GitHub",
				url: `${GH_REPO_BASE}/js-calculator`,
			},
			{
				label: "App",
				url: `${GH_PAGES_BASE}/js-calculator`,
			},
		],
	},
	{
		title: "Caesars Cipher",
		src: "",
		description:
			"Cipher decoder.  JavaScript algorithm that processes and returns decoded ciphers with a 13-character offset.",
		tech_labels: ["JavaScript", "Algorithms", "Data Structures"],
		href: `${GH_REPO_BASE}/freecodecamp-javascript-certificate/blob/main/08_caesars_cipher.js`,
	},
	{
		title: "Cash Register",
		src: "",
		description:
			"Not good at making change?  It's all good.  This JavaScript cash register algorithm will handle that drawer for you.",
		tech_labels: ["JavaScript", "Algorithms", "Data Structures"],
		href: `${GH_REPO_BASE}/freecodecamp-javascript-certificate/blob/main/10_cash_register.js`,
	},
	{
		title: "Drum Machine",
		src: "p-drum-machine.png",
		description:
			"Using 1 hand and your keyboard, make...err some noise with either the 'Big and Heavy' or 'Pearl' drum kits.  Built with React and Sass",
		tech_labels: ["CSS", "GitHub Pages", "React", "Sass"],
		href: [
			{
				label: "GitHub",
				url: `${GH_REPO_BASE}/drum-machine`,
			},
			{
				label: "App",
				url: `${GH_PAGES_BASE}/drum-machine`,
			},
		],
	},
	{
		title: "Landing Page Template",
		src: "p-product-landing-page.png",
		description:
			"Responsive landing page design for the fictitious rock luthier business, 'Axesmith'.  Written in pure HTML and CSS.",
		tech_labels: ["HTML", "CSS"],
		href: `${GH_PAGES_BASE}/product-landing-page`,
	},
	{
		title: "Markdown Previewer",
		src: "p-markdown-previewer.png",
		description:
			"Learning markdown?  Just need to check the output of some weird syntax?  Have 'Markdown Previewer' show you what that markdown's going to look like.",
		tech_labels: ["CSS", "GitHub Pages", "marked", "React", "Sass"],
		href: [
			{
				label: "GitHub",
				url: `${GH_REPO_BASE}/markdown-previewer`,
			},
			{
				label: "App",
				url: `${GH_PAGES_BASE}/markdown-previewer`,
			},
		],
	},
	{
		title: "Pomodoro Clock",
		src: "p-pomodoro-clock.png",
		description:
			"Get productive.  Pomodoro-style!  Tailor your work and break times for maximum productivity.  Manually set up the tooling for React, Sass, and GitHub deployment using Parcel.",
		tech_labels: ["CSS", "GitHub Pages", "Parcel", "React", "Sass"],
		href: [
			{
				label: "GitHub",
				url: `${GH_REPO_BASE}/pomodoro`,
			},
			{
				label: "App",
				url: `${GH_PAGES_BASE}/pomodoro`,
			},
		],
	},
	{
		title: "Portfolio Site Template",
		src: "p-portfolio-page.png",
		description:
			"Responsive portfolio site design.  Currently building a mobile app product landing page template based on this project.  Written in pure HTML and CSS.",
		tech_labels: ["HTML", "CSS"],
		href: `${GH_PAGES_BASE}/portfolio-page`,
	},
	{
		title: "Random Quote Machine",
		src: "p-quote-generator.png",
		description:
			"Find some motivation, or entertainment, from some of the smartest people in technology.  Browse quotes while enjoying background images from NASA.",
		tech_labels: ["APIs", "Axios", "GitHub Pages", "React"],
		href: [
			{
				label: "GitHub",
				url: `${GH_REPO_BASE}/random-quote-machine`,
			},
			{
				label: "App",
				url: `${GH_PAGES_BASE}/random-quote-machine`,
			},
		],
	},
	{
		title: "Roman Numeral Converter",
		src: "",
		description:
			"Algorithm written in JavaScript that translates numbers into Roman numerals.",
		tech_labels: ["JavaScript", "Algorithms", "Data Structures"],
		href: `${GH_REPO_BASE}/freecodecamp-javascript-certificate/blob/main/07_roman-numeral-converter.js`,
	},
	// 	{
	// 		title: "ROVERCAM",
	// 		src: "p-rovercam.png",
	// 		description:
	// 			"ROVERCAM is a cross-platform mobile app that gives users access to thousands of photos taken on Mars by the 4 Mars Rovers: Curiosity, Opportunity, Perseverance, and Spirit.",
	// 		tech_labels: ["React Native"],
	// 		href: "https://www.rovercamapp.com"
	// 	},
	{
		title: "Survey Form Template",
		src: "p-survey-form.png",
		description:
			"Responsive survey form design.  Written in pure HTML and CSS.",
		tech_labels: ["HTML", "CSS"],
		href: `${GH_PAGES_BASE}/survey-form`,
	},

	{
		title: "Technical Documentation Page",
		src: "p-tech-docs-page.png",
		description:
			"Responsive technical documentation page design.  Written in pure HTML and CSS.",
		tech_labels: ["HTML", "CSS"],
		href: `${GH_PAGES_BASE}/technical-documentation-page`,
	},
	{
		title: "Telephone Number Validator",
		src: "",
		description:
			"JavaScript algorithm that utilizes RegEx to verify that a phone number matches one of many commonly used formats.",
		tech_labels: ["JavaScript", "Algorithms", "Data Structures"],
		href: `${GH_REPO_BASE}/freecodecamp-javascript-certificate/blob/main/09_telephone-number-validator.js`,
	},
	{
		title: "TORNADO ACTION",
		src: "p-tornado-action.png",
		description:
			"Visual-first web app for all things tornado-related.  I wanted to build a UI-heavy, engaging application that was both fun and practical.  To keep costs down I honed in on freely available datasets.  Between NOAA, NASA, the National Weather Service, and the Storm Prediction Center, it's APIs-for-days...",
		tech_labels: ["Data Visualization", "Frontend Framework"],
		href: "https://www.tornadoaction.com",
	},
];

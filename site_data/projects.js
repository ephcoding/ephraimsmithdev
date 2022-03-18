import Link from "next/link";
import {
	FaGithub,
	FaTools,
	FaHome,
	FaLinkedin,
	FaMobileAlt,
	FaTv,
	FaTwitter,
} from "react-icons/fa";
// GITHUB BASE URLS
const GH_REPO_BASE = "https://github.com/ephraimsmithdev";
const GH_PAGES_BASE = "https://ephraimsmithdev.github.io";

/**
 * PROJECT TEMPLATE
 *
 * {
 *    title:
 *    imgURI:
 *    description:
 *    tech: string[]
 *    links: component[
 *        <GitHubLink/>,
 *        <WebLink/>,
 *        <AppStoreLink/>,
 *        <PlayStoreLink/>
 *    ]
 * }
 *
 */

export const APIS = [
	{
		title: "VORTX",
		imgURI: "p-vortx.jpg",
		description:
			"VORTX is a REST API that will give developers access to over 65,000 historical tornado events.  VORTX will pull double-duty as the initial data source for my upcoming project, tornadoaction.com.",
		tech: ["GraphQL", "Hasura", "Knex", "PostgreSQL"],
		links: [
			{
				label: "GitHub",
				url: "https://github.com/ephraimsmithdev/vortx",
			},
		],
	},
];

export const DESIGN = [
	{
		title: "Tribute Page",
		imgURI: "p-tribute-page.png",
		description:
			"Being the first project I ever coded, this project remains unchanged.  To appreciate where we are, we have to remember where we started.",
		tech: ["HTML", "CSS"],
		links: [{ label: "GitHub", url: `${GH_REPO_BASE}/tribute-page` }],
	},
	{
		title: "Survey Form",
		imgURI: "p-survey-form.png",
		description:
			"Responsive survey form design.  Written in pure HTML and CSS.",
		tech: ["HTML", "CSS"],
		links: [{ label: "GitHub", url: `${GH_REPO_BASE}/survey-form` }],
	},
	{
		title: "Product Landing Page",
		imgURI: "p-product-landing-page.png",
		description:
			"Responsive landing page design for the fictitious rock luthier business, 'Axesmith'.  Written in pure HTML and CSS.",
		tech: ["HTML", "CSS"],
		links: [{ label: "GitHub", url: `${GH_REPO_BASE}/product-landing-page` }],
	},
	{
		title: "Technical Documentation Page",
		imgURI: "p-tech-docs-page.png",
		description:
			"Responsive technical documentation page design.  Written in pure HTML and CSS.",
		tech: ["HTML", "CSS"],
		links: [
			{ label: "GitHub", url: `${GH_REPO_BASE}/technical-documentation-page` },
		],
	},
	{
		title: "Portfolio Page",
		imgURI: "p-portfolio-page.png",
		description:
			"Responsive portfolio site design.  Currently building a mobile app product landing page template based on this project.  Written in pure HTML and CSS.",
		tech: ["HTML", "CSS"],
		links: [{ label: "GitHub", url: `${GH_REPO_BASE}/portfolio-page` }],
	},
];

export const JAVASCRIPT = [
	{
		title: "Palindrome Checker",
		imgURI: "",
		description:
			"Forwards or backwards, Palindrome Checker will make sure you're the same!",
		tech: ["JavaScript", "Algorithms", "Data Structures"],
		links: [
			{
				label: "GitHub",
				url: `${GH_REPO_BASE}/freecodecamp-javascript-certificate/blob/main/06_palindrome-checker.js`,
			},
		],
	},
	{
		title: "Roman Numeral Converter",
		imgURI: "",
		description:
			"Algorithm written in JavaScript that translates numbers into Roman numerals.",
		tech: ["JavaScript", "Algorithms", "Data Structures"],
		links: [
			{
				label: "GitHub",
				url: `${GH_REPO_BASE}/freecodecamp-javascript-certificate/blob/main/07_roman-numeral-converter.js`,
			},
		],
	},
	{
		title: "Caesars Cipher",
		imgURI: "",
		description:
			"Cipher decoder.  JavaScript algorithm that processes and returns decoded ciphers with a 13-character offset.",
		tech: ["JavaScript", "Algorithms", "Data Structures"],
		links: [
			{
				label: "GitHub",
				url: `${GH_REPO_BASE}/freecodecamp-javascript-certificate/blob/main/08_caesars_cipher.js`,
			},
		],
	},
	{
		title: "Telephone Number Validator",
		imgURI: "",
		description:
			"JavaScript algorithm that utilizes RegEx to verify that a phone number matches one of many commonly used formats.",
		tech: ["JavaScript", "Algorithms", "Data Structures"],
		links: [
			{
				label: "GitHub",
				url: `${GH_REPO_BASE}/freecodecamp-javascript-certificate/blob/main/09_telephone-number-validator.js`,
			},
		],
	},
	{
		title: "Cash Register",
		imgURI: "",
		description:
			"Not good at making change?  It's all good.  This JavaScript cash register algorithm will handle that drawer for you.",
		tech: ["JavaScript", "Algorithms", "Data Structures"],
		links: [
			{
				label: "GitHub",
				url: `${GH_REPO_BASE}/freecodecamp-javascript-certificate/blob/main/10_cash_register.js`,
			},
		],
	},
];

export const MOBILE_APPS = [
	{
		title: "ROVERCAM",
		imgURI: "p-rovercam.png",
		description:
			"ROVERCAM is a cross-platform mobile app that gives users access to thousands of photos taken on Mars by the 4 Mars Rovers: Curiosity, Opportunity, Perseverance, and Spirit.",
		tech: ["React Native"],
		links: [
			{
				label: "GitHub",
				url: "https://github.com/modevx/rovercam",
			},
			// {
			// 	label: "Play Store",
			// 	url: "https://github.com/modevx/rovercam"
			// },
			// {
			// 	label: "App Store",
			// 	url: "https://github.com/modevx/rovercam"
			// },
		],
	},
];

export const WEB_APPS = [
	{
		title: "ALSTR",
		imgURI: "p-alstr.jpg",
		description:
			"ALSTR ( Algo-Strategy ) is my long-term project where I'll develop a platform for implementing my own algorithmic stock trading strategies.",
		tech: ["Cloud Architecture", "Event-Driven Data", "Websockets"],
		links: [
			{
				label: "GitHub",
				url: "https://www.github.com/ephraimsmithdev/alstr",
			},
		],
	},
	{
		title: "Calculator",
		imgURI: "p-calculator.png",
		description:
			"Tired of using a standard-looking calculator?  Check out this one with a natural wood finish.",
		tech: ["CSS", "GitHub Pages", "React", "Sass"],
		links: [
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
		title: "Drum Machine",
		imgURI: "p-drum-machine.png",
		description:
			"Using 1 hand and your keyboard, make...err some noise with either the 'Big and Heavy' or 'Pearl' drum kits.  Built with React and Sass",
		tech: ["CSS", "GitHub Pages", "React", "Sass"],
		links: [
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
		title: "Markdown Previewer",
		imgURI: "p-markdown-previewer.png",
		description:
			"Learning markdown?  Just need to check the output of some weird syntax?  Have 'Markdown Previewer' show you what that markdown's going to look like.",
		tech: ["CSS", "GitHub Pages", "marked", "React", "Sass"],
		links: [
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
		imgURI: "p-pomodoro-clock.png",
		description:
			"Get productive.  Pomodoro-style!  Tailor your work and break times for maximum productivity.  Manually set up the tooling for React, Sass, and GitHub deployment using Parcel.",
		tech: ["CSS", "GitHub Pages", "Parcel", "React", "Sass"],
		links: [
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
		title: "Random Quote Machine",
		imgURI: "p-quote-generator.png",
		description:
			"Find some motivation, or entertainment, from some of the smartest people in technology.  Browse quotes while enjoying background images from NASA.",
		tech: ["APIs", "Axios", "GitHub Pages", "React"],
		links: [
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
		title: "TORNADO ACTION",
		imgURI: "p-tornado-action.png",
		description:
			"Visual-first web app for all things tornado-related.  I wanted to build a UI-heavy, engaging application that was both fun and practical.  To keep costs down I honed in on freely available datasets.  Between NOAA, NASA, the National Weather Service, and the Storm Prediction Center, it's APIs-for-days...",
		tech: ["Data Visualization", "Frontend Framework"],
		links: [
			{
				label: "GitHub",
				url: "https://www.github.com/ephraimsmithdev/tornado-action",
			},
		],
	},
];

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
const GH_PAGES_BASE = "https://ephraimsmith.github.io";

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
		tech: ["GraphQL", "Hasura", "Knex", "PostgreSQl"],
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
		description: "",
		tech: ["HTML", "CSS"],
		links: [{ label: "GitHub", url: `${GH_REPO_BASE}/tribute-page` }],
	},
	{
		title: "Survey Form",
		imgURI: "p-survey-form.png",
		description: "",
		tech: ["HTML", "CSS"],
		links: [{ label: "GitHub", url: `${GH_REPO_BASE}/survey-form` }],
	},
	{
		title: "Product Landing Page",
		imgURI: "p-product-landing-page.png",
		description: "",
		tech: ["HTML", "CSS"],
		links: [{ label: "GitHub", url: `${GH_REPO_BASE}/product-landing-page` }],
	},
	{
		title: "Technical Documentation Page",
		imgURI: "p-tech-docs-page.png",
		description: "",
		tech: ["HTML", "CSS"],
		links: [
			{ label: "GitHub", url: `${GH_REPO_BASE}/technical-documentation-page` },
		],
	},
	{
		title: "Portfolio Page",
		imgURI: "p-portfolio-page.png",
		description: "",
		tech: ["HTML", "CSS"],
		links: [{ label: "GitHub", url: `${GH_REPO_BASE}/portfolio-page` }],
	},
];

export const JAVASCRIPT = [
	{
		title: "Palindrome",
		imgURI: "",
		description: "",
		tech: [""],
		links: [
			{
				label: "GitHub",
				url: `${GH_REPO_BASE}/palindrome-checker`,
			},
		],
	},
	{
		title: "Roman Numeral Converter",
		imgURI: "",
		description: "",
		tech: [""],
		links: [
			{ label: "GitHub", url: `${GH_REPO_BASE}/roman-numeral-converter` },
		],
	},
	{
		title: "Caesars Cipher",
		imgURI: "",
		description: "",
		tech: [""],
		links: [
			{
				label: "GitHub",
				url: `${GH_REPO_BASE}/caesars-cipher`,
			},
		],
	},
	{
		title: "Telephone Number Validator",
		imgURI: "",
		description: "",
		tech: [""],
		links: [
			{
				label: "GitHub",
				url: `${GH_REPO_BASE}/telephone-number-validator`,
			},
		],
	},
	{
		title: "Cash Register",
		imgURI: "",
		description: "",
		tech: [""],
		links: [
			{
				label: "GitHub",
				url: `${GH_REPO_BASE}/cash-register`,
			},
		],
	},
];

export const MOBILE_APPS = [
	{
		title: "ROVERCAM",
		imgURI: "p-rovercam.png",
		description:
			"ROVERCAM is a cross-platform mobile app built with React Native that gives users access to thousands of photos taken on Mars by the 4 Mars Rovers: Curiosity, Opportunity, Perseverance, and Spirit.",
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
		title: "Random Quote Machine",
		imgURI: "p-quote-generator.png",
		description: "",
		tech: [""],
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
		title: "Markdown Previewer",
		imgURI: "p-markdown-previewer.png",
		description: "",
		tech: [""],
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
		title: "Drum Machine",
		imgURI: "p-drum-machine.png",
		description: "",
		tech: [""],
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
		title: "JavaScript Calculator",
		imgURI: "p-calculator.png",
		description: "",
		tech: [""],
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
		title: "Pomodoro Clock",
		imgURI: "p-pomodoro-clock.png",
		description: "",
		tech: [""],
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
		title: "ALSTR",
		imgURI: "p-alstr.jpg",
		description:
			"ALSTR ( Algo-Strategy ) is a long-term project where I'll develop a platform for implementing my own algorithmic stock trading strategies.",
		tech: ["Cloud Architecture", "Event-Driven Data", "Websockets"],
		links: {
			appStore: null,
			repo: "https://www.github.com/ephcoding/alstr",
			site: null,
		},
	},
	{
		title: "TORNADO ACTION",
		imgURI: "p-tornado-action.png",
		description:
			"Visual-first web app for all things tornado-related.  I wanted to build a UI-heavy, engaging application that was both fun and practical.  To keep costs down I honed in on freely available datasets.  Between NOAA, NASA, the National Weather Service, and the Storm Prediction Center, it's APIs-for-days...",
		tech: ["Data Visualization", "Frontend Framework"],
		links: {
			appStore: "",
			repo: "https://www.github.com/ephraimsmith/tornado-action",
			site: "https://www.tornadoaction.com",
		},
	},
];

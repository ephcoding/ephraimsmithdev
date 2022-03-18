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
		imgURI: ["/logo_nws.png"],
		description:
			"VORTX is a REST API that will give developers access to over 65,000 historical tornado events.  VORTX will pull double-duty as the initial data source for my upcoming project, tornadoaction.com.",
		tech: ["GraphQL", "Hasura", "Knex", "PostgreSQl"],
		links: {},
	},
];

export const DESIGN = [
	{
		title: "Tribute Page",
		imgURI: "",
		description: "",
		tech: ["HTML", "CSS"],
		links: [
			<Link href={`${GH_REPO_BASE}/tribute-page`}>
				<FaGithub size={20} title='GitHub' />
			</Link>,
		],
	},
	{
		title: "Survey Form",
		imgURI: "",
		description: "",
		tech: ["HTML", "CSS"],
		links: [
			<Link href={`${GH_REPO_BASE}/survey-form`}>
				<FaGithub size={20} title='GitHub' />
			</Link>,
		],
	},
	{
		title: "Product Landing Page",
		imgURI: "",
		description: "",
		tech: ["HTML", "CSS"],
		links: [
			<Link href={`${GH_REPO_BASE}/product-landing-page`}>
				<FaGithub size={20} title='GitHub' />
			</Link>,
		],
	},
	{
		title: "Technical Documentation Page",
		imgURI: "",
		description: "",
		tech: ["HTML", "CSS"],
		links: [
			<Link href={`${GH_REPO_BASE}/technical-documentation-page`}>
				<FaGithub size={20} title='GitHub' />
			</Link>,
		],
	},
	{
		title: "Portfolio Page",
		imgURI: "",
		description: "",
		tech: ["HTML", "CSS"],
		links: [
			<Link href={`${GH_REPO_BASE}/portfolio-page`}>
				<FaGithub size={20} title='GitHub' />
			</Link>,
		],
	},

	// {
	// 	name: "TORNADO ACTION",
	// 	assets: ["/logo_noaa.png"],
	// 	bgImgClass: "bg_tornado-action",
	// 	description:
	// 		"Visual-first web app for all things tornado-related.  I wanted to build a UI-heavy, engaging application that was both fun and practical.  To keep costs down I honed in on free/publicly available datasets.  Between NOAA, NASA, the National Weather Service, and the Storm Prediction Center, it's APIs-for-days...",
	// 	tags: ["Data Visualization", "Frontend Framework"],
	// 	urls: {
	// 		appStore: "",
	// 		repo: "https://www.github.com/ephraimsmith/tornado-action",
	// 		site: "https://www.tornadoaction.com",
	// 	},
	// },

	// {
	// name: "FreeCodeCamp",
	// 	description:
	// 		"Free online platform for learning web design from top to bottom.  Great tool for filling in knowledge gaps and generating ideas for new projects.",
	// tags: '',
	// 	urls: {
	// { appStore: "" },
	// { repo: "" },
	// 		{ site: "https://www.freeCodeCamp.org/ephraimsmith" },
	// 	},
	// },
];

export const JS_ALGO_DATA_STRUCTURES = [
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
		imgURI: "",
		description: "",
		tech: ["React Native"],
		links: [{ label: "", url: "" }],
	},
	// --------------------
	// {
	// 	name: "ROVERCAM",
	// 	assets: ["/logo_nasa.png"],
	// 	bgImgClass: "bg_rovercam",
	// 	description:
	// 		"ROVERCAM's a cross-platform mobile app built with React Native that gives users access to thousands of photos taken on Mars by the 4 Mars Rovers: Curiosity, Opportunity, Perseverance, and Spirit.",
	// 	tags: ["Mobile"],
	// 	urls: {
	// 		appStore: "",
	// 		repo: "https://www.github.com/modevx/rovercam",
	// 		site: "https://www.rovercamapp.com",
	// 	},
	// },
];

export const WEB_APPS = [
	{
		title: "Random Quote Machine",
		imgURI: "",
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
		imgURI: "",
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
		imgURI: "",
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
		imgURI: "",
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
		imgURI: "",
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
	// {
	//   title: "ALSTR",
	//   imgURI: '',
	//   description:
	//     "ALSTR ( Algo-Strategy ) is a long-term project where I'll develop a platform for implementing my own algorithmic stock trading strategies.",
	//   tech: ["Cloud Architecture", "Event-Driven Data", "Websockets"],
	//   links: {
	//     appStore: null,
	//     repo: "https://www.github.com/ephcoding/alstr",
	//     site: null,
	//   },
	// },
];

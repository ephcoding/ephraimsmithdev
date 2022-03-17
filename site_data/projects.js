// GITHUB BASE URLS
const GH_REPO_BASE = "https://github.com/ephraimsmith";
const GH_PAGES_BASE = "https://ephraimsmith.github.io";

/**
 * PROJECT TEMPLATE
 *
 * {
 *    title:
 *    imgURI:
 *    description:
 *    tech:
 *    links: [
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
		name: "VORTX",
		assets: ["/logo_nws.png"],
		bgImgClass: "bg_vortx",
		description:
			"VORTX is a REST API that will give developers access to over 65,000 historical tornado events.  VORTX will pull double-duty as the initial data source for my upcoming project, tornadoaction.com.",
		tags: ["API design", "API documentation", "RDB design", "Node.js"],
		urls: {
			appStore: "",
			repo: "https://www.github.com/ephcoding/vortx",
			site: "",
		},
	},
];

export const DESIGN = [
	{
		title: "Tribute Page",
		repoLink: `${GH_REPO_BASE}/tribute-page`,
		isLive: true,
		appStore: `${GH_PAGES_BASE}/tribute-page`,
	},
	{
		title: "Survey Form",
		repoLink: `${GH_REPO_BASE}/survey-form`,
		isLive: true,
		appStore: `${GH_PAGES_BASE}/survey-form`,
	},
	{
		title: "Product Landing Page",
		repoLink: `${GH_REPO_BASE}/product-landing-page`,
		isLive: true,
		appStore: `${GH_PAGES_BASE}/product-landing-page`,
	},
	{
		title: "Technical Documentation Page",
		repoLink: `${GH_REPO_BASE}/technical-documentation-page`,
		isLive: true,
		appStore: `${GH_PAGES_BASE}/technical-documentation-page`,
	},
	{
		title: "Portfolio Page",
		repoLink: `${GH_REPO_BASE}/portfolio-page`,
		isLive: true,
		appStore: `${GH_PAGES_BASE}/technical-documentation-page`,
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
		repoLink: `${GH_REPO_BASE}/palindrome-checker`,
		isLive: false,
		appStore: `${GH_PAGES_BASE}/palindrome-checker`,
	},
	{
		title: "Roman Numeral Converter",
		repoLink: `${GH_REPO_BASE}/roman-numeral-converter`,
		isLive: false,
		appStore: `${GH_PAGES_BASE}/roman-numeral-converter`,
	},
	{
		title: "Caesars Cipher",
		repoLink: `${GH_REPO_BASE}/caesars-cipher`,
		isLive: false,
		appStore: `${GH_PAGES_BASE}/caesars-cipher`,
	},
	{
		title: "Telephone Number Validator",
		repoLink: `${GH_REPO_BASE}/telephone-number-validator`,
		isLive: false,
		appStore: `${GH_PAGES_BASE}/telephone-number-validator`,
	},
	{
		title: "Cash Register",
		repoLink: `${GH_REPO_BASE}/cash-register`,
		isLive: false,
		appStore: `${GH_PAGES_BASE}/cash-register`,
	},
];

export const MOBILE_APPS = [
	{
		title: "ROVERCAM",
		imgURI: "",
		description: "",
		tech: ["React Native"],
		links: [],
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
		repoLink: `${GH_REPO_BASE}/random-quote-machine`,
		isLive: true,
		appStore: `${GH_PAGES_BASE}/random-quote-machine`,
	},
	{
		title: "Markdown Previewer",
		repoLink: `${GH_REPO_BASE}/markdown-previewer`,
		isLive: true,
		appStore: `${GH_PAGES_BASE}/markdown-previewer`,
	},
	{
		title: "Drum Machine",
		repoLink: `${GH_REPO_BASE}/drum-machine`,
		isLive: true,
		appStore: `${GH_PAGES_BASE}/drum-machine`,
	},
	{
		title: "JavaScript Calculator",
		repoLink: `${GH_REPO_BASE}/js-calculator`,
		isLive: true,
		appStore: `${GH_PAGES_BASE}/js-calculator`,
	},
	{
		title: "Pomodoro Clock",
		repoLink: `${GH_REPO_BASE}/js-calculator`,
		isLive: true,
		appStore: `${GH_PAGES_BASE}/js-calculator`,
	},
	// {
	//   name: "ALSTR",
	//   assets: [],
	//   bgImgClass: "bg_alstr",
	//   description:
	//     "ALSTR ( Algo-Strategy ) is a long-term project where I'll develop a platform for implementing my own algorithmic stock trading strategies.",
	//   tags: ["Cloud Architecture", "Event-Driven Data", "Websockets"],
	//   urls: {
	//     appStore: null,
	//     repo: "https://www.github.com/ephcoding/alstr",
	//     site: null,
	//   },
	// },
];

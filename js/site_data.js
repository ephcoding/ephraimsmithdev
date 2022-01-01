import {
	FaGithub,
	FaTools,
	FaHome,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa";

// GITHUB BASE URLS
const GH_REPO_BASE = "https://github.com/ephraimsmith";
const GH_PAGES_BASE = "https://ephraimsmith.github.io";

// FCC CERTIFICATE TITLES
const RESP = "RESPONSIVE WEB DESIGN";
const JS = "JAVASCRIPT ALGORITHMS & DATA STRUCTURES";
const FRONTEND = "FRONT END DEVELOPMENT LIBRARIES";
const DATAVIZ = "DATA VISUALIZATION";
const BACKEND = "BACKEND DEVELOPMENT AND APIS";

export const NAV_ITEMS = [
	{
		label: "home",
		url: "/",
		icon: <FaHome size={22} title='ephraimsmith.dev' />,
	},
	{
		label: "tools",
		url: "/tools",
		icon: <FaTools size={20} title='tools' />,
	},
	{
		label: "github",
		url: "https://github.com/ephraimsmith",
		icon: <FaGithub size={20} title='github' />,
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
];
export const PAGES = {
	home: {
		cssClass: "home",
		pageHeading: {
			first: "EPHRAIM",
			second: "SMITH",
		},
		// pageIntro:
		// 	"Like a lot of people, I learn by breaking things.  And I've learned a ton about software in the last couple years thanks to other people sharing their experiences and mistakes with me.  To pay it forward, I'm going to start sharing my continued learning, mistakes, and natural ability to break anything, with the world.",
		metaDescription: "",
		metaKeywords:
			"react native, mobile apps, mobile development, android, ios, coding, programming, software, software development",
		metaTitle: "ephraimsmith.dev",
	},
	tools: {
		cssClass: "tools",
		pageHeading: {
			first: "MY",
			second: "TOOLS",
		},
		pageIntro: "",
		metaDescription: "",
		metaKeywords: "",
		metaTitle: "Ephraim Smith | Tools",
	},
};
export const PROJECTS = [
	{
		name: "ALSTR",
		assets: [],
		bgImgClass: "bg_alstr",
		description:
			'Short for "Algo-Trading Strategy", ALSTR will be a full platform for managing my personal algo-trading strategies.  Learning all the things with this project.  Frontend, backend, APIs, security, data storage and caching, and cloud architecture.',
		tags: ["Architecture", "Cloud"],
		urls: {
			appStore: null,
			repo: "https://www.github.com/ephraimsmith/alstr",
			site: null,
		},
	},
	{
		name: "ROVERCAM",
		assets: ["/logo_nasa.png"],
		bgImgClass: "bg_rovercam",
		description:
			"ROVERCAM's a cross-platform mobile app built with React Native that gives users access to thousands of photos taken on Mars by the 4 Mars Rovers: Curiosity, Opportunity, Perseverance, and Spirit.",
		tags: ["Mobile"],
		urls: {
			appStore: "",
			repo: "https://www.github.com/modevx/rovercam",
			site: "https://www.rovercamapp.com",
		},
	},
	{
		name: "TORNADO ACTION",
		assets: ["/logo_noaa.png"],
		bgImgClass: "bg_tornado-action",
		description:
			"Visual-first web app for all things tornado-related.  I wanted to build a UI-heavy, engaging application that was both fun and practical.  To keep costs down I honed in on free/publicly available datasets.  Between NOAA, NASA, the National Weather Service, and the Storm Prediction Center, it's APIs-for-days...",
		tags: ["Data Visualization", "Frontend Framework"],
		urls: {
			appStore: "",
			repo: "https://www.github.com/ephraimsmith/tornado-action",
			site: "https://www.tornadoaction.com",
		},
	},
	{
		name: "VORTX",
		assets: ["/logo_nws.png"],
		bgImgClass: "bg_vortx",
		description:
			"VORTX is a REST API that will give developers access to over 65,000 historical tornado events.  The Storm Prediction Center provides severe weather data reports in CSV format.",
		tags: ["API", "Node.js"],
		urls: {
			appStore: "",
			repo: "https://www.github.com/ephraimsmith/vortx",
			site: "",
		},
	},
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
export const TOOLS = [
	{
		tool: "EZGif",
		value: '"Animated GIFs made easy"',
		url: "https://ezgif.com/",
	},
	{
		tool: "The Twelve-Factor App",
		value: "serious about building a SaaS product?  start here.",
		url: "https://12factor.net/",
	},
	{
		tool: "Awesome CTO",
		value:
			'"A curated and opinionated list of resources for Chief Technology Officers and VP R&D"',
		url: "https://github.com/kuchin/awesome-cto",
	},
	{
		tool: "createapp.dev",
		value: "generates project build configs based on your selected packages",
		url: "https://createapp.dev/",
	},
	{
		tool: "Can I Use",
		value: "",
		url: "",
	},
	{
		tool: "AwesomeOpenSource",
		value: "",
		url: "",
	},
	{
		tool: "Flexbox Froggy",
		value: "",
		url: "",
	},
	{
		tool: "Grid Garden",
		value: "",
		url: "",
	},
	{
		tool: "devhints.io cheat sheets",
		value: "",
		url: "",
	},
	{
		tool: "Design Patterns",
		value: "",
		url: "https://refactoring.guru/design-patterns",
	},
	{
		tool: "CSS-Tricks",
		value: "",
		url: "",
	},
	{
		tool: "FreeCodeCamp",
		value: "",
		url: "https://freecodecamp.org",
	},
	{
		tool: "W3Schools",
		value: "",
		url: "https://www.w3schools.com",
	},
	{
		tool: "SMACSS",
		value: "",
		url: "",
	},
	{
		tool: "OOCSS",
		value: "",
		url: "",
	},
	{
		tool: "Brad Traversy",
		value: "",
		url: "https://www.traversymedia.com",
	},
	{
		tool: "openbase.com",
		value: "",
		url: "https://openbase.com/",
	},
	{
		tool: "NASA APIs",
		value: "",
		url: "",
	},
	{
		tool: "NOAA Big Data Program",
		value: "",
		url: "https://www.noaa.gov/organization/information-technology/list-of-big-data-program-datasets",
	},
	{
		tool: "AWS Architecture Diagrams",
		value: "",
		url: "https://aws.amazon.com/architecture/reference-architecture-diagrams/?whitepapers-main.sort-by=item.additionalFields.sortDate&whitepapers-main.sort-order=desc&awsf.whitepapers-tech-category=*all&awsf.whitepapers-industries=*all&solutions-all.sort-by=item.additionalFields.sortDate&solutions-all.sort-order=desc",
	},
	{
		tool: "Google Lighthouse",
		value: "",
		url: "",
	},
	{
		tool: "Twitter Card Validator",
		value: "",
		url: "https://cards-dev.twitter.com/validator",
	},
	{
		tool: "Canva",
		value: "",
		url: "https://www.canva.com",
	},
];
export const FCC_PROJECTS = [
	{
		certificate: RESP,
		projects: [
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
		],
	},
	{
		certificate: JS,
		projects: [
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
		],
	},
	{
		certificate: FRONTEND,
		projects: [
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
		],
	},
];

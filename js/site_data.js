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
export const PAGES = {
	home: {
		cssClass: "home",
		pageHeading: {
			first: "EPHRAIMSMITH",
			second: ".DEV",
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
			first: "MY ",
			second: "TOOLS",
		},
		pageIntro: "",
		metaDescription: "",
		metaKeywords: "",
		metaTitle: "Ephraim Smith | Tools",
	},
};
export const PROJECTS = [
	// {
	// 	name: "ALSTR",
	// 	assets: [],
	// 	bgImgClass: "bg_alstr",
	// 	description:
	// 		"ALSTR ( Algo-Strategy ) is a long-term project where I'll develop a platform for implementing my own algorithmic stock trading strategies.",
	// 	tags: ["Architecture", "Serverless"],
	// 	urls: {
	// 		appStore: null,
	// 		repo: "https://www.github.com/ephraimsmith/alstr",
	// 		site: null,
	// 	},
	// },
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
		name: "Architecture Diagrams (AWS)",
		url: "https://aws.amazon.com/architecture/reference-architecture-diagrams/?whitepapers-main.sort-by=item.additionalFields.sortDate&whitepapers-main.sort-order=desc&awsf.whitepapers-tech-category=*all&awsf.whitepapers-industries=*all&solutions-all.sort-by=item.additionalFields.sortDate&solutions-all.sort-order=desc",
		description: "awesome for understanding how systems tie together.",
	},
	{
		name: "Awesome CTO",
		url: "https://github.com/kuchin/awesome-cto",
		description:
			"A curated and opinionated list of resources for Chief Technology Officers and VP R&D.",
	},
	{
		name: "AwesomeOpenSource",
		url: "https://awesomeopensource.com",
		description:
			"if you're looking for open source projects to get involved in, this is the mother of all rabit holes..",
	},
	{
		name: "Brad Traversy",
		url: "https://www.traversymedia.com",
		description:
			"You can start a career in software with Brad's courses alone.  No.  Seriously.",
	},
	{
		name: "Can I Use",
		url: "https://caniuse.com",
		description:
			'"Can I use provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers."',
	},
	{
		name: "Canva",
		url: "https://www.canva.com",
		description:
			"Free asset-creation platform & design lessons.  I use Canva exclusively for anything graphics-related.",
	},
	{
		name: "createapp.dev",
		url: "https://createapp.dev/",
		description:
			"This might be one of the coolest tools I've stumbled upon.  createapp.dev generates your project's config file based on the packages you select.",
	},
	{
		name: "CSS-Tricks",
		url: "https://css-tricks.com/",
		description: "If you have a CSS question, start here.",
	},
	{
		name: "devhints.io cheatsheets",
		url: "https://devhints.io/",
		description: "Kick-ass cheatsheets for a pile of topics.",
	},
	{
		name: "EZGif",
		url: "https://ezgif.com/",
		description: '"Animated GIFs made easy"',
	},
	{
		name: "Flexbox Froggy",
		url: "https://flexboxfroggy.com/",
		description: "Game for learning CSS Flexbox.  Effective.",
	},
	{
		name: "FreeCodeCamp",
		url: "https://freecodecamp.org",
		description:
			"If you're new to software and overwhelmed about where to start, check out freeCodeCamp.  It's basically a MERN stack bootcamp with some data visualizations, analytics, and Python thrown in.  Extensive catolog of interview prep challenges too.",
	},
	{
		name: "Grid Garden",
		url: "https://cssgridgarden.com/",
		description: "Game for learning CSS Grid.  Like Flexbox Froggy, effective.",
	},
	{
		name: "Lighthouse (Google)",
		url: "https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect",
		description: "Measure your websites perform with Lighthouse from Google.",
	},
	{
		name: "NASA APIs",
		url: "https://api.nasa.gov/#apod",
		description:
			"NASA's most popular open datasets in one place.  All kinds of cool data to use for those frontend framework / fetch-and-display projects.",
	},
	{
		name: "NOAA Big Data Program",
		url: "https://www.noaa.gov/organization/information-technology/list-of-big-data-program-datasets",
		description:
			"Grab a beer / coffee and a sandwich.  This data rabbit hole is deeep.",
	},
	{
		name: "OOCSS",
		url: "https://github.com/stubbornella/oocss/wiki#separate-container-and-content",
		description: "An object-oriented approach to writing CSS.",
	},
	{
		name: "openbase.com",
		url: "https://openbase.com/",
		description:
			'"Compare open-source packages with powerful metrics and user reviews."',
	},
	{
		name: "refactoring.guru (design patterns)",
		url: "https://refactoring.guru/design-patterns",
		description:
			'Another one of those "how did I not know this existed?" sites.  Even if you\'re just getting started in software, the concepts here are worth knowing at a high-level.',
	},
	{
		name: "SMACSS",
		url: "http://smacss.com/",
		description:
			'"A flexible (CSS) guide to developing sites small and large."',
	},
	{
		name: "Twelve-Factor App",
		url: "https://12factor.net/",
		description:
			"Serious about building a SaaS product?  this is required reading.",
	},
	{
		name: "Twitter Card Validator",
		url: "https://cards-dev.twitter.com/validator",
		description:
			"Cool tool for previewing what your meta thumbnails will look like in a Tweet.",
	},
	{
		name: "W3Schools",
		url: "https://www.w3schools.com",
		description:
			"Huge resource with references, lessons, and practice problems for all kinds of languages.",
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

// GITHUB BASE URLS
const GH_REPO_BASE = "https://github.com/ephraimsmith";
const GH_PAGES_BASE = "https://ephraimsmith.github.io";

// FCC CERTIFICATE TITLES
const RESP = "RESPONSIVE WEB DESIGN";
const JS = "JAVASCRIPT ALGORITHMS & DATA STRUCTURES";
const FRONTEND = "FRONT END DEVELOPMENT LIBRARIES";
const DATAVIZ = "DATA VISUALIZATION";
const BACKEND = "BACKEND DEVELOPMENT AND APIS";

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
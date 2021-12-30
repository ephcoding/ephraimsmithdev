import {
  FaGithub,
  FaHammer,
  FaHome,
  FaLinkedin,
  FaToolbox,
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

export const FCC_PROJECTS = [
  {
    certificate: RESP,
    projects: [
      {
        title: "Tribute Page",
        repoLink: `${GH_REPO_BASE}/tribute-page`,
        isLive: true,
        liveLink: `${GH_PAGES_BASE}/tribute-page`,
      },
      {
        title: "Survey Form",
        repoLink: `${GH_REPO_BASE}/survey-form`,
        isLive: true,
        liveLink: `${GH_PAGES_BASE}/survey-form`,
      },
      {
        title: "Product Landing Page",
        repoLink: `${GH_REPO_BASE}/product-landing-page`,
        isLive: true,
        liveLink: `${GH_PAGES_BASE}/product-landing-page`,
      },
      {
        title: "Technical Documentation Page",
        repoLink: `${GH_REPO_BASE}/technical-documentation-page`,
        isLive: true,
        liveLink: `${GH_PAGES_BASE}/technical-documentation-page`,
      },
      {
        title: "Portfolio Page",
        repoLink: `${GH_REPO_BASE}/portfolio-page`,
        isLive: true,
        liveLink: `${GH_PAGES_BASE}/technical-documentation-page`,
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
        liveLink: `${GH_PAGES_BASE}/palindrome-checker`,
      },
      {
        title: "Roman Numeral Converter",
        repoLink: `${GH_REPO_BASE}/roman-numeral-converter`,
        isLive: false,
        liveLink: `${GH_PAGES_BASE}/roman-numeral-converter`,
      },
      {
        title: "Caesars Cipher",
        repoLink: `${GH_REPO_BASE}/caesars-cipher`,
        isLive: false,
        liveLink: `${GH_PAGES_BASE}/caesars-cipher`,
      },
      {
        title: "Telephone Number Validator",
        repoLink: `${GH_REPO_BASE}/telephone-number-validator`,
        isLive: false,
        liveLink: `${GH_PAGES_BASE}/telephone-number-validator`,
      },
      {
        title: "Cash Register",
        repoLink: `${GH_REPO_BASE}/cash-register`,
        isLive: false,
        liveLink: `${GH_PAGES_BASE}/cash-register`,
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
        liveLink: `${GH_PAGES_BASE}/random-quote-machine`,
      },
      {
        title: "Markdown Previewer",
        repoLink: `${GH_REPO_BASE}/markdown-previewer`,
        isLive: true,
        liveLink: `${GH_PAGES_BASE}/markdown-previewer`,
      },
      {
        title: "Drum Machine",
        repoLink: `${GH_REPO_BASE}/drum-machine`,
        isLive: true,
        liveLink: `${GH_PAGES_BASE}/drum-machine`,
      },
      {
        title: "JavaScript Calculator",
        repoLink: `${GH_REPO_BASE}/js-calculator`,
        isLive: true,
        liveLink: `${GH_PAGES_BASE}/js-calculator`,
      },
    ],
  },
];
export const NAV_ITEMS = [
  {
    label: "home",
    url: "/",
    icon: <FaHome size={22} title="ephraimsmith.dev" />,
  },
  {
    label: "toolbox",
    url: "/toolbox",
    icon: <FaToolbox size={20} title="toolbox" />,
  },
  {
    label: "github",
    url: "https://github.com/ephraimsmith",
    icon: <FaGithub size={20} title="github" />,
  },
  {
    label: "twitter",
    url: "https://www.twitter.com/_ephraimsmith",
    icon: <FaTwitter size={20} title="twitter" />,
  },
  {
    label: "linkedin",
    url: "https://www.linkedin.com/in/ephraimjsmith",
    icon: <FaLinkedin size={20} title="linkedin" />,
  },
];
export const PAGES = {
  freecodecamp: {
    cssClass: "fcc",
    description: "",
    heading: { first: "FreeCodeCamp", second: "Projects" },
    intro: "",
    keywords:
      "freeCodeCamp, Responsive Design, JavaScript, React, D3.js, d3js, D3, HTML, CSS, HTML5, CSS3",

    title: "FreeCodeCamp Projects",
  },
  home: {
    cssClass: "home",
    description:
      "ephcoding.com is home to Ephraim Smith and his documented adventures in software",
    heading: { first: "EPHRAIM", second: "SMITH" },
    intro: "",
    keywords:
      "react native, mobile apps, mobile development, android, ios, coding, programming, software, software development",
    title: "ephraimsmith.dev",
  },
  projects: {
    cssClass: "projects",
    description: "",
    heading: {
      first: <FaHammer size={30} title="projects" />,
      second: "PROJECTS",
    },
    intro: "",
    keywords: "",
    title: "Ephraim Smith | Projects",
  },
  toolbox: {
    cssClass: "toolbox",
    description: "",
    heading: {
      first: <FaToolbox size={30} title="toolbox" />,
      second: "TOOLBOX",
    },
    intro: "",
    keywords: "",
    title: "Resources",
  },
};
export const PROJECTS = [
  {
    description:
      'Short for "Algo-Trading Strategy", ALSTR will be a full platform for managing my personal algo-trading strategies.  Learning all the things with this project.  Frontend, backend, APIs, security, data storage and caching, and cloud architecture.',
    name: "ALSTR",
    URLs: [
      { repo: "https://www.github.com/ephraimsmith/alstr" },
      { website: "" },
    ],
  },
  {
    description:
      "Visual-first web app for all things tornado-related.  I wanted to build a UI-heavy, engaging application that was both fun and practical.  To keep costs down I honed in on free/publicly available datasets.  Between NOAA, NASA, the National Weather Service, and the Storm Prediction Center, it's APIs-for-days...",
    name: "Tornado Action",
    URLs: [
      { repo: "https://www.github.com/ephraimsmith/tornado-action" },
      { website: "https://www.tornadoaction.com" },
    ],
  },
  {
    description:
      "ROVERCAM's a cross-platform mobile app built with React Native that gives users access to thousands of photos taken on Mars by the 4 Mars Rovers: Curiosity, Opportunity, Perseverance, and Spirit.",
    name: "ROVERCAM",
    URLs: [{ repo: "https://www.github.com/modevx/rovercam" }, { website: "" }],
    // website: "https://www.rovercamapp.com",
  },
  {
    description:
      "REST API that will allow developers to access over 65,000 historical tornado events from 1950-2019.  The Storm Prediction Center provides this data in CSV format.  The plan is to stash this mountain of data in a PostgreSQL database in the cloud.  Eventually I hope to add dyamic updates that will feed the VORTX database as newly published storm reports are released from the National Weather Service.",
    name: "VORTX",
    URLs: [
      { repo: "https://www.github.com/ephraimsmith/vortx" },
      { website: "" },
    ],
  },
  {
    description:
      "Free online platform for learning web design from top to bottom.  Great tool for filling in knowledge gaps and generating ideas for new projects.",
    name: "FreeCodeCamp",
    URLs: [
      { repo: "" },
      { website: "https://www.freeCodeCamp.org/ephraimsmith" },
    ],
  },
];
export const TOOLS = [
  {
    area: "HTML/CSS",
    resources: [{ name: "", url: "" }],
  },
  {
    area: "JavaScript",
    resources: [{ name: "", url: "" }],
  },
  {
    area: "UI / Design",
    resources: [{ name: "", url: "" }],
  },
  {
    area: "APIs",
    resources: [{ name: "", url: "" }],
  },
  {
    area: "Tooling",
    resources: [{ name: "", url: "" }],
  },
  {
    area: "Utilities",
    resources: [{ name: "", url: "" }],
  },
];

// GITHUB URLS
const EPHCODING_GH_REPO = "https://github.com/ephcoding";
const EPHCODING_GH_PAGES = "https://ephcoding.github.io";
const MODEVX_GH_REPO = "https://github.com/modevx";
const MODEVX_GH_PAGES = "https://modevx.github.io";

export const PROJECTS = [
	{
		name: "Tornado Action",
		description:
			"Stay ahead of mother nature's worst with real-time tornado watches, warnings, and convective outlooks.",
		img_src: "images/tornado-action.png",
		hrefs: {
			code: `${EPHCODING_GH_REPO}/tornadoaction`,
			live_project: "https://www.tornadoaction.com",
		},
	},
	{
		name: "ROVERCAM",
		description:
			"Explore the Red Planet through the eyes of the Mars rovers on your Android or iOS phone.",
		img_src: "images/rovercam.png",
		hrefs: {
			code: `${MODEVX_GH_REPO}/rovercam`,
			live_project: "https://www.rovercamapp.com",
		},
	},
];

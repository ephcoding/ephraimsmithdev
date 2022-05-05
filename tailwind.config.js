module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				jest: "#cc4615",
				js: "#f7df1e",
				node: "#66cc33",
				pg: "#336791",
				ts: "#007ACC",
			},
		},
	},
	extend: {},
	plugins: [],
};

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				javascript: "#f7df1e",
				jest: "#cc4615",
				nodejs: "#66cc33",
				postgresql: "#336791",
				react: "#61DAFB",
				reactnative: "#61DAFB",
				typescript: "#007ACC",
			},
		},
	},
	extend: {},
	plugins: [],
};

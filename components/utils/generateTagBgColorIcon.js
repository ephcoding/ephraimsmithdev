import {
	SiJavascript,
	SiJest,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiTypescript,
} from "react-icons/si";

export const generateTagBgColorIcon = (tagName) => {
	const lcTagName = tagName.toLowerCase();

	const tagMap = {
		javascript: {
			bgColor: "from-javascript",
			tagIcon: SiJavascript,
		},
		jest: {
			bgColor: "from-jest",
			tagIcon: SiJest,
		},
		nodejs: {
			bgColor: "from-nodejs",
			tagIcon: SiNodedotjs,
		},
		postgresql: {
			bgColor: "from-postgresql",
			tagIcon: SiPostgresql,
		},
		react: {
			bgColor: "from-react",
			tagIcon: SiReact,
		},
		reactnative: {
			bgColor: "from-reactnative",
			tagIcon: SiReact,
		},
		typescript: {
			bgColor: "from-typescript",
			tagIcon: SiTypescript,
		},
	};

	return tagMap[lcTagName];
};

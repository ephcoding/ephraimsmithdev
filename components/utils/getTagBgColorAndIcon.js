import {
	SiJavascript,
	SiJest,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiTypescript,
} from "react-icons/si";

export const getTagBgColorAndIcon = (tag) => {
	const tagMap = {
		jest: {
			bg_color: "from-jest",
			icon: SiJest,
		},
		js: {
			bg_color: "from-js",
			icon: SiJavascript,
		},
		node: {
			bg_color: "from-node",
			icon: SiNodedotjs,
		},
		pg: {
			bg_color: "from-pg",
			icon: SiPostgresql,
		},
		react: {
			bg_color: "from-react",
			icon: SiReact,
		},
		ts: {
			bg_color: "from-ts",
			icon: SiTypescript,
		},
	};

	const tagAssests = tagMap[tag];

	return tagAssests;
};

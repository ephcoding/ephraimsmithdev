import {
	SiPostgresql,
	SiNodedotjs,
	SiJavascript,
	SiTypescript,
} from "react-icons/si";

export const getBgColorAndIcon = (tag) => {
	const tagMap = {
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
		ts: {
			bg_color: "from-ts",
			icon: SiTypescript,
		},
	};

	return tagMap[tag];
};

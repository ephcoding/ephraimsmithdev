import {
	SiJavascript,
	SiJest,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiTypescript,
} from "react-icons/si";

export const getTagIcon = ({ tag, size }) => {
	const tagMap = {
		javascript: {
			color: "#f7df1e",
			icon: SiJavascript,
		},
		jest: {
			color: "#cc4615",
			icon: SiJest,
		},
		nodejs: {
			color: "#66cc33",
			icon: SiNodedotjs,
		},
		postgresql: {
			color: "#336791",
			icon: SiPostgresql,
		},
		react: {
			color: "#61DAFB",
			icon: SiReact,
		},
		reactnative: {
			color: "#61DAFB",
			icon: SiReact,
		},
		typescript: {
			color: "#007ACC",
			icon: SiTypescript,
		},
	};

	const TagIcon = tagMap[tag.toLowerCase()].icon;

	return <TagIcon size={size} color={tagMap[tag.toLowerCase()].color} />;
};

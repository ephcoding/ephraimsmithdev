import Image from "next/image";
import Link from "next/link";
import {
	SiPostgresql,
	SiNodedotjs,
	SiJavascript,
	SiTypescript,
} from "react-icons/si";

export const ArticlePreviewCard = ({ article }) => {
	const {
		slug,
		frontmatter: { cover_image, title, sub_title, tag, date },
	} = article;

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

	// [?] why doesn't THIS work:
	// ((const tagIcon = tagMap[tag].icon;))
	// but this DOES??
	const thisTag = tagMap[tag];

	return (
		<div
			className={`relative p-4 overflow-hidden h-56 shadow-white shadow-md rounded bg-neutral-800 mb-3`}
		>
			{/* BACKGROUND IMAGE */}

			<h3 className='uppercase font-bold'>{title}</h3>
			<h2 className='card_subtitle'>{sub_title}</h2>

			<div className='absolute top-0 right-0 overflow-hidden h-24 w-24'>
				<div
					className={`bg-gradient-to-br ${thisTag.bg_color} to-neutral-700 h-48 w-48 absolute top-0 -right-24 origin-top-left -rotate-45 border-2 border-white`}
				></div>
			</div>

			<div className='absolute top-4 right-4'>
				<thisTag.icon size={25} color='white' />
			</div>
		</div>
	);
};

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
			className={`relative p-4 overflow-hidden h-56 shadow-black shadow-xl rounded bg-stone-700`}
		>
			{/* BACKGROUND IMAGE */}
			<Image
				alt='Mountains'
				src={cover_image}
				layout='fill'
				objectFit='cover'
				quality={100}
			/>
			<div className='absolute top-0 right-0 bottom-0 left-0 p-4 bg-stone-800/50'>
				<Link href={`/articles/${slug}`} passHref>
					<a className='text-xl mb-7 uppercase font-bold w-3/4' as='h3'>
						{title}
					</a>
				</Link>
				<h2 className='text-sm w-3/4'>{sub_title}</h2>
			</div>
			{/* <Link href={`/articles/${slug}`}></Link> */}
			<TagIconCornerTab thisTag={thisTag} />
		</div>
	);
};

const TagIconCornerTab = ({ thisTag }) => {
	return (
		<>
			<CornerTab thisTag={thisTag} />
			<TagIcon thisTag={thisTag} />
		</>
	);
};

const CornerTab = ({ thisTag }) => {
	return (
		<div className='absolute top-0 right-0 overflow-hidden h-24 w-24 '>
			<div
				className={`bg-gradient-to-br ${thisTag.bg_color} to-neutral-700 h-48 w-48 absolute top-0 -right-24 origin-top-left -rotate-45 border-4 border-white shadow-black shadow-lg`}
			></div>
		</div>
	);
};

const TagIcon = ({ thisTag }) => {
	return (
		<div className='absolute top-4 right-4'>
			<thisTag.icon size={25} color='white' />
		</div>
	);
};

import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import {
	SiJavascript,
	SiJest,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiTypescript,
} from "react-icons/si";

export const BlogPostPreviewCard = ({
	blog_post: { slug, frontmatter },
	compact,
}) => {
	const colorMap = {
		javascript: "border-[#f7df1e]",
		jest: "border-[#cc4615]",
		nodejs: "border-[#66cc33]",
		postgresql: "border-[#336791]",
		react: "border-[#61DAFB]",
		reactnative: "border-[#61DAFB]",
		typescript: "border-[#007ACC]",
	};

	const borderColor = colorMap[frontmatter.tag.toLowerCase()];

	return (
		<div
			className={`w-full px-10 py-6 shadow-md shadow-white mt-6 rounded-lg border-t-4 ${borderColor}`}
		>
			<BackgroundImage imgURL={frontmatter.cover_image} tag={frontmatter.tag} />

			<div className='flex justify-between items-center'>
				<span className='font-light'>{frontmatter.date}</span>
				<ProjectTag>{frontmatter.project}</ProjectTag>
			</div>

			<BodyText title={frontmatter.title} excerpt={frontmatter.excerpt} />
			<ReadItButton slug={slug} />
		</div>
	);
};

const BackgroundImage = ({ color, compact, imgURL, tag }) => {
	const iconMap = {
		javascript: SiJavascript,
		jest: SiJest,
		nodejs: SiNodedotjs,
		postgresql: SiPostgresql,
		react: SiReact,
		reactnative: SiReact,
		typescript: SiTypescript,
	};

	const colorMap = {
		javascript: "bg-[#f7df1e]",
		jest: "bg-[#cc4615]",
		nodejs: "bg-[#66cc33]",
		postgresql: "bg-[#336791]",
		react: "bg-[#61DAFB]",
		reactnative: "bg-[#61DAFB]",
		typescript: "bg-[#007ACC]",
	};

	const BgIcon = iconMap[tag.toLowerCase()];
	const bgColor = colorMap[tag.toLowerCase()];

	return (
		<div
			className={`relative w-full h-32 flex flex-col items-center justify-center mx-auto mb-4 rounded-lg ${bgColor}`}
		>
			<BgIcon size={60} color='text-slate-800' />
			<p>{tag}</p>
			{/* <div
				className={`absolute top-0 right-0 bottom-0 left-0  rounded-lg`}
			></div> */}
		</div>
	);
};

// const TechTag = ({ border_color, tag }) => {
// 	return (
// 		<div className='absolute top-0 right-0 bg-black p-2 rounded-bl rounded-tr'>
// 			{iconMap[tag.toLowerCase()]}
// 		</div>
// 	);
// };

const ProjectTag = ({ children }) => {
	return (
		<div className='px-2 py-1 text-black bg-stone-400 rounded'>{children}</div>
	);
};

const BodyText = ({ slug, title, excerpt }) => {
	return (
		<div className='mt-2'>
			<Link href={`/blog/${slug}`}>
				<a className='text-2xl font-bold hover:underline'>{title}</a>
			</Link>
			<p className='mt-2'>{excerpt}</p>
		</div>
	);
};

const ReadItButton = ({ compact, slug }) => {
	return (
		<div className='mt-6 flex justify-end'>
			<Link href={`/blog/${slug}`}>
				<a className='hover:text-blue-600'>Read More</a>
			</Link>
		</div>
	);
};

BlogPostPreviewCard.propTypes = {};

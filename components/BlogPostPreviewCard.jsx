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
	return (
		<div className='w-full px-10 py-6 bg-stone-300 shadow-md mt-6 rounded-lg'>
			<ImageWithTechTag
				imgURL={frontmatter.cover_image}
				tag={frontmatter.tag}
			/>
			<div className='flex justify-between items-center'>
				<span className='font-light text-gray-600'>{frontmatter.date}</span>
				<ProjectTag>{frontmatter.project}</ProjectTag>
			</div>

			<BodyText title={frontmatter.title} excerpt={frontmatter.excerpt} />
			<ReadItButton slug={slug} />
		</div>
	);
};

const ImageWithTechTag = ({ compact, imgURL, tag }) => {
	const colorMap = {
		javascript: "border-[#f7df1e]",
		jest: "border-[#cc4615]",
		nodejs: "border-[#66cc33]",
		postgresql: "border-[#336791]",
		react: "border-[#61DAFB]",
		reactnative: "border-[#61DAFB]",
		typescript: "border-[#007ACC]",
	};

	const borderColor = colorMap[tag.toLowerCase()];

	return (
		<>
			{!compact && (
				<div
					className={`relative mb-4 h-[150px] w-[300] rounded-lg border-4 ${borderColor}`}
				>
					<Image
						src={imgURL}
						alt='preview card image'
						layout='fill'
						objectFit='cover'
						className='rounded'
					/>
					<TechTag tag={tag} border_color={borderColor} />
				</div>
			)}
		</>
	);
};

const TechTag = ({ border_color, tag }) => {
	const iconMap = {
		javascript: <SiJavascript size={25} color='#f7df1e' />,
		jest: <SiJest size={25} color='#cc4615' />,
		nodejs: <SiNodedotjs size={25} color='#66cc33' />,
		postgresql: <SiPostgresql size={25} color='#336791' />,
		react: <SiReact size={25} color='#61DAFB' />,
		reactnative: <SiReact size={25} color='#61DAFB' />,
		typescript: <SiTypescript size={25} color='#007ACC' />,
	};

	return (
		<div
			className={`absolute bottom-0 right-0 bg-black p-2 rounded-br rounded-tl-lg border-t-4 border-l-4 ${border_color}`}
		>
			{iconMap[tag.toLowerCase()]}
		</div>
	);
};

const ProjectTag = ({ children }) => {
	return (
		<div className='px-2 py-1 text-black bg-stone-400 rounded'>{children}</div>
	);
};

const BodyText = ({ slug, title, excerpt }) => {
	return (
		<div className='mt-2'>
			<Link href={`/blog/${slug}`}>
				<a className='text-2xl text-gray-700 font-bold hover:underline'>
					{title}
				</a>
			</Link>
			<p className='mt-2 text-gray-600'>{excerpt}</p>
		</div>
	);
};

const ReadItButton = ({ compact, slug }) => {
	return (
		<>
			{!compact && (
				<div className='flex justify-between items-center mt-6'>
					<Link href={`/blog/${slug}`}>
						<a className='text-gray-900 hover:text-blue-600'>Read More</a>
					</Link>
				</div>
			)}
		</>
	);
};

BlogPostPreviewCard.propTypes = {};

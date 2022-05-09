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
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

export const BlogPostPreviewCard = ({
	blog_post: {
		blogPostSlug,
		frontmatter: { cover_image, title, sub_title, tag, project, date, excerpt },
	},
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
	const borderColor = colorMap[tag.toLowerCase()];

	return (
		<div
			className={`w-full px-10 py-6 shadow-md shadow-white mt-6 rounded-lg border-t-8 ${borderColor}`}
		>
			<CardCoverImage cover_image={cover_image} tag={tag} />

			<div className='flex justify-between items-center'>
				<CardDate date={date} />
				<CardProjectTag>{project}</CardProjectTag>
			</div>

			<CardTitles slug={blogPostSlug} title={title} excerpt={excerpt} />
			<CardReadButton blogPostSlug={blogPostSlug} />
		</div>
	);
};

const CardCoverImage = ({ cover_image, tag }) => {
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
		javascript: "#f7df1e",
		jest: "#cc4615",
		nodejs: "#66cc33",
		postgresql: "#336791",
		react: "#61DAFB",
		reactnative: "#61DAFB",
		typescript: "#007ACC",
	};

	const BgIcon = iconMap[tag.toLowerCase()];
	const iconColor = colorMap[tag.toLowerCase()];

	return (
		<Link href={`/blog/tag/${tag.toLowerCase()}`} passHref>
			<div className={`relative h-32 w-full mb-4`}>
				<Image
					src={cover_image}
					alt='blog post cover image'
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					className=' mb-4 rounded'
				/>
				<div
					className={`absolute flex flex-col items-center justify-center top-0 right-0 bottom-0 left-0 bg-stone-800/80 rounded hover:bg-transparent focus:bg-transparent`}
				>
					<BgIcon size={75} color={iconColor} className='hover:scale-105' />
				</div>
			</div>
		</Link>
	);
};

const CardDate = ({ date }) => {
	return (
		<span
			id='preview-card-date'
			className='hidden sm:inline-block font-light text-stone-400'
		>
			{dayjs(date).format("ll")}
		</span>
	);
};

const CardProjectTag = ({ children }) => {
	return (
		<div className='w-full sm:w-auto text-center px-4 py-1 text-white bg-stone-600 rounded'>
			{children}
		</div>
	);
};

const CardTitles = ({ slug, title, excerpt }) => {
	return (
		<div className='mt-2'>
			<Link href={`/blog/${slug}`}>
				<a className='text-2xl font-bold hover:underline'>{title}</a>
			</Link>
			<p className='mt-2'>{excerpt}</p>
		</div>
	);
};

const CardReadButton = ({ compact, blogPostSlug }) => {
	return (
		<div className='mt-6 flex justify-end'>
			<Link href={`/blog/${blogPostSlug}`} passHref>
				<a className='hover:text-stone-800 hover:bg-white focus:bg-white border-2 border-white px-4 py-2 rounded'>
					Read It!
				</a>
			</Link>
		</div>
	);
};

BlogPostPreviewCard.propTypes = {};

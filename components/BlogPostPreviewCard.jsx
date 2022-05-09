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
	const tagMap = {
		javascript: {
			border_color: "bg-[#f7df1e]",
			color: "#f7df1e",
			icon: SiJavascript,
		},
		jest: {
			border_color: "bg-[#cc4615]",
			color: "#cc4615",
			icon: SiJest,
		},
		nodejs: {
			border_color: "bg-[#66cc33]",
			color: "#66cc33",
			icon: SiNodedotjs,
		},
		postgresql: {
			border_color: "bg-[#336791]",
			color: "#336791",
			icon: SiPostgresql,
		},
		react: {
			border_color: "bg-[#61DAFB]",
			color: "#61DAFB",
			icon: SiReact,
		},
		reactnative: {
			border_color: "bg-[#61DAFB]",
			color: "#61DAFB",
			icon: SiReact,
		},
		typescript: {
			border_color: "bg-[#007ACC]",
			color: "#007ACC",
			icon: SiTypescript,
		},
	};

	const bgColor = tagMap[tag.toLowerCase()].border_color;
	const tagColor = tagMap[tag.toLowerCase()].color;
	const TagIcon = tagMap[tag.toLowerCase()].icon;

	return (
		<div className='w-full shadow-md shadow-white mt-6 rounded-lg'>
			<div
				className={`flex items-center ${bgColor} justify-center rounded-t-lg px-6 py-1 text-black`}
			>
				<TagIcon size={20} color='black' />
				<p className='ml-2'>{tag}</p>
			</div>
			<CardCoverImage cover_image={cover_image} tag={tag} />
			<CardTitles slug={blogPostSlug} title={title} excerpt={excerpt} />
			<div className='flex items-center justify-between mt-8'>
				<CardDate date={date} />
				<CardReadButton blogPostSlug={blogPostSlug} />
			</div>
		</div>
	);
};

const CardCoverImage = ({ cover_image, tag }) => {
	return (
		<div className={`relative h-32 w-full mb-4`}>
			<Image
				src={cover_image}
				alt='blog post cover image'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				className='mb-4'
			/>
			{/* <div className='absolute top-0 right-0 bottom-0 left-0'>
				<TagIcon size={40} color={tagColor} />
			</div> */}
		</div>
	);
};
const CardTitles = ({ slug, title, excerpt }) => {
	return (
		<div className='mt-2'>
			<Link href={`/blog/${slug}`}>
				<a className='text-xl font-bold hover:underline'>{title}</a>
			</Link>
			<p className='mt-2 text-sm'>{excerpt}</p>
		</div>
	);
};
const CardDate = ({ date }) => {
	return (
		<div className='hidden md:block font-light text-stone-400'>
			{dayjs(date).format("ll")}
		</div>
	);
};
const CardReadButton = ({ compact, blogPostSlug }) => {
	return (
		<Link href={`/${blogPostSlug}`}>
			<a className='hover:text-stone-800 hover:bg-white focus:bg-white border-2 border-white px-4 py-2 rounded'>
				Read
			</a>
		</Link>
	);
};

BlogPostPreviewCard.propTypes = {};

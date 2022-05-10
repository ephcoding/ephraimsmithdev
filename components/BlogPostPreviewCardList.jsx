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

export const BlogPostPreviewCardList = ({ blog_posts }) => {
	return (
		<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
			{blog_posts.length > 0
				? blog_posts.map((post, index) => (
						<BlogPostPreviewCard key={index} blog_post={post} />
				  ))
				: "it's a feature.  not a bu..  alright, it's broken."}
		</div>
	);
};

const BlogPostPreviewCard = ({
	blog_post: {
		blog_post_slug,
		blog_post_meta: {
			cover_image,
			title,
			sub_title,
			tag,
			project,
			date,
			excerpt,
		},
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
		<div
			className={`relative w-full shadow-md shadow-white rounded-lg overflow-hidden p-2 ${bgColor}`}
		>
			<div
				className={`absolute h-[300px] w-[500px] left-1/3 bottom-0 origin-bottom-left rotate-[30deg] bg-stone-800 flex`}
			>
				<div
					className={`h-full w-1 ${bgColor} shadow-md shadow-black/80`}
				></div>
			</div>
			{/* <div
				className={`flex items-center ${bgColor} justify-center rounded-t-lg px-6 py-1 text-black`}
			>
			<TagIcon size={20} color='black' />
			<p className='ml-2'>{tag}</p>
			</div> */}
			{/* <CardCoverImage cover_image={cover_image} tag={tag} /> */}
			<CardTitle slug={blog_post_slug} title={title} sub_title={sub_title} />
			<div className='flex items-center justify-between mt-8'>
				<CardDate date={date} />
				<CardReadButton slug={blog_post_slug} />
			</div>
		</div>
	);
};

const CardTitle = ({ slug, title, sub_title }) => {
	return (
		<div className='mt-2'>
			<Link href={`/${slug}`}>
				<a className='text-sm font-bold bg-transparent hover:underline'>
					{title}
				</a>
			</Link>
			<p className='mt-2 text-sm'>{sub_title}</p>
		</div>
	);
};
const CardSubTitle = () => {
	return <div></div>;
};
const CardDate = ({ date }) => {
	return (
		<div className='hidden md:block font-light text-stone-400'>
			{dayjs(date).format("ll")}
		</div>
	);
};
const CardReadButton = ({ compact, slug }) => {
	return (
		<Link href={`/${slug}`}>
			<a className='hover:text-stone-800 hover:bg-white focus:bg-white border-2 border-white px-4 py-2 rounded'>
				Read
			</a>
		</Link>
	);
};

BlogPostPreviewCardList.propTypes = {
	blog_posts: PropTypes.arrayOf(PropTypes.object),
};

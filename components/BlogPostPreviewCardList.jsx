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
			className={`relative w-full shadow-md shadow-white rounded-lg overflow-hidden`}
		>
			<div className='absolute top-1/4 right-0'>
				<TagIcon size={80} color={tagColor} className='opacity-50' />
			</div>
			<div className='relative p-2 z-10'>
				<Title slug={blog_post_slug} title={title} />
				<SubTitle sub_title={sub_title} />

				<div className='flex items-center justify-between my-3'>
					<Date date={date} />
					<ReadBtn slug={blog_post_slug} />
				</div>
			</div>
		</div>
	);
};

const Title = ({ slug, title }) => {
	return (
		<Link href={`/${slug}`}>
			<a className='text-sm block drop-shadow-md font-bold hover:underline uppercase'>
				{title}
			</a>
		</Link>
	);
};
const SubTitle = ({ sub_title }) => {
	return <h2 className='mt-2 text-xs'>{sub_title}</h2>;
};
const Date = ({ date }) => {
	return (
		<div className='hidden md:block font-light text-sm'>
			{dayjs(date).format("ll")}
		</div>
	);
};
const ReadBtn = ({ compact, slug }) => {
	return (
		<Link href={`/${slug}`}>
			<a className='text-sm hover:text-stone-800 hover:bg-white focus:bg-white border-2 border-white px-4 py-1 rounded'>
				Read
			</a>
		</Link>
	);
};

BlogPostPreviewCardList.propTypes = {
	blog_posts: PropTypes.arrayOf(PropTypes.object),
};

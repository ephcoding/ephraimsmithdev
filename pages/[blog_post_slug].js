import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import matter from "gray-matter";
import { FaChevronLeft } from "react-icons/fa";
import { marked } from "marked";
import { PageWrapper } from "components";
import { TAG_ICON_MAP } from "site-data";

const BlogPostPage = ({
	frontmatter: { cover_image, title, sub_title, tag, project, date },
	content,
	blog_post_slug,
}) => {
	const TagIcon = TAG_ICON_MAP[tag.toLowerCase()].icon;
	const tagColor = TAG_ICON_MAP[tag.toLowerCase()].color;

	return (
		<PageWrapper title={title}>
			<Link href='/' passHref>
				<a className='flex items-center hover:text-blue-500'>
					<FaChevronLeft size={20} color='white' className='mr-2 ' /> Go Back
				</a>
			</Link>
			<div className='w-full px-10 py-6 bg-stone-800 rounded-lg mt-6'>
				<div className='mt-4'>
					<h1 className='text-5xl mb-2'>{title}</h1>
					<h2 className='mb-4'>{sub_title}</h2>
					<TagIcon size={30} color={tagColor} />
				</div>
				<div className='relative container w-full h-58'>
					<Image
						src={cover_image}
						alt=''
						className='w-full rounded'
						layout='fill'
						objectFit='cover'
					/>
				</div>

				<div className='mt-2'>
					<div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
				</div>
			</div>
		</PageWrapper>
	);
};

// - defines which routes (pages) to pre-render
// - returns [paths] paramsObj[]
export async function getStaticPaths() {
	const filePathNames = fs.readdirSync(path.join("blog_posts"));

	const blogPostSlugs = filePathNames.map((filename) => ({
		params: {
			blog_post_slug: filename.replace(".md", ""),
		},
	}));

	return {
		paths: blogPostSlugs,
		fallback: false,
	};
}

// getStaticProps({params, preview, previewData, locale, locales, defaultLocale})
// params --> dynamic page route params
export async function getStaticProps({ params: { blog_post_slug } }) {
	const blogPostContent = fs.readFileSync(
		path.join("blog_posts", blog_post_slug + ".md"),
		"utf-8"
	);

	const { data: frontmatter, content } = matter(blogPostContent);
	return {
		props: {
			frontmatter,
			content,
			blog_post_slug,
		},
	};
}

export default BlogPostPage;

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import { PageWrapper } from "components";

const BlogPostPage = ({
	frontmatter: { cover_image, title, sub_title, tag, project, date },
	content,
	blog_post_slug,
}) => {
	console.log(">> BlogPostPage >>\n", blog_post_slug);
	return (
		<PageWrapper title={title}>
			<Link href='/blog'>Go Back</Link>
			<div className='w-full px-10 py-6 bg-stone-800 rounded-lg shadow-md shadow-white mt-6'>
				<div className='flex justify-between items-center mt-4'>
					<h1 className='text-5xl mb-7'>{title}</h1>
					<p>{tag}</p>
				</div>
				<img src={cover_image} alt='' className='w-full rounded' />

				<div className='mt-2'>
					<div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
				</div>
			</div>
		</PageWrapper>
	);
};

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

export async function getStaticProps({ params: { blog_post_slug } }) {
	console.log(">> [blog_post_slug].js >>\n", blog_post_slug);

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

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import Image from "next/image";
import { PageWrapper } from "components";

export default function Article({
	frontmatter: { cover_image, title, sub_title, date, description, keywords },
	content,
	slug,
}) {
	return (
		<PageWrapper pageInfo={title}>
			<Link href='/'>Go Back</Link>
			<div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
				<div className='flex justify-between items-center mt-4'>
					<h1 className='text-5xl mb-7'>{title}</h1>
				</div>
				<Image src={cover_image} alt='' className='w-full rounded' />

				<div className='mt-2'>
					<div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
				</div>
			</div>
		</PageWrapper>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("articles"));

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(".md", ""),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(
		path.join("articles", slug + ".md"),
		"utf-8"
	);

	const { data: frontmatter, content } = matter(markdownWithMeta);
	return {
		props: {
			frontmatter,
			content,
			slug,
		},
	};
}

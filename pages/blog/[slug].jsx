import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NavBtn } from "@/components/NavBtn";
import Link from "next/link";
import Meta from "@/components/Meta";

export default function BlogPost({
	frontmatter: {
		leadTitle,
		headingTitle,
		description,
		keywords,
		author,
		about,
	},
	content,
	slug,
}) {
	const meta = { leadTitle, description, keywords };
	return (
		<Meta meta={meta}>
			<div className='page blog-post'>
				<Header />
				<main className='blog-post__content'>
					<article id={leadTitle} className='flex-fill pt-3'>
						<h1 className='h1'>
							<strong>{leadTitle}</strong>
						</h1>
						<h2 className=''>{headingTitle}</h2>
						{/* <p className='text-end'>{date}</p> */}
						<div className='separator'></div>
						{/* <div className=''> */}
						<div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
						{/* </div> */}
					</article>
				</main>
				<Footer />
			</div>
		</Meta>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts"));

	const paths = files.map(filename => ({
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
		path.join("posts", slug + ".md"),
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

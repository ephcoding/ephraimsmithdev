import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { PAGE_META } from "../site-data";
import { PageWrapper } from "components";

export default function HomePage({ posts }) {
	const { home } = PAGE_META;

	return <PageWrapper pageInfo={home}></PageWrapper>;
}

export async function getStaticProps() {
	const files = fs.readdirSync(path.join("articles"));

	const posts = files.map((filename) => {
		const slug = filename.replace(".md", "");

		const markdownFileContent = fs.readFileSync(
			path.join("articles", filename),
			"utf-8"
		);

		const { data: frontmatter } = matter(markdownFileContent);

		return { slug, frontmatter };
	});

	console.log(">> pages/index.js: getStaticProps() >>", posts);

	return {
		props: { posts },
	};
}

import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { PAGE_META } from "../site-data";
import { ArticlePreviewCard, PageWrapper } from "components";

export default function HomePage({ articles }) {
	const { home } = PAGE_META;

	return (
		<PageWrapper pageInfo={home}>
			<p>
				This is some intro text. This is some intro text. This is some intro
				text. This is some intro text. This is some intro text. This is some
				intro text. This is some intro text. This is some intro text.
			</p>

			<input className='block mx-auto' placeholder='search articles..' />

			<div>
				{articles.map((article) => (
					<ArticlePreviewCard article={article} />
				))}
			</div>
		</PageWrapper>
	);
}

export async function getStaticProps() {
	const files = fs.readdirSync(path.join("articles"));

	const articles = files.map((filename) => {
		const slug = filename.replace(".md", "");

		const markdownFileContent = fs.readFileSync(
			path.join("articles", filename),
			"utf-8"
		);

		const { data: frontmatter } = matter(markdownFileContent);

		return { slug, frontmatter };
	});

	console.log(">> pages/index.js: getStaticProps() >>", articles);

	return {
		props: { articles },
	};
}

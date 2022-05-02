import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from ".";

const files = fs.readdirSync(path.join("articles"));

export function getArticles() {
	const articles = files.map((filename) => {
		const slug = filename.replace(".md", "");

		const markdownWithMeta = fs.readFileSync(
			path.join("articles", filename),
			"utf-8"
		);

		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
		};
	});

	return articles.sort(sortByDate);
}

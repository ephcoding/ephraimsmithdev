import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "lib";

const files = fs.readdirSync(path.join("articles"));

export function getArticleSlugsAndFrMatOnServer() {
	const articles = files.map((filename) => {
		const slug = filename.replace(".md", "");

		const markdownFileContent = fs.readFileSync(
			path.join("articles", filename),
			"utf-8"
		);

		const { data: frontmatter } = matter(markdownFileContent);

		return { slug, frontmatter };
	});
}

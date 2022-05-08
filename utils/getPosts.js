import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "utils";

const files = fs.readdirSync(path.join("blog_posts"));

export const getPosts = () => {
	const blogPosts = files.map((filename) => {
		const slug = filename.replace(".md", "");

		const markdownWithMeta = fs.readFileSync(
			path.join("blog_posts", filename),
			"utf-8"
		);

		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
		};
	});

	return blogPosts.sort(sortByDate);
};

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const files = fs.readdirSync(path.join("posts"));

export const getCurrentYear = () => new Date(Date.now()).getFullYear();
export const getDateMonthName = date => {
	date.toLocaleString("default", { month: "long" });
};
export function getPosts() {
	const posts = files.map(filename => {
		const slug = filename.replace(".md", "");

		const markdownWithMeta = fs.readFileSync(
			path.join("posts", filename),
			"utf-8"
		);

		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
		};
	});

	return posts.sort(sortByDate);
}
export const sortByDate = (a, b) => {
	return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};
// export const sortHighLow = (a, b) => b - a;

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "utils";

// get [array of file names] in blog_posts/ folder
const fileNames = fs.readdirSync(path.join("blog_posts"));

// get {slug,frontmatter}[] from server to display [BlogPostPreviewCard]s
export const getSortedBlogPostSlugsAndFrontmatter = () => {
	const slugsAndFrontmatterObjARR = fileNames.map((filename) => {
		const blogPostSlug = filename.replace(".md", "");

		const blogPostContent = fs.readFileSync(
			path.join("blog_posts", filename),
			"utf-8"
		);

		const { data: frontmatter } = matter(blogPostContent);

		return {
			blogPostSlug,
			frontmatter,
		};
	});

	return slugsAndFrontmatterObjARR.sort(sortByDate);
};

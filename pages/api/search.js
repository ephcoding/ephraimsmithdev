import fs from "fs";
import path from "path";
import matter from "gray-matter";

const search = (req, res) => {
	let blog_posts;

	if (process.env.NODE_ENV === "production") {
		// Fetch from cache
		blog_posts = require("/cache/data").blog_posts;
	} else {
		const fileNames = fs.readdirSync(path.join("blog_posts"));

		blog_posts = fileNames.map((filename) => {
			const blog_post_slug = filename.replace(".md", "");

			const blogPostContent = fs.readFileSync(
				path.join("blog_posts", filename),
				"utf-8"
			);

			const { data: frontmatter } = matter(blogPostContent);

			return {
				blog_post_slug,
				frontmatter,
			};
		});
	}

	const lowerCaseSearchTerm = req.query.q.toLowerCase();

	const results = blog_posts.filter(
		({ frontmatter: { title, excerpt, tag, project } }) =>
			[title, excerpt, tag, project].some((field) =>
				field.toLowerCase().includes(lowerCaseSearchTerm)
			)
	);

	console.log(">> API >>\n", results);

	// res.status(200).json(JSON.stringify({ results }));
	res.status(200).json(JSON.stringify({ results }));
};

export default search;

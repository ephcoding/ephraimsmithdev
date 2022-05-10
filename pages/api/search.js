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
			const blogPostSlug = filename.replace(".md", "");

			const blogPostContent = fs.readFileSync(
				path.join("blog_posts", filename),
				"utf-8"
			);

			const { data: meta } = matter(blogPostContent);

			return {
				blog_post_slug: blogPostSlug,
				blog_post_meta: meta,
			};
		});
	}

	const searchTermLC = req.query.q.toLowerCase();

	const filteredBlogPosts = blog_posts.filter(
		({ blog_post_meta: { title, excerpt, tag, project } }) =>
			[title, excerpt, tag, project].some((field) => {
				const metaField = field.toLowerCase();

				return metaField.includes(searchTermLC);
			})
	);

	res.status(200).json(JSON.stringify({ filteredBlogPosts }));
};

export default search;

// const fs = require("fs");
// const path = require("path");
// const matter = require("gray-matter");

export const processCachedBlogPosts = () => {
	// const files = fs.readdirSync(path.join("posts"));
	// const posts = files.map((filename) => {
	// 	const slug = filename.replace(".md", "");
	// 	const markdownWithMeta = fs.readFileSync(
	// 		path.join("posts", filename),
	// 		"utf-8"
	// 	);
	// 	const { data: meta } = matter(markdownWithMeta);
	// 	return {
	// 		slug,
	// 		meta,
	// 	};
	// });
	// return `export const posts = ${JSON.stringify(posts)}`;
};

// try {
// 	fs.readdirSync("cache");
// } catch (error) {
// 	fs.mkdirSync("cache");
// }

// fs.writeFile("cache/data.js", processCachedBlogPosts.js(), function (err) {
// 	if (err) return console.log(err);
// 	console.log("Posts Cached...");
// });

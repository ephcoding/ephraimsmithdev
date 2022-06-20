export const sortByDate = (a, b) => {
	return new Date(b.blog_post_meta.date) - new Date(a.blog_post_meta.date);
};

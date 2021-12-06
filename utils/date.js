export const sortByDate = (a, b) => {
	return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};
export const getCurrentYear = () => new Date(Date.now()).getFullYear();
export const getDateMonthName = date =>
	date.toLocaleString("default", { month: "long" });

export const sortByDate = (a, b) => {
	return new Date(b.meta.date) - new Date(a.meta.date);
};

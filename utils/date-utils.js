export const getCurrentYear = () => new Date(Date.now()).getFullYear();
export const getMonthName = (date) => {
	date.toLocaleString("default", { month: "long" });
};

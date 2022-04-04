export const getDateMonthName = date => {
	date.toLocaleString("default", { month: "long" });
};

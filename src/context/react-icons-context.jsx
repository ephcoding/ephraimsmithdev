import { IconContext } from "react-icons";

export const ReactIconsContext = ({ children }) => {
	return (
		<IconContext.Provider value={{ color: "bg-accent" }}>
			{children}
		</IconContext.Provider>
	);
};

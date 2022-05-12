import { getCurrentYear } from "utils";

export const Footer = () => {
	return (
		<footer>
			<div>&copy; {getCurrentYear()} Ephraim Smith | ephraimsmith.dev</div>
		</footer>
	);
};

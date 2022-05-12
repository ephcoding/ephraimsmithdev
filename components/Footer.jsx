import { FooterNav } from "./FooterNav";
import { getCurrentYear } from "utils";

export const Footer = () => {
	return (
		<footer className='flex items-center justify-between'>
			<div>&copy; {getCurrentYear()} Ephraim Smith. All Rights Reserved.</div>
			<FooterNav />
		</footer>
	);
};

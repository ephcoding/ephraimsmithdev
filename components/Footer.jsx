import { SOCIAL_NAV } from "../site_data";
import NavList from "./NavList";

export default function Footer() {
	return (
		<footer className='border border-green-600'>
			<NavList nav={SOCIAL_NAV} />
			<div className='container mx-auto text-center'>
				&copy; {new Date().getFullYear()} Ephraim Smith | ephraimsmith.dev
			</div>
		</footer>
	);
}

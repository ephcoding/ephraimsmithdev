import { SITE_NAV } from "../site_data";
import NavList from "./NavList";

const Header = ({ title: { first, second } }) => {
	return (
		<header className='border border-green-600 flex justify-between'>
			<NavList nav={SITE_NAV} />
		</header>
	);
};

export default Header;

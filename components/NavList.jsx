import { NAV_ITEMS } from "../site_data";
import Link from "next/link";

const NavList = () => {
	const navItems = NAV_ITEMS.map(({ label, url, icon }) => {
		return (
			<li key={label} className='nav__li'>
				<Link href={url}>
					<a className='nav__a'>{icon ? icon : label}</a>
				</Link>
			</li>
		);
	});

	return (
		<nav className=''>
			<ul className='flex'>{navItems}</ul>
		</nav>
	);
};

export default NavList;

import { NAV_ITEMS } from "../site_data/site_data";
import Link from "next/link";

const Navigation = () => {
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
		<nav className='nav'>
			<ul className='nav__ul'>{navItems}</ul>
		</nav>
	);
};

export default Navigation;

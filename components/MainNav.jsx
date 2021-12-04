import { MAIN_NAV_LINKS } from "../sitedata/main_nav_items";
import Link from "next/link";

const MainNav = () => {
	const mainNavItems = MAIN_NAV_LINKS.map(navItem => {
		return (
			<li
				key={navItem.LABEL}
				className='main-nav__item'
				style={{ margin: "0 1.5vmin" }}
			>
				<Link href={navItem.URL} className='site-nav-btn'>
					{navItem.LABEL}
				</Link>
			</li>
		);
	});
	return (
		<nav id='MainNav' className='main-nav'>
			{mainNavItems}
		</nav>
	);
};

export default MainNav;

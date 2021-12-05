import { MAIN_NAV_LINKS } from "../sitedata/main_nav_items";
import Link from "next/link";

const MainNav = () => {
	const mainNavItems = MAIN_NAV_LINKS.map(navItem => {
		return (
			<li
				key={navItem.LABEL}
				className='main-nav__li'
				style={{ margin: "0 1.5vmin" }}
			>
				<Link href={navItem.URL}>
					<a className='nav-btn'>{navItem.LABEL}</a>
				</Link>
			</li>
		);
	});
	return (
		<nav id='MainNav'>
			<ul className='main-nav'>{mainNavItems}</ul>
		</nav>
	);
};

export default MainNav;

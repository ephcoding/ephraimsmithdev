import { MAIN_NAV } from "../sitedata/navigation";
import Link from "next/link";

const MainNav = () => {
	const mainNavItems = MAIN_NAV.map(navItem => {
		return (
			<li
				key={navItem.label}
				className='main-nav__li'
				style={{ margin: "0 1.5vmin" }}
			>
				<Link href={navItem.url}>
					<a className='nav-btn'>{navItem.label}</a>
				</Link>
			</li>
		);
	});
	return (
		<nav id='MainNav' className='main-nav'>
			<ul className='main-nav-ul'>{mainNavItems}</ul>
		</nav>
	);
};

export default MainNav;

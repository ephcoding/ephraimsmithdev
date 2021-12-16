import { NAVIGATION } from "../sitedata/navigation";
import Link from "next/link";

const Navigation = () => {
	const mainNavItems = NAVIGATION.map(navItem => {
		const { label, url, icon } = navItem;

		return (
			<li key={label} className='main-nav__li' style={{ margin: "0 1.5vmin" }}>
				<Link href={url}>
					<a className='nav-btn'>{icon ? icon : label}</a>
				</Link>
			</li>
		);
	});
	return (
		<nav id='Navigation' className='main-nav'>
			<ul className='main-nav-ul'>{mainNavItems}</ul>
		</nav>
	);
};

export default Navigation;

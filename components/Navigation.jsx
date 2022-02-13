import { NAV_ITEMS } from "../js/site_data";
import Link from "next/link";

const Navigation = () => {
	const navItems = NAV_ITEMS.map(({ label, url, icon }) => {
		return (
			<li key={label} className='nav__li'>
				<Link href={url}>
					{label === "home" || label === "tools" ? (
						<a className='nav__a'>{icon ? icon : label}</a>
					) : (
						<a className='nav__a' target='_blank'>
							{icon ? icon : label}
						</a>
					)}
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

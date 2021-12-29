import { NAVIGATION } from "../sitedata/navigation";
import Link from "next/link";

const Navigation = () => {
	const navItems = NAVIGATION.map(({ label, url, icon }) => {
		return (
			<li key={label} className='nav__li'>
				<Link href={url}>
					<a className='nav__a'>{icon ? icon : label}</a>
				</Link>
			</li>
		);
	});

	return (
		<nav id='Navigation' className='nav'>
			<ul className='nav__ul'>{navItems}</ul>
		</nav>
	);
};

export default Navigation;

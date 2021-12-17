import { NAVIGATION } from "../sitedata/navigation";
import Link from "next/link";

const Navigation = () => {
	const mainNavItems = NAVIGATION.map(navItem => {
		const { label, url, icon } = navItem;

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
			<ul className='nav__ul'>{mainNavItems}</ul>
		</nav>
	);
};

export default Navigation;

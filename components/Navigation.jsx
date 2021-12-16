import { NAVIGATION } from "../sitedata/navigation";
import Link from "next/link";

const Navigation = () => {
	const mainNavItems = NAVIGATION.map(navItem => {
		const { label, url, icon } = navItem;
		const isExtLink = /^[\"h]+/.test(url);
		const classes = isExtLink ? "link ext" : "link";
		console.log(/^"h/.test(url));

		return (
			<li key={label} className='nav__li' style={{ margin: "0 1.5vmin" }}>
				<Link className={classes} href={url}>
					<a className={classes}>{icon ? icon : label}</a>
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

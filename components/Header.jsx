import { SITE_NAV } from "../site_data";
import Link from "next/link";

const NavItem = ({ navItem }) => {
	const { url, label } = navItem;

	return (
		<li>
			<Link href={url}>
				<a>{label}</a>
			</Link>
		</li>
	);
};
const NavList = ({ nav }) => {
	return (
		<nav>
			<ul className='flex'>
				{nav.map(navItem => (
					<NavItem key={navItem.url} navItem={navItem} />
				))}
			</ul>
		</nav>
	);
};

const Header = ({ title: { first, second } }) => {
	return (
		<header className='border border-green-600 flex justify-between'>
			<NavList nav={SITE_NAV} />
		</header>
	);
};

export default Header;

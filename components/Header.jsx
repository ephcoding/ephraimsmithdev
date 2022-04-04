import Link from "next/link";
import { SITE_NAV } from "../constants";

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

export const Header = ({ title: { first, second } }) => {
	return (
		<header className='border border-green-600 flex justify-between'>
			<NavList nav={SITE_NAV} />
		</header>
	);
};

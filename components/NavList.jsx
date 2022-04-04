import NavItem from "./NavItem";
import Link from "next/link";

export default function NavList({ nav }) {
	return (
		<nav>
			<ul className='flex'>
				{nav.map(navItem => (
					<NavItem key={navItem.url} navItem={navItem} />
				))}
			</ul>
		</nav>
	);
}

import NavItem from "./NavItem";
import Link from "next/link";

export default function NavList({ nav }) {
	return (
		<nav>
			<ul className='flex'>
				{nav.map(navItem => (
					<span>{navItem.label}</span>
				))}
			</ul>
		</nav>
	);
}

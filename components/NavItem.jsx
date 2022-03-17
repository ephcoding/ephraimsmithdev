import Link from "next/link";

const NavItem = ({ navItem }) => {
	return (
		<li>
			<Link href={navItem.url} passHref>
				<a>{navItem.label}</a>
			</Link>
		</li>
	);
};

export default NavItem;

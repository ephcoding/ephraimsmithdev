import Link from "next/link";

const NavItem = ({ navItem }) => {
	const { url, label } = navItem;

	return (
		<li>
			<Link href={url} passHref>
				<a>{label}</a>
			</Link>
		</li>
	);
};

export default NavItem;
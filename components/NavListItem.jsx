import Link from "next/link";

export const NavListItem = ({ route, label }) => {
	return (
		<Link href={route}>
			<a className='site-nav__li-link'>{label}</a>
		</Link>
	);
};

import Link from "next/link";

export const NavBtn = ({ route, label }) => {
	return (
		<Link href={route}>
			<a className='site-nav__li-link'>{label}</a>
		</Link>
	);
};

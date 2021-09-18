import Link from 'next/link';

export const NavBtn = ({ route, label }) => {
	return (
		<Link href={route}>
			<a className='nav-link-btn nav-link'>{label}</a>
		</Link>
	);
};

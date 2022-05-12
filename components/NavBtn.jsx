import Link from "next/link";

export const NavBtn = ({ route, label }) => {
	return (
		<Link href={route}>
			<a>{label}</a>
		</Link>
	);
};

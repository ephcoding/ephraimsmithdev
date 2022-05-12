import Link from "next/link";

export const HeaderNav = ({ nav_items }) => {
	return (
		<nav>
			<ul>
				{nav_items.map(({ href, name }) => (
					<Link href={href} key={name}>
						<a>{name}</a>
					</Link>
				))}
			</ul>
		</nav>
	);
};

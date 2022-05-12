import Link from "next/link";

export const Navigation = ({ nav_items }) => {
	return (
		<nav>
			<ul>
				{nav_items.map(({ href, name }) => (
					<Link href={href}>
						<a>{name}</a>
					</Link>
				))}
			</ul>
		</nav>
	);
};

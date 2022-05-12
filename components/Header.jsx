import { Navigation } from "components";
import { NAV_ITEMS } from "site_data";

export const Header = ({ title }) => {
	return (
		<header>
			<h1>{title}</h1>
			<Navigation nav_items={NAV_ITEMS} />
		</header>
	);
};

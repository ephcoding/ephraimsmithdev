import { Navigation } from "components";
import { NAV_ITEMS } from "site_data";

export const Header = ({ title }) => {
	return (
		<header>
			<Branding />
			<Navigation nav_items={NAV_ITEMS} />
		</header>
	);
};

const Branding = () => {
	return <div></div>;
};

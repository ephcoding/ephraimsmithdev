import { HeaderNav } from "components";
import { NAV_ITEMS } from "site_data";

export const Header = ({ title }) => {
	return (
		<header className='bg-stone-700'>
			<Branding />
			<HeaderNav nav_items={NAV_ITEMS} />
		</header>
	);
};

const Branding = () => {
	return <div>EPHRAIM SMITH</div>;
};

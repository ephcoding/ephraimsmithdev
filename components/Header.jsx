import { Navigation } from "components";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export const Header = () => {
	return (
		<header class='shadow-sm'>
			<Navigation />
		</header>
	);
};

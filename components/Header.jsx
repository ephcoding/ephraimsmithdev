import HeaderBranding from "./HeaderBranding";
import MainNav from "./MainNav";

export default function Header() {
	return (
		<header className='header'>
			<HeaderBranding />
			<MainNav />
		</header>
	);
}

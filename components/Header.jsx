import MainNav from "./MainNav";
import SocialNav from "./SocialNav";

export default function Header() {
	return (
		<header className='header'>
			<MainNav />
			<SocialNav />
		</header>
	);
}

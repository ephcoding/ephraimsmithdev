import Branding from "./Branding";
import MainNav from "./MainNav";
import SocialNav from "./SocialNav";

export default function Header() {
	return (
		<header className='header'>
			<Branding />
			<div className='header__nav'>
				<MainNav />
				{/* <SocialNav /> */}
			</div>
		</header>
	);
}

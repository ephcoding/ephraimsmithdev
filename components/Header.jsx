import ECLogo from "@/components/ECLogo";
import Navigation from "./Navigation";

export default function Header() {
	return (
		<header className='header'>
			<ECLogo />
			<Navigation />
		</header>
	);
}

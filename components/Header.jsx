import Link from "next/link";
import { MainNav } from "components";

export const Header = () => {
	return (
		<header>
			<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 '>
				<div className='relative flex items-center justify-between h-16 '>
					<HeaderBrandingLink />
					<MainNav />
				</div>
			</div>
		</header>
	);
};

const HeaderBrandingLink = () => {
	return (
		<Link href='/' passHref>
			<a>
				<h1 className='font-bold'>EPHRAIM SMITH</h1>
			</a>
		</Link>
	);
};

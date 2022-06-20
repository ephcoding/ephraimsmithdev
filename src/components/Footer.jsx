import Link from "next/link";
import { SOCIAL_NAV } from "site_data";
import { getCurrentYear } from "utils";

export const Footer = () => {
	return (
		<footer className='flex flex-col items-center py-2'>
			{/* <FooterNav /> */}
			<Copyright />
		</footer>
	);
};

const Copyright = () => {
	return (
		<div className='text-center text-sm'>
			&copy; {getCurrentYear()} Ephraim Smith. All Rights Reserved.
		</div>
	);
};
const FooterNav = () => {
	return (
		<ul className='flex items-align space-x-4'>
			<SocialNavItems />
		</ul>
	);
};
const SocialNavItems = () => {
	return (
		<>
			{SOCIAL_NAV.map(({ name, href, icon: Icon }) => (
				<Link key={name} href={href}>
					<a target='_blank'>{<Icon size={20} color='white' />}</a>
				</Link>
			))}
		</>
	);
};

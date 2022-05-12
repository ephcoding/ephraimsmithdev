import Link from "next/link";
import { SOCIAL_NAV } from "site_data";

export const FooterNav = () => {
	return (
		<ul className='flex items-align space-x-4'>
			{SOCIAL_NAV.map(({ name, href, icon: Icon }) => (
				<Link key={name} href={href}>
					<a target='_blank'>{<Icon size={20} color='white' />}</a>
				</Link>
			))}
		</ul>
	);
};

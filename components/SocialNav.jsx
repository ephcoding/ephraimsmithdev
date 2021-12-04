import { SOCIAL_NAV_LINKS } from "../sitedata/social_nav_items";
import Link from "next/link";

const SocialNav = () => {
	const socialNavItems = SOCIAL_NAV_LINKS.map(socLink => {
		return (
			<li
				key={socLink.label}
				className='social-nav__item'
				style={{ margin: "0 1.5vmin" }}
			>
				<Link
					href={socLink.url}
					target='_blank'
					className='ext-link'
					style={{ fontSize: "6vmin" }}
				>
					{socLink.reactIcon}
				</Link>
			</li>
		);
	});

	return (
		<nav id='SocialNav' className='social-nav'>
			{socialNavItems}
		</nav>
	);
};

export default SocialNav;

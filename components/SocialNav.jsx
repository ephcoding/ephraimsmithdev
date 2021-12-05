import { SOCIAL_NAV_LINKS } from "../sitedata/social_nav_items";
import Link from "next/link";

const SocialNav = () => {
	const socialNavItems = SOCIAL_NAV_LINKS.map(socLink => {
		return (
			<li
				key={socLink.label}
				className='social-nav__li'
				style={{ margin: "0 1.5vmin" }}
			>
				<Link href={socLink.url} target='_blank' style={{ fontSize: "6vmin" }}>
					<a className='ext-link'>{socLink.reactIcon}</a>
				</Link>
			</li>
		);
	});

	return (
		<nav id='SocialNav'>
			<ul className='social-nav'>{socialNavItems}</ul>
		</nav>
	);
};

export default SocialNav;

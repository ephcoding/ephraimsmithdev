import { SOCIAL_NAV } from "../sitedata/navigation";
import Link from "next/link";

const SocialNav = () => {
	const socialNavItems = SOCIAL_NAV.map(socLink => {
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
		<nav id='SocialNav' className='social-nav'>
			<span>FOLLOW: </span>
			<ul className='social-nav-ul'>{socialNavItems}</ul>
		</nav>
	);
};

export default SocialNav;

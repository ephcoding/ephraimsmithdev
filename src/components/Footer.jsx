import Link from "next/link";
import { SITE_NAV, SOCIAL_LINKS } from "site-data";
import { ReactIconLink } from "./ReactIcon";

export const Footer = () => {
	return (
		<footer class='footer footer-center p-10 bg-primary text-primary-content'>
			<div class='grid grid-flow-col gap-4'>
				{SITE_NAV.map(({ name, href }) => (
					<Link key={href} href={href}>
						<a className='link link-hover'>{name}</a>
					</Link>
				))}
			</div>
			<div>
				<div class='grid grid-flow-col gap-4'>
					{SOCIAL_LINKS.map(({ name, href, icon_name }) => (
						<Link key={href} href={href}>
							<a className='link link-hover'>
								<ReactIconLink name={icon_name} />
							</a>
						</Link>
					))}
				</div>
			</div>
			<div>
				<p>Copyright © 2022 | Ephraim Smith | All right reserved.</p>
			</div>
		</footer>
	);
};

import Nav from 'react-bootstrap/Nav';
import { SOCIAL_NAV_LINKS } from '../sitedata/social-nav-item-data';

export const NavMenuSocial = () => {
	const socialNavItems = SOCIAL_NAV_LINKS.map((socLink) => {
		return (
			<Nav.Item as='li' key={socLink.label} style={{ margin: '0 1.5vmin' }}>
				<Nav.Link
					href={socLink.url}
					target='_blank'
					className='external-link'
					style={{ fontSize: '6vmin' }}
				>
					{socLink.reactIcon}
				</Nav.Link>
			</Nav.Item>
		);
	});

	return (
		<Nav id='NavMenuSocial' as='ul' className='justify-content-center'>
			{socialNavItems}
		</Nav>
	);
};

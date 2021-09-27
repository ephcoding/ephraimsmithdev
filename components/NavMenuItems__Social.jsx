import { SOCIAL_LINKS } from '../sitedata/social-nav-item-data';
import Nav from 'react-bootstrap/Nav';

export const SocialNavItems = () => {
	const socialNavId = 'SocialNavMenu';

	const socNavItems = SOCIAL_LINKS.map((socLink) => {
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

	return { socialNavId, socNavItems };
};

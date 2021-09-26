import { SOCIAL_LINKS } from '../sitedata/social-links';
import Nav from 'react-bootstrap/Nav';

export const NavSocial = () => {
	const socNavLinks = SOCIAL_LINKS.map((socLink) => {
		return (
			<Nav.Item as='li' key={socLink.label} style={{ margin: '0 1.5vmin' }}>
				<Nav.Link
					href={socLink.url}
					target={socLink.target}
					className='external-link'
					style={{ fontSize: '6vmin' }}
				>
					{socLink.reactIcon}
				</Nav.Link>
			</Nav.Item>
		);
	});

	return (
		<Nav id='NavSocial' as='ul'>
			{socNavLinks}
		</Nav>
	);
};

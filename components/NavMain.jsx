import { MAIN_NAV_LINKS } from '../sitedata/main-nav-links';
import Nav from 'react-bootstrap/Nav';

export const NavMain = () => {
	const mainNavLinks = MAIN_NAV_LINKS.map((navItem) => {
		return (
			<Nav.Item as='li' key={navItem.label} style={{ margin: '0 1.5vmin' }}>
				<Nav.Link
					href={navItem.url}
					target={navItem.target}
					className='site-nav-btn'
				>
					{navItem.label}
				</Nav.Link>
			</Nav.Item>
		);
	});

	return (
		<Nav id='NavMain' as='ul'>
			{mainNavLinks}
		</Nav>
	);
};

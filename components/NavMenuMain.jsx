import Nav from 'react-bootstrap/Nav';
import { MAIN_NAV_LINKS } from '../sitedata/main-nav-item-data';

export const NavMenuMain = () => {
	const mainNavItems = MAIN_NAV_LINKS.map((navItem) => {
		return (
			<Nav.Item as='li' key={navItem.LABEL} style={{ margin: '0 1.5vmin' }}>
				<Nav.Link href={navItem.URL} className='site-nav-btn'>
					{navItem.LABEL}
				</Nav.Link>
			</Nav.Item>
		);
	});

	return (
		<Nav id='NavMenuMain' as='ul' className='justify-content-center'>
			{mainNavItems}
		</Nav>
	);
};

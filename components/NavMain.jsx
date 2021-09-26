import { MAIN_NAV_LINKS } from '../sitedata/main-nav-links';
import Nav from 'react-bootstrap/Nav';

export const NavMain = () => {
	const mainNavLinks = MAIN_NAV_LINKS.map((navItem) => {
		return (
			<Nav.Item as='li' key={navItem.label} style={{ margin: '0 1.5vmin' }}>
				<Nav.Link
					href={navItem.url}
					target={navItem.target}
					className='px-2 site-nav-btn'
					style={{ fontSize: '5vmin' }}
				>
					{navItem.label}
				</Nav.Link>
			</Nav.Item>
		);
	});

	return (
		<Nav id='MainNav' as='ul'>
			{mainNavLinks}
		</Nav>
	);
};

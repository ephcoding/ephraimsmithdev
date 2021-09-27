import Nav from 'react-bootstrap/Nav';
import { MainNavItems, ID_SELECTOR } from '@/components/NavMenuItems__Main';

export const NavMenu = ({ navItems, navId }) => {
	return (
		<Nav id={navId} as='ul' className='justify-content-center'>
			{navItems}
		</Nav>
	);
};

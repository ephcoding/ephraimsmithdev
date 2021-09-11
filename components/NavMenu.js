import { accounts } from '../sitedata/accounts';
import Nav from 'react-bootstrap/Nav';

export const NavMenu = () => {
	const navlinks = accounts.map((account) => {
		return (
			<Nav.Item as='li'>
				<Nav.Link
					href={account.url}
					target='_blank'
					className='text-white mx-4'
					style={{ 'font-size': '3vw' }}
				>
					{account.label}
				</Nav.Link>
			</Nav.Item>
		);
	});

	return <Nav as='ul'>{navlinks}</Nav>;
};

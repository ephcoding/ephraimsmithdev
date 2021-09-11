import { accounts } from '../sitedata/accounts';
import Nav from 'react-bootstrap/Nav';

export const NavMenu = () => {
	const navlinks = accounts.map((account) => {
		return (
			<Nav.Item as='li' key={account.label} style={{ margin: '0 1.5vmin' }}>
				<Nav.Link
					href={account.url}
					target='_blank'
					className='nav-links px-2'
					style={{ fontSize: '5vmin' }}
				>
					{account.label}
				</Nav.Link>
			</Nav.Item>
		);
	});

	return <Nav as='ul'>{navlinks}</Nav>;
};

import { accounts } from '../sitedata/accounts';
import Nav from 'react-bootstrap/Nav';

export const NavMenu = () => {
	const navlinks = accounts.map((account) => {
		return (
			<Nav.Item as='li' key={account.label} style={{ margin: '0 1.5vmin' }}>
				<Nav.Link
					href={account.url}
					target={account.target}
					className='px-2'
					style={{ fontSize: '5vmin' }}
				>
					{account.reactIcon ? account.reactIcon : account.label}
				</Nav.Link>
			</Nav.Item>
		);
	});

	return (
		<Nav id='MainNav' as='ul'>
			{navlinks}
		</Nav>
	);
};

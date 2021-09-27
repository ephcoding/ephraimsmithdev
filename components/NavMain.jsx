import Nav from 'react-bootstrap/Nav';

export const NavMain = () => {
	return (
		<Nav id='NavMain' as='ul'>
			<Nav.Item as='li' style={{ margin: '0 1.5vmin' }}>
				<Nav.Link href='/blog' className='site-nav-btn'>
					blog
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

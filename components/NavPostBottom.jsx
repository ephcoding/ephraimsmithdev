import Nav from 'react-bootstrap/Nav';

export const NavBlogPost = () => {
	{
		/* <NavBtn route='/' label='home' />
					<NavBtn route='/blog' label='posts' /> */
	}
	return (
		<Nav id='NavBlogPost' as='ul' className='justify-content-center'>
			<Nav.Item as='li' key='home' style={{ margin: '0 1.5vmin' }}>
				<Nav.Link href={'/'} className='site-nav-btn'>
					home
				</Nav.Link>
			</Nav.Item>
			<Nav.Item as='li' key='posts' style={{ margin: '0 1.5vmin' }}>
				<Nav.Link href={'/blog'} className='site-nav-btn'>
					posts
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

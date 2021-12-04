import MetaContainer from "@/components/MetaContainer";
import Link from "next/link";

export default function FreeCodeCamp() {
	return (
		<MetaContainer>
			<h1>FreeCodeCamp Projects</h1>
			<ul>
				<li>
					<a href='./tribute-page/index.html'>Tribute Page</a>
				</li>
				<li>
					<Link href='/freecodecamp/survey-form'>
						<a>Survey Form</a>
					</Link>
				</li>
			</ul>
			<div>
				<Link href='/projects'>
					<a>{`<< Back`}</a>
				</Link>
			</div>
			<div>
				<Link href='/'>HOME</Link>
			</div>
			{/* <Nav id='NavBlogPost' as='ul' className='justify-content-center'>
				<Nav.Item as='li' key='home' style={{ margin: '0 1.5vmin' }}>
					<Nav.Link href={'/'} className='site-nav-btn'>
						home
					</Nav.Link>
				</Nav.Item>
				<Nav.Item as='li' key='projects' style={{ margin: '0 1.5vmin' }}>
					<Nav.Link href={'/projects'} className='site-nav-btn'>
						projects
					</Nav.Link>
				</Nav.Item>
				<Nav.Item as='li' key='posts' style={{ margin: '0 1.5vmin' }}>
					<Nav.Link href={'/blog'} className='site-nav-btn'>
						posts
					</Nav.Link>
				</Nav.Item>
			</Nav> */}
		</MetaContainer>
	);
}

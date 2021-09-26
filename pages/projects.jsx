import MetaContainer from '@/components/MetaContainer';
import Link from 'next/link';

export default function ProjectsPage() {
	return (
		<MetaContainer>
			<h1>PROJECTS</h1>
			<h2>Tornado Action</h2>
			<h2>FreeCodeCamp Certification Projects</h2>
			<Link href='https://ephcoding.github.io/freecodecamp'>Github Pages</Link>
		</MetaContainer>
	);
}

import MetaContainer from "@/components/MetaContainer";
import Link from "next/link";

export default function ProjectsPage() {
	return (
		<MetaContainer>
			<h1>PROJECTS</h1>
			<div>
				<Link href='/projects/tornado-action'>
					<a>Tornado Action</a>
				</Link>
			</div>
			<div>
				<Link href='/freecodecamp'>
					<a>FreeCodeCamp</a>
				</Link>
			</div>
			<div>
				<Link href='/'>
					<a>HOME</a>
				</Link>
			</div>
		</MetaContainer>
	);
}

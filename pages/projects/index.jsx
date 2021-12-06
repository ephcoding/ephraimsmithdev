import MetaContainer from "@/components/MetaContainer";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_META_DATA } from "../../sitedata/meta_data";

export default function ProjectsPage() {
	const { projects } = PAGE_META_DATA;

	return (
		<MetaContainer meta={projects}>
			<div className='projects-page'>
				<Header />
				<main className='projects-page__content'>
					<h1>PROJECTS</h1>
					<div>
						<Link href='/projects/tornado-action'>
							<a>Tornado Action</a>
						</Link>
					</div>
					<div>
						<Link href='/projects/freecodecamp'>
							<a>FreeCodeCamp</a>
						</Link>
					</div>
					<div>
						<Link href='/'>
							<a>HOME</a>
						</Link>
					</div>
				</main>
				<Footer />
			</div>
		</MetaContainer>
	);
}

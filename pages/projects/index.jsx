import Meta from "@/components/Meta";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_META } from "../../sitedata/meta";

export default function ProjectsPage() {
	const { projects } = PAGE_META;

	return (
		<Meta meta={projects}>
			<div className='page projects-page'>
				<Header />
				<main className='content'>
					<h1>
						Active<span className='white'> Projects</span>
					</h1>
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
		</Meta>
	);
}

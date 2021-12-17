import Meta from "@/components/Meta";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_META } from "../../sitedata/meta";

export default function ProjectsPage() {
	const { builds } = PAGE_META;

	return (
		<Meta meta={builds}>
			<div className='page builds-page'>
				<Header />
				<main className='content'>
					<h1>{builds}</h1>
					<div>
						<Link href='/builds/tornado-action'>
							<a>Tornado Action</a>
						</Link>
					</div>
					<div>
						<Link href='/builds/freecodecamp'>
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

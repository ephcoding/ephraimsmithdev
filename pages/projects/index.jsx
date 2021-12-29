import Meta from "@/components/Page";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_INFO } from "../../sitedata/page_info";

export default function ProjectsPage() {
	const { builds } = PAGE_INFO;

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

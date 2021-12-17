import Meta from "@/components/Meta";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_META } from "../../sitedata/meta";
import { FaFreeCodeCamp } from "react-icons/fa";

export default function ProjectsPage() {
	const { builds } = PAGE_META;

	return (
		<Meta meta={builds}>
			<div className='page builds-page'>
				<Header />
				<main className='content'>
					<h1>
						<span className='blue'>Active</span> Builds
					</h1>
					<div>
						<Link href='https://www.tornadoaction.com'>
							<a target='_blank'>Tornado Action</a>
						</Link>
					</div>
					<div>
						<Link href='https://www.freecodecamp.org/ephcoding'>
							<div className='project'>
								<FaFreeCodeCamp size={20} title='freeCodeCamp' />
								<a target='_blank'>FreeCodeCamp</a>
							</div>
						</Link>
					</div>
				</main>
				<Footer />
			</div>
		</Meta>
	);
}

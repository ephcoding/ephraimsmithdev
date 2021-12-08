import MetaContainer from "@/components/MetaContainer";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_META_DATA } from "../../../sitedata/pages";

const TornadoAction = () => {
	const { tornado_action } = PAGE_META_DATA;

	return (
		<MetaContainer meta={tornado_action}>
			<div className='page tornado-action-page'>
				<Header />
				<div className='content'>
					<h1>
						<span className='white'>Tornado Action</span>
					</h1>
					<div>
						<Link href='/projects'>
							<a>{`<< Back`}</a>
						</Link>
					</div>
					<div>
						<Link href='/'>
							<a>HOME</a>
						</Link>
					</div>
				</div>
				<Footer />
			</div>
		</MetaContainer>
	);
};

export default TornadoAction;

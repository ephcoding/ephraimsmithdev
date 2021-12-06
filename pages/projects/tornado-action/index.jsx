import MetaContainer from "@/components/MetaContainer";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TornadoActionProject = meta => {
	return (
		<MetaContainer meta={meta}>
			<div className='page tornado-action-page'>
				<Header />
				<div className='content'>
					<h1>Tornado Action</h1>
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

export default TornadoActionProject;

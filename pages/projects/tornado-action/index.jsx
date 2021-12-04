import MetaContainer from "@/components/MetaContainer";
import Link from "next/link";

const TornadoActionProject = () => {
	return (
		<MetaContainer>
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
		</MetaContainer>
	);
};

export default TornadoActionProject;

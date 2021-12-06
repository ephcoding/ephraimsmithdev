import Link from "next/link";
import { FaGithub, FaTv } from "react-icons/fa";

const FccProjectLink = ({ projectMeta }) => {
	const { repoLink, isLive, liveLink } = projectMeta;

	let liveLinkEl = isLive ? (
		<span>
			<Link href={liveLink}>
				<a target='_blank' className='project-link live'>
					<FaTv />
					<span>live</span>
				</a>
			</Link>
		</span>
	) : null;

	return (
		<p className='fcc-project__links'>
			<span>
				<Link href={repoLink}>
					<a
						target='_blank'
						className={`project-link ${isLive ? "github" : "github--full"}`}
					>
						<FaGithub />
						<span>code</span>
					</a>
				</Link>
			</span>
			{liveLinkEl}
		</p>
	);
};

export default FccProjectLink;

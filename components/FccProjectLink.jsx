import Link from "next/link";

const FccProjectLink = ({ projectMeta }) => {
	const { repoLink, isLive, liveLink } = projectMeta;

	let liveLinkEl = isLive ? (
		<span>
			&nbsp;|&nbsp;
			<Link href={liveLink}>
				<a target='_blank'>Live</a>
			</Link>
		</span>
	) : null;

	return (
		<p>
			<span>
				<Link href={repoLink}>
					<a target='_blank'>GitHub</a>
				</Link>
			</span>
			{liveLinkEl}
		</p>
	);
};

export default FccProjectLink;

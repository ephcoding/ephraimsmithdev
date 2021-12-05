import Link from "next/link";

const FccProjectLink = ({ projectMeta }) => {
	const { title, repoLink, isLive, liveLink } = projectMeta;

	let liveLinkEl = isLive ? (
		<span>
			&nbsp;|&nbsp;
			<Link href={liveLink}>
				<a target='_blank'>Live</a>
			</Link>
		</span>
	) : null;

	return (
		<li>
			<h2>{title}</h2>
			<Link href={repoLink}>
				<a target='_blank'>GitHub</a>
			</Link>
			{liveLinkEl}
		</li>
	);
};

export default FccProjectLink;

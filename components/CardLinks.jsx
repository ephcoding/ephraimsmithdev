import { useEffect } from "react";
import { FaGithub, FaMobileAlt, FaTv } from "react-icons/fa";
import Link from "next/link";

const CardLinks = ({ links }) => {
	const { appStore, repo, site } = links;

	return (
		<div className='project-links'>
			{appStore ? (
				<Link href={appStore}>
					<a target='_blank' className='project-link'>
						<FaMobileAlt size={20} title='AppStore' />
						<span>app store</span>
					</a>
				</Link>
			) : null}
			{repo ? (
				<Link href={repo}>
					<a target='_blank' className='project-link'>
						<FaGithub size={20} title='GitHub' />
						<span>repo</span>
					</a>
				</Link>
			) : null}
			{site ? (
				<Link href={site}>
					<a target='_blank' className='project-link'>
						<FaTv size={20} title='Website' />
						<span>live</span>
					</a>
				</Link>
			) : null}
		</div>
	);
};

export default CardLinks;

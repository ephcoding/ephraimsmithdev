import { FaGithub, FaMobileAlt, FaTv } from "react-icons/fa";
import Link from "next/link";

const CardLinks = ({ links }) => {
	const { appStore, repo, site } = links;

	return (
		<div className='card__links'>
			{appStore ? (
				<Link href={appStore}>
					<a target='_blank' className='card__link'>
						<FaMobileAlt size={20} title='AppStore' />
						<span>app store</span>
					</a>
				</Link>
			) : null}
			{repo ? (
				<Link href={repo}>
					<a target='_blank' className='card__link'>
						<FaGithub size={20} title='GitHub' />
						<span>code</span>
					</a>
				</Link>
			) : null}
			{site ? (
				<Link href={site}>
					<a target='_blank' className='project-link'>
						<FaTv size={20} title='Website' />
						<span>website</span>
					</a>
				</Link>
			) : null}
		</div>
	);
};

export default CardLinks;

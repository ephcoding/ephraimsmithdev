import Link from "next/link";

export const ProjectCard = ({ project_info }) => {
	const { name, img_src, description, hrefs } = project_info;

	return (
		<Card>
			<CardImage img_src={img_src} name={name} />
			<div className='card-body'>
				<h2 className='card-title'>{name}</h2>
				<p>{description}</p>
				<CardActionBtns hrefs={hrefs} />
			</div>
		</Card>
	);
};

const Card = ({ children }) => {
	return (
		<div className='card card-compact card-bordered bg-base-100 shadow-xl my-4'>
			{children}
		</div>
	);
};

const CardImage = ({ img_src, name }) => {
	return (
		<figure>
			<img src={img_src} alt={`${name} preview image`} />
		</figure>
	);
};

const CardActionBtns = ({ hrefs: { code, live_project } }) => {
	return (
		<div className='card-actions justify-end'>
			<Link href={code}>
				<a target='_blank'>
					<button className='btn-sm btn-primary'>code</button>
				</a>
			</Link>
			<Link href={live_project}>
				<a target='_blank'>
					<button className='btn-sm btn-primary'>see it live</button>
				</a>
			</Link>
		</div>
	);
};

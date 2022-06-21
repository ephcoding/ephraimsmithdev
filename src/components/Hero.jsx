import Link from "next/link";
import { SITE_NAV } from "site-data";

export const Hero = () => {
	return (
		<div id='hero' className='hero min-h-screen bg-base-200'>
			<div className='hero-content text-center'>
				<div className='max-w-md'>
					<h1 className='text-5xl font-bold'>BUILD</h1>
					<p className='py-6'>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<div className='btn-group'>
						{SITE_NAV.map(({ name, href }) => (
							<Link key={name} href={href}>
								<a className='text-2xs'>
									<button className='btn'>{name}</button>
								</a>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

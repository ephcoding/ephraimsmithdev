import MetaContainer from '@/components/MetaContainer';
import { META_CONTAINER_DATA } from '../sitedata/meta-container-data';
import { NavMenuMain } from '@/components/NavMenuMain';
import { NavMenuSocial } from '@/components/NavMenuSocial';
import Footer from '@/components/Footer';

export default function HomePage() {
	const {
		home: { title, keywords, description },
	} = META_CONTAINER_DATA;

	return (
		<MetaContainer title={title} keywords={keywords} description={description}>
			<div className='d-flex flex-column justify-content-center align-items-center text-center flex-fill'>
				<img
					src={'/ephcoding-icon-1000x1000.png'}
					alt='ephcoding logo'
					className='d-inline-block mx-auto'
					style={{ height: '45vmax', maxHeight: '600px', width: 'auto' }}
				/>
			</div>
			<NavMenuMain />
			<NavMenuSocial />
			<Footer />
		</MetaContainer>
	);
}

import MetaContainer from '@/components/MetaContainer';
import { NavMain } from '@/components/NavMain';
import { NavSocial } from '@/components/NavSocial';
import Footer from '@/components/Footer';
import { PAGE_META } from '../sitedata/page-meta-data';

export default function HomePage() {
	const {
		home: { title, keywords, description },
	} = PAGE_META;

	return (
		<MetaContainer title={title} keywords={keywords} description={description}>
			<div className='d-flex flex-column justify-content-center align-items-center text-center flex-fill'>
				<img
					src={'/ephcoding-icon-1000x1000.png'}
					alt='ephcoding logo'
					className='d-inline-block mx-auto'
					style={{ height: '45vmax', maxHeight: '600px', width: 'auto' }}
				/>
				<NavMain />
				<NavSocial />
			</div>
			<Footer />
		</MetaContainer>
	);
}

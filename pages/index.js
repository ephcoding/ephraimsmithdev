import Link from 'next/link';
import Image from 'next/image';
import MetaContainer from '@/components/MetaContainer';
import Footer from '@/components/Footer';
import { accounts } from '../sitedata/accounts';
import { NavMenu } from '../components/NavMenu';

export default function HomePage() {
	return (
		<MetaContainer
			title='ephcoding.com'
			keywords='software, react, react native, software development, software blog, coding, code, programming'
			description='ephcoding.com is home to Ephraim Smith and his documented adventures in software'
		>
			<div className='d-flex flex-column justify-content-center align-items-center text-center flex-fill'>
				<img
					src={'/ephcoding-icon-1000x1000.png'}
					alt='ephcoding logo'
					className='d-inline-block mx-auto'
					style={{ height: '45vmax', maxHeight: '600px', width: 'auto' }}
				/>
				<NavMenu />
			</div>
			<Footer />
		</MetaContainer>
	);
}

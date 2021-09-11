import Link from 'next/link';
import Image from 'next/image';
import MetaContainer from '@/components/MetaContainer';
import Footer from '@/components/Footer';
import { accounts } from '../sitedata/accounts';
import { NavMenu } from '../components/NavMenu';

export default function HomePage({ posts }) {
	return (
		<MetaContainer title='ephcoding.com' keywords='' description=''>
			{/* <div className='container-fluid d-flex flex-column bg-dark vh-100'> */}
			{/* <div> */}
			<div className='d-flex flex-column justify-content-center align-items-center text-center flex-fill'>
				<img
					src={'/ephcoding-icon-1000x1000.png'}
					alt='ephcoding logo'
					className='d-inline-block mx-auto'
					style={{ height: '45vmax', maxWidth: '600px' }}
				/>
				<NavMenu />

				{/* TODO: add Postman & CodePen */}
			</div>

			{/* <div> */}
			<Footer />
			{/* </div> */}
			{/* </div> */}
		</MetaContainer>
	);
}

import Link from 'next/link';
import Image from 'next/image';
import MetaContainer from '@/components/MetaContainer';
import Footer from '@/components/Footer';
import { accounts } from '../sitedata/accounts';
import { NavMenu } from '../components/NavMenu';

export default function HomePage({ posts }) {
	return (
		<MetaContainer title='ephcoding.com' keywords='' description=''>
			<div className='container-fluid d-flex flex-column vh-100'>
				<div className='flex-fill d-flex flex-column justify-content-center align-items-center'>
					<img
						src={'/ephcoding-icon-1000x1000.png'}
						alt='ephcoding logo'
						className='d-block mx-auto'
						style={{ width: '75%' }}
					/>

					{/* <div className='d-flex' style={{ margin: '0 0 162px 0' }}>
						<div className=''>
							<Link href='/blog'>
								<a className=''>blog</a>
							</Link>
						</div>
						<div className=''>
							<Link href={accounts.github.url}>
								<a className=''>{accounts.github.label}</a>
							</Link>
						</div>
						<div className='https://www.linkedin.com/in/ephraimjsmith'>
							<Link href='/blog'>
								<a className=''>linkedin</a>
							</Link>
						</div>
						<div className='https://www.twitter.com/ephcoding'>
							<Link href='/blog'>
								<a className=''>twitter</a>
							</Link>
						</div>
					</div> */}
					{/* TODO: add Postman & CodePen */}
					<NavMenu />
				</div>

				<div>
					<Footer />
				</div>
			</div>
		</MetaContainer>
	);
}

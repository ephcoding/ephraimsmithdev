import { getCurrentYear } from '../utils/index';

export default function Footer() {
	return (
		<footer className='footer'>
			<h2>About</h2>
			<div className='footer__content'>
				<img
					className='footer__pic'
					src='/images/profile-pic.jpg'
					alt='Ephraim Smith profile pic'
				/>

				<div className='footer__text'>
					<p className='footer__about'>
						dummie text. dummie text. dummie text. dummie text. dummie text.
						dummie text. dummie text. dummie text. dummie text.
					</p>
					<p className='footer__copy'>
						<span className='copyright__symbol'> &copy; </span>
						{getCurrentYear()} Ephraim Smith
					</p>
				</div>
			</div>
		</footer>
	);
}

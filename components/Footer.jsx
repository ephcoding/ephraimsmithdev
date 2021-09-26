import { getCurrentYear } from '../utils/index';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='text-white text-center' style={{ fontSize: '.7rem' }}>
			<p>&copy; {getCurrentYear()} Ephraim Smith | ephcoding.com</p>
		</footer>
	);
}

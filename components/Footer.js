import { getCurrentYear } from '../utils/index';

export default function Footer() {
	return (
		<footer className='footer'>
			<p>&copy; {getCurrentYear()} Ephraim Smith</p>
		</footer>
	);
}

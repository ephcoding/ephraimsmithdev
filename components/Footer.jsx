import { getCurrentYear } from "../utils/index";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className='footer'>
			<p>&copy; {getCurrentYear()} | ephcoding.com</p>
		</footer>
	);
}

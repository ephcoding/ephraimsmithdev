import { getCurrentYear } from "../utils/date";
import Link from "next/link";
import SocialNav from "@/components/SocialNav";

export default function Footer() {
	return (
		<footer className='footer'>
			<span>contact: ephraim@ephcoding.com</span>
			<SocialNav />
		</footer>
	);
}

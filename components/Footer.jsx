import { getCurrentYear } from "../utils/index";
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

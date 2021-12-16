import Image from "next/image";
import Link from "next/link";
import logo from "../public/icon_white.png";

const ECLogo = () => {
	return (
		<Link href='/' passHref>
			<a>
				<Image
					src={logo}
					alt='ephcoding.com logo'
					className='header-branding__logo'
					height={50}
					width={50}
				/>
			</a>
		</Link>
	);
};

export default ECLogo;

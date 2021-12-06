import Image from "next/image";
import Link from "next/link";
import ecLogo from "../public/icon_orange.png";

const ECLogo = () => {
	return (
		<Link href='/' passHref>
			<a>
				<Image
					src={ecLogo}
					alt='ephcoding logo'
					className='ec-logo'
					height={50}
					width={50}
				/>
			</a>
		</Link>
	);
};

export default ECLogo;

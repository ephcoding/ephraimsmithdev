import Image from "next/image";
import Link from "next/link";
import ecLogo from "../public/ephcoding-icon-1000x1000.png";

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

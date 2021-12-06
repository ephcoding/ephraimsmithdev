import Image from "next/image";
import Link from "next/link";

const PageBrandingLogo = logo => {
	return (
		<Link href='/' passHref>
			<a>
				<Image
					src={logo}
					alt='page logo'
					className='page-branding-logo'
					height={50}
					width={50}
				/>
			</a>
		</Link>
	);
};

export default PageBrandingLogo;

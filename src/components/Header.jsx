import Link from "next/link";
import Image from "next/image";

export const Header = () => {
	return (
		<header className='w-full'>
			<div className='container mx-auto flex flex-col flex-wrap items-center pt-4 mb-4 md:flex-row md:justify-between'>
				<HeaderBranding />
				{/* <HeaderNav /> */}
			</div>
		</header>
	);
};

const HeaderBranding = () => {
	return (
		<Link href='/'>
			<a className='flex md:w-1/5 title-font font-medium items-center md:justify-start md:mb-0'>
				<HeaderBrandingIcon />

				<span className='ml-3 text-xl'>
					EPHRAIM<span className='text-blue-500'>SMITH</span>.DEV
				</span>
			</a>
		</Link>
	);
};
const HeaderBrandingIcon = () => {
	return (
		<Image
			src='/images/site/eph-icon-1000.png'
			width={30}
			height={30}
			alt='ephraimsmith.dev icon'
		/>
	);
};
const HeaderNav = () => {
	const navItems = [
		{
			name: "about",
			href: "/about",
		},
	];

	return (
		<nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
			{navItems.map((item) => (
				<HeaderNavItem key={item.name} navItem={item} />
			))}
		</nav>
	);
};
const HeaderNavItem = ({ navItem: { name, href } }) => {
	return (
		<Link href={href}>
			<a className='mx-5 cursor-pointer  hover:text-indigo-300'>{name}</a>
		</Link>
	);
};

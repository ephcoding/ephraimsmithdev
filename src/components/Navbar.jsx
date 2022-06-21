import Link from "next/link";
import Image from "next/image";
import { SITE_NAV } from "site-data";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
	return (
		<Header>
			<div className='navbar-start'>
				<Branding title='Ephraim Smith' />
			</div>
			<div class='navbar-end'>
				<MobileNav />
				<HorizontalNav />
			</div>
		</Header>
	);
};

const Header = ({ children }) => {
	return <header className='navbar bg-base-100'>{children}</header>;
};

const Branding = ({ img = null, title }) => {
	return (
		<div className='flex'>
			<Link href='/'>
				<a class='btn btn-ghost normal-case text-xl'>{title}</a>
			</Link>
		</div>
	);
};

const MobileNav = () => {
	return (
		<div class='dropdown dropdown-end'>
			<label tabindex='0' class='btn btn-ghost md:hidden'>
				<FaBars size={30} />
			</label>
			<ul
				tabindex='0'
				class='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
			>
				<NavItems />
			</ul>
		</div>
	);
};

const HorizontalNav = () => {
	return (
		<div class='hidden md:flex'>
			<ul class='menu menu-horizontal p-0'>
				<NavItems />
			</ul>
		</div>
	);
};

const NavItems = () => {
	return (
		<>
			{SITE_NAV.map(({ name, href }) => (
				<li key={href} className='link link-secondary'>
					<Link href={href}>
						<a>{name}</a>
					</Link>
				</li>
			))}
		</>
	);
};

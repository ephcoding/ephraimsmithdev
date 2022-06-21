import Link from "next/link";
import Image from "next/image";
import { SITE_NAV } from "site-data";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
	return (
		<header className='navbar'>
			<div class='navbar bg-base-100'>
				<div class='navbar-start'>
					<Branding title='Ephraim Smith' />
				</div>
				<div class='navbar-end'>
					<div class='dropdown dropdown-end'>
						<label tabindex='0' class='btn btn-ghost md:hidden'>
							<FaBars size={30} />
						</label>
						<ul
							tabindex='0'
							class='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
						>
							{SITE_NAV.map(({ name, href }) => (
								<li key={href}>
									<Link href={href}>
										<a>{name}</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div class='hidden md:flex'>
						<ul class='menu menu-horizontal p-0'>
							<li>
								<a>Item 1</a>
							</li>
							<li tabindex='0'>
								<a>
									Parent
									<svg
										class='fill-current'
										xmlns='http://www.w3.org/2000/svg'
										width='20'
										height='20'
										viewBox='0 0 24 24'
									>
										<path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
									</svg>
								</a>
								<ul class='p-2'>
									<li>
										<a>Submenu 1</a>
									</li>
									<li>
										<a>Submenu 2</a>
									</li>
								</ul>
							</li>
							<li>
								<a>Item 3</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
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

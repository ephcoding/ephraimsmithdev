/* This example requires Tailwind CSS v2.0+ */
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navItems = [
	{ name: "Home", href: "/", target: "_self" },
	{ name: "GitHub", href: "https://github.com/ephbuilding", target: "_blank" },
	{
		name: "Twitter",
		href: "https://twitter.com/ephbuilding",
		target: "_blank",
	},
	{
		name: "LinkedIn",
		href: "https://linkedin.com/in/ephbuilding",
		target: "_blank",
	},
];

export function MainNav() {
	return (
		<Disclosure as='nav'>
			{({ open }) => (
				<>
					<MainNavMobileMenuBtn open={open} />
					<MainNavItems navItems={navItems} />
					<MainNavMobileMenuItems navItems={navItems} />
				</>
			)}
		</Disclosure>
	);
}

const MainNavItems = ({ navItems }) => {
	return (
		<div className='flex-1 flex items-center justify-center sm:justify-end'>
			<div className='hidden sm:block sm:ml-6'>
				<div className='flex space-x-4'>
					{navItems.map((item) => (
						<Link key={item.name} href={item.href} passHref>
							<a className='text-gray-300 hover:scale-105' target={item.target}>
								{item.name}
							</a>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

const MainNavMobileMenuBtn = ({ open }) => {
	return (
		<div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
			<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-white'>
				<span className='sr-only'>Open main menu</span>
				{open ? (
					<XIcon className='block h-6 w-6 text-red-500' aria-hidden='true' />
				) : (
					<MenuIcon className='block h-6 w-6' aria-hidden='true' />
				)}
			</Disclosure.Button>
		</div>
	);
};

const MainNavMobileMenuItems = ({ navItems }) => {
	return (
		<Disclosure.Panel className='absolute inset-y-14 w-full right-0 sm:hidden z-50'>
			<div className='px-2 pt-2 pb-3 space-y-1 bg-stone-700 rounded-md border-2 border-white'>
				{navItems.map((item) => (
					<Link key={item.name} href={item.href} passHref>
						<Disclosure.Button
							as='a'
							className='block text-white px-3 py-2 text-base text-right hover:bg-stone-800'
						>
							{item.name}
						</Disclosure.Button>
					</Link>
				))}
			</div>
		</Disclosure.Panel>
	);
};

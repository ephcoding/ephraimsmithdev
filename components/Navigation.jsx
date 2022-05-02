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

export function Navigation() {
	return (
		<Disclosure as='nav'>
			{({ open }) => (
				<>
					<MobileNavMenuBtn open={open} />
					<HorizontalNavItems navItems={navItems} />
					<MobileNavDropDownItems navItems={navItems} />
				</>
			)}
		</Disclosure>
	);
}

const HorizontalNavItems = ({ navItems }) => {
	return (
		<div className='flex-1 flex items-center justify-center sm:justify-end'>
			<div className='hidden sm:block sm:ml-6'>
				<div className='flex space-x-4'>
					{navItems.map((item) => (
						<Link key={item.name} href={item.href} passHref>
							<a className='text-gray-300' target={item.target}>
								{item.name}
							</a>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

const MobileNavMenuBtn = ({ open }) => {
	return (
		<div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
			<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-white'>
				<span className='sr-only'>Open main menu</span>
				{open ? (
					<XIcon className='block h-6 w-6' aria-hidden='true' />
				) : (
					<MenuIcon className='block h-6 w-6' aria-hidden='true' />
				)}
			</Disclosure.Button>
		</div>
	);
};

const MobileNavDropDownItems = ({ navItems }) => {
	return (
		<Disclosure.Panel className='absolute inset-y-12 right-0 sm:hidden'>
			<div className='px-2 pt-2 pb-3 space-y-1'>
				{navItems.map((item) => (
					<Disclosure.Button
						key={item.name}
						as='a'
						href={item.href}
						className='block text-white px-3 py-2 text-base text-right'
					>
						{item.name}
					</Disclosure.Button>
				))}
			</div>
		</Disclosure.Panel>
	);
};

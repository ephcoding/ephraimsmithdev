import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MAIN_NAV_ITEMS } from "site_data";
import { MdMenu, MdClose } from "react-icons/md";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export const Header = () => {
	return (
		<Disclosure as='nav' className='relative'>
			{({ open }) => (
				<>
					<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
						<div className='relative flex items-center justify-between h-16'>
							<MobileNavBtn open={open} />
							<Branding />
							<MainNavItems nav_items={MAIN_NAV_ITEMS} />
						</div>
					</div>
					<MobileNavItems nav_items={MAIN_NAV_ITEMS} />
				</>
			)}
		</Disclosure>
	);
};

const Branding = () => {
	return (
		<div className='flex items-center'>
			<Image src='/images/eph-icon-1000.png' height={35} width={35} />
			<span className='ml-2'>Ephraim Smith</span>
		</div>
	);
};
const MainNavItems = ({ nav_items }) => {
	return (
		<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-end'>
			<div className='hidden sm:block sm:ml-6'>
				<div className='flex space-x-4'>
					{MAIN_NAV_ITEMS.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className='hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
						>
							{item.name}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};
const MobileNavBtn = ({ open }) => {
	return (
		<div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
			<Disclosure.Button className='z-10 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
				<span className='sr-only'>Open main menu</span>
				{open ? (
					<MdClose size={20} color='white' aria-hidden='true' />
				) : (
					<MdMenu size={20} color='white' aria-hidden='true' />
				)}
			</Disclosure.Button>
		</div>
	);
};
const MobileNavItems = ({ nav_items }) => {
	return (
		<Disclosure.Panel className='absolute top-0 h-screen w-screen sm:hidden bg-stone-900/70'>
			<div className='flex flex-col justify-center items-center h-full px-2 pt-2 pb-3 space-y-1'>
				{MAIN_NAV_ITEMS.map((item) => (
					<Disclosure.Button
						key={item.name}
						as='a'
						href={item.href}
						className='text-blue-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md'
					>
						{item.name}
					</Disclosure.Button>
				))}
			</div>
		</Disclosure.Panel>
	);
};

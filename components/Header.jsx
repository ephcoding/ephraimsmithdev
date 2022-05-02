import { Fragment } from "react";
import Link from "next/link";
import { SITE_NAV } from "../site-data";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const NavItem = ({ navItem }) => {
	const { url, label } = navItem;

	return (
		<li>
			<Link href={url}>
				<a>{label}</a>
			</Link>
		</li>
	);
};

const NavList = ({ nav }) => {
	return (
		<nav>
			<ul className='flex'>
				{nav.map((navItem) => (
					<NavItem key={navItem.url} navItem={navItem} />
				))}
			</ul>
		</nav>
	);
};

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export const Header = () => {
	return (
		<Disclosure>
			{({ open }) => (
				<>
					{/* ///// CONTAINER ///// */}
					<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
						{/* ///// NAVBAR WRAPPER ///// */}
						<div className='relative flex items-center justify-between h-16'>
							{/* ///// NAVBAR ///// */}
							<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-between'>
								{/* ///// NAV BRANDING ///// */}
								<div className='flex items-center'>EPHRAIM SMITH</div>
								{/* ///// NAV ITEMS ///// */}
								<div className='hidden sm:inline-block sm:ml-6'>
									<div className='flex space-x-4'>
										{SITE_NAV.map((item) => (
											<Link href={item.href} key={item.label}>
												<a
													className={classNames(
														item.current
															? "bg-gray-900 text-white"
															: "text-gray-300 hover:bg-gray-700 hover:text-white",
														"px-3 py-2 rounded-md text-sm font-medium"
													)}
													aria-current={item.current ? "page" : undefined}
												>
													{item.label}
												</a>
											</Link>
										))}
									</div>
								</div>
							</div>

							{/* ///// MOBILE MENU BTN /////
							hidden at 'sm' breakpoint (640px) */}
							<div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
								<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<MenuIcon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
						</div>
					</div>

					{/* ///// MOBILE MENU NAV ITEMS ///// */}
					<Disclosure.Panel className='sm:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1 text-right'>
							{SITE_NAV.map((item) => (
								<Disclosure.Button
									key={item.label}
									as='a'
									href={item.href}
									className={classNames(
										item.current
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block px-3 py-2 rounded-md text-base font-medium"
									)}
									aria-current={item.current ? "page" : undefined}
								>
									{item.label}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

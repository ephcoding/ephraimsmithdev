import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PAGE_META } from "site_data";
import { PageWrapper } from "components";
import { Section } from "components/Section";
import { SECTION_DATA } from "site_data";

export default function Home() {
	const { home_page_meta } = PAGE_META;

	return (
		<PageWrapper page_meta={home_page_meta}>
			<div className='min-h-screen justify-center'>
				<section
					id='intro'
					className='min-h-[50vh] w-full flex flex-col items-center justify-center'
				>
					<div className='text-center'>
						<h1 className='sr-only'>Ephraim Smith</h1>
						<p className='uppercase text-8xl font-extrabold'>build</p>
						<p className='text-sm'>
							to create. to contribute. to learn. to earn.
						</p>
					</div>
				</section>
				{Object.entries(SECTION_DATA).map(([key, content]) => (
					<Section key={key} id={key} section_data={content} />
				))}
			</div>
		</PageWrapper>
	);
}

const Button = ({ children, href, isSolid }) => {
	return (
		<Link href={href}>
			<a
				target='_self'
				className={`${
					isSolid ? "bg-blue-500" : "bg-transparent"
				} block w-fit border-2 border-blue-500  bg-blue-500 px-4 py-2`}
			>
				{children}
			</a>
		</Link>
	);
};

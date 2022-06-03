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
					className='h-3/4 border-red-500 border-2 w-full flex flex-col items-center justify-center'
				>
					<div className='relative rounded-full h-[50vw] w-[50vw] overflow-hidden mx-auto mb-10 bg-stone-50 shadow shadow-blue-500 border-2 border-blue-600'>
						<Image
							alt='profile image of Ephraim Smith'
							src='/images/headshot.png'
							layout='fill'
						/>
					</div>
					<div className='text-center'>
						<h1 className='uppercase text-2xl font-bold'>Ephraim Smith</h1>
						<p className='text-sm'>Software Developer</p>
					</div>
				</section>
				{SECTION_DATA.map((section) => (
					<Section key={section.heading} section_data={section} />
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

{
	/* <section id='about-section'>
				<p className='text-lg'>
					Hey, I'm <span className='font-bold'>Ephraim Smith</span>
				</p>
				<p className='text-sm'>
					I'm a serial builder turned software developer. My passion for
					creating is fueld by my addiction to bringing ideas to life, and I
					leave nothing on the field when building my projects. Learning as much
					as possible is always priority #1. A hard lesson today is a tool
					tomorrow.
				</p>
				<Button isSolid={true} href='#project-section'>
					Projects
				</Button>
				<Button isSolid={false} href='#contact-section'>
					Contact Me
				</Button>
			</section>
			<section id='project-section'>
				<h2 className='text-2xl font-bold'>Projects</h2>
				<Link href='/projects/tornado-action'>
					<a target='_self'>
						<h2>Tornado Action</h2>
					</a>
				</Link>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
					rerum illum numquam! Natus perspiciatis officiis aperiam, quae eos
					cupiditate sunt accusantium magnam dolores ad quaerat non sint
					adipisci quas possimus!
				</p>
			</section>
			<section id='contact-section'>
				<h2 className='text-2xl font-bold'>Hit me up</h2>
			</section> */
}

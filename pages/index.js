import Image from "next/image";
import Link from "next/link";
import { PAGE_META } from "site_data";
import { PageWrapper } from "components";

export default function Home() {
	const { home_page_meta } = PAGE_META;

	return (
		<PageWrapper page_meta={home_page_meta}>
			<div className='h-screen justify-center'>
				<section id='intro' className='h-3/4 border-red-500 border-2 w-full'>
					<div className='relative rounded-full h-[50vw] w-[50vw] overflow-hidden mx-auto mb-10 bg-stone-50 shadow shadow-blue-500 border-2 border-blue-600'>
						<Image
							alt='profile image of Ephraim Smith'
							src='/images/headshot.png'
							layout='fill'
						/>
					</div>
					<div className='text-center'>
						<h1>Ephraim Smith</h1>
						<p>Software Developer</p>
					</div>
				</section>
				<section id='tech-interests'>
					<h2>What I'm into:</h2>
					<ul>
						<li className=''>Expo</li>
						<li className=''>React Native</li>
						<li className=''>React</li>
						<li className=''>Next.js</li>
					</ul>
				</section>
				<section id='projects'>
					<h2>What I'm working on:</h2>
					<ul>
						<li className=''>tornadoaction.com</li>
						<li className=''>Coming Soon: mobiledevgarage.com</li>
						<li className=''>
							Coming Soon:{" "}
							<ul>
								<li>Relative Income mobile app</li>
							</ul>
						</li>

						<li className=''>Next.js</li>
					</ul>
				</section>
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

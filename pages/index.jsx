import { PAGE_META } from "../constants";
import PROJECTS from "../constants/projects";
import { Page, ProjectList } from "../components";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function HomePage() {
	const { home } = PAGE_META;

	return (
		<Page pageInfo={home}>
			<section>
				<div class='container px-6 py-8 mx-auto'>
					<div class='items-center lg:flex'>
						<div class='lg:w-1/2'>
							<h2 class='text-3xl font-bold text-gray-800 dark:text-gray-100'>
								learn. build. document.
							</h2>

							<p class='mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md'>
								Hi I am jane , software engineer , Lorem ipsum, dolor sit amet
								consectetur adipisicing elit. Illum in sed non alias, fugiat,
								commodi nemo ut fugit corrupti dolorem sequi ex veniam
								consequuntur id, maiores beatae ipsa omnis aliquam?
							</p>

							<div class='flex items-center mt-6 -mx-2'>
								<Link href='https://github.com/ephbuilding' passHref>
									<a target='_blank'>
										<FaGithub />
									</a>
								</Link>
								<Link href='https://twitter.com/ephbuilding' passHref>
									<a target='_blank'>
										<FaTwitter />
									</a>
								</Link>
								<Link href='https://linkedin.com/in/ephbuilding' passHref>
									<a target='_blank'>
										<FaLinkedinIn />
									</a>
								</Link>
								<Link href='https://instagram.com/ephbuilding' passHref>
									<a target='_blank'>
										<FaInstagram />
									</a>
								</Link>
							</div>
						</div>

						<div class='mt-8 lg:mt-0 lg:w-1/2'>
							<div class='flex items-center justify-center lg:justify-end'>
								<div class='max-w-lg'>
									<img
										class='object-cover object-center w-full h-64 rounded-md shadow'
										src='https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
										alt=''
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <ProjectList projects={PROJECTS} /> */}
		</Page>
	);
}

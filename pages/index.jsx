import { PAGE_META } from "../constants";
import PROJECTS from "../constants/projects";
import { Page, ProjectList } from "../components";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function HomePage() {
	const { home } = PAGE_META;

	return (
		<Page pageInfo={home}>
			<h2 className='text-3xl font-bold text-gray-800 dark:text-gray-100'>
				learn. build. document.
			</h2>
			<section>
				<div className='container px-6 py-8 mx-auto'>
					<div className='items-center lg:flex'>
						<div className='lg:w-1/2'>
							<p className='mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md'>
								Hi I am jane , software engineer , Lorem ipsum, dolor sit amet
								consectetur adipisicing elit. Illum in sed non alias, fugiat,
								commodi nemo ut fugit corrupti dolorem sequi ex veniam
								consequuntur id, maiores beatae ipsa omnis aliquam?
							</p>

							<div className='flex items-center mt-6 -mx-2'>
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

						<div className='mt-8 lg:mt-0 lg:w-1/2'>
							<div className='flex items-center justify-center lg:justify-end'>
								<div className='max-w-lg'>
									<img
										className='object-cover object-center w-full h-64 rounded-md shadow'
										src='https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
										alt=''
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='relative bg-white overflow-hidden'>
					<div className='pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
						<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static'>
							<div className='sm:max-w-lg'>
								<h1 className='text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl'>
									learn.
								</h1>
								<p className='mt-4 text-xl text-gray-500'>
									This year, our new summer collection will shelter you from the
									harsh elements of a world that doesn't care if you live or
									die.
								</p>
							</div>
							<div>
								<div className='mt-10'>
									{/* Decorative image grid */}
									<div
										aria-hidden='true'
										className='pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full'
									>
										<div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
											<div className='flex items-center space-x-6 lg:space-x-8'>
												<div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
													<div className='w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
												</div>
												<div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
												</div>
												<div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
												</div>
											</div>
										</div>
									</div>

									<a
										href='#'
										className='inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700'
									>
										Shop Collection
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<br />
			<section>
				<div className='relative bg-white overflow-hidden'>
					<div className='pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
						<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static'>
							<div className='sm:max-w-lg'>
								<h1 className='text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl'>
									build.
								</h1>
								<p className='mt-4 text-xl text-gray-500'>
									This year, our new summer collection will shelter you from the
									harsh elements of a world that doesn't care if you live or
									die.
								</p>
							</div>
							<div>
								<div className='mt-10'>
									{/* Decorative image grid */}
									<div
										aria-hidden='true'
										className='pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full'
									>
										<div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
											<div className='flex items-center space-x-6 lg:space-x-8'>
												<div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
													<div className='w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
												</div>
												<div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
												</div>
												<div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
												</div>
											</div>
										</div>
									</div>

									<a
										href='#'
										className='inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700'
									>
										Shop Collection
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<br />
			<section>
				<div className='relative bg-white overflow-hidden'>
					<div className='pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
						<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static'>
							<div className='sm:max-w-lg'>
								<h1 className='text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl'>
									document.
								</h1>
								<p className='mt-4 text-xl text-gray-500'>
									This year, our new summer collection will shelter you from the
									harsh elements of a world that doesn't care if you live or
									die.
								</p>
							</div>
							<div>
								<div className='mt-10'>
									{/* Decorative image grid */}
									<div
										aria-hidden='true'
										className='pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full'
									>
										<div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
											<div className='flex items-center space-x-6 lg:space-x-8'>
												<div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
													<div className='w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
												</div>
												<div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
												</div>
												<div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
												</div>
											</div>
										</div>
									</div>

									<a
										href='#'
										className='inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700'
									>
										Shop Collection
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<br />
			<section>
				<div className='relative bg-white overflow-hidden'>
					<div className='pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
						<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static'>
							<div className='sm:max-w-lg'>
								<h1 className='text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl'>
									tools.
								</h1>
								<p className='mt-4 text-xl text-gray-500'>
									This year, our new summer collection will shelter you from the
									harsh elements of a world that doesn't care if you live or
									die.
								</p>
							</div>
							<div>
								<div className='mt-10'>
									{/* Decorative image grid */}
									<div
										aria-hidden='true'
										className='pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full'
									>
										<div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
											<div className='flex items-center space-x-6 lg:space-x-8'>
												<div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
													<div className='w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
												</div>
												<div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
												</div>
												<div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
													<div className='w-44 h-64 rounded-lg overflow-hidden'>
														<img
															src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'
															alt=''
															className='w-full h-full object-center object-cover'
														/>
													</div>
												</div>
											</div>
										</div>
									</div>

									<a
										href='#'
										className='inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700'
									>
										Shop Collection
									</a>
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

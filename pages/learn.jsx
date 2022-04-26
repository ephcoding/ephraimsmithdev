import { Page } from "../components";
import { PAGE_META } from "../constants";

// import { sortHighLow } from "@/js/util_funcs";

export default function LearnPage() {
	const { learn } = PAGE_META;

	return (
		<Page pageInfo={learn}>
			{/* <h1>learn</h1> */}
			<h1 className='text-3xl font-bold text-gray-800 dark:text-gray-100'>
				learn.
			</h1>

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
						</div>
					</div>
				</div>
			</section>
			<section class='h-screen w-screen bg-gradient-to-br from-pink-50 to-indigo-100 p-8'>
				<h1 class='text-center font-bold text-2xl text-indigo-500'>
					Responsive Grid Layout{" "}
				</h1>

				<div class='grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10'>
					<div class='bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden'>
						<img
							class='h-56 lg:h-60 w-full object-cover'
							src='https://images.unsplash.com/photo-1523289217630-0dd16184af8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBlbXBvd2VybWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
							alt=''
						/>
						<div class='p-3'>
							<span class='text-sm text-primary'>November 19, 2022</span>
							<h3 class='font-semibold text-xl leading-6 text-gray-700 my-2'>
								International Women's Day 2022: Date, history, significance,
								theme this year
							</h3>
							<p class='paragraph-normal text-gray-600'>
								Happy Women's Day 2022: Read on to know all about the history
								and significance...
							</p>
							<a class='mt-3 block' href='#'>
								Read More >>
							</a>
						</div>
					</div>

					<div class='bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden'>
						<img
							class='h-56 lg:h-60 w-full object-cover'
							src='https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
							alt=''
						/>
						<div class='p-3'>
							<span class='text-sm text-primary'>November 19, 2022</span>
							<h3 class='font-semibold text-xl leading-6 text-gray-700 my-2'>
								International Women's Day 2022: Date, history, significance,
								theme this year
							</h3>
							<p class='paragraph-normal text-gray-600'>
								Happy Women's Day 2022: Read on to know all about the history
								and significance...
							</p>
							<a class='mt-3 block' href='#'>
								Read More >>
							</a>
						</div>
					</div>

					<div class='bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden'>
						<img
							class='h-56 lg:h-60 w-full object-cover'
							src='https://images.unsplash.com/photo-1637419450536-378d5457abb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
							alt=''
						/>
						<div class='p-3'>
							<span class='text-sm text-primary'>November 19, 2022</span>
							<h3 class='font-semibold text-xl leading-6 text-gray-700 my-2'>
								International Women's Day 2022: Date, history, significance,
								theme this year
							</h3>
							<p class='paragraph-normal text-gray-600'>
								Happy Women's Day 2022: Read on to know all about the history
								and significance...
							</p>
							<a class='mt-3 block' href='#'>
								Read More >>
							</a>
						</div>
					</div>

					<div class='bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden'>
						<img
							class='h-56 lg:h-60 w-full object-cover'
							src='https://images.unsplash.com/photo-1621352404112-58e2468993a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
							alt=''
						/>
						<div class='p-3'>
							<span class='text-sm text-primary'>November 19, 2022</span>
							<h3 class='font-semibold text-xl leading-6 text-gray-700 my-2'>
								International Women's Day 2022: Date, history, significance,
								theme this year
							</h3>
							<p class='paragraph-normal text-gray-600'>
								Happy Women's Day 2022: Read on to know all about the history
								and significance...
							</p>
							<a class='mt-3 block' href='#'>
								Read More >>
							</a>
						</div>
					</div>

					<div class='bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden'>
						<img
							class='h-56 lg:h-60 w-full object-cover'
							src='https://images.unsplash.com/photo-1607868894064-2b6e7ed1b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
							alt=''
						/>
						<div class='p-3'>
							<span class='text-sm text-primary'>November 19, 2022</span>
							<h3 class='font-semibold text-xl leading-6 text-gray-700 my-2'>
								International Women's Day 2022: Date, history, significance,
								theme this year
							</h3>
							<p class='paragraph-normal text-gray-600'>
								Happy Women's Day 2022: Read on to know all about the history
								and significance...
							</p>
							<a class='mt-3 block' href='#'>
								Read More >>
							</a>
						</div>
					</div>

					<div class='bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden'>
						<img
							class='h-56 lg:h-60 w-full object-cover'
							src='https://images.unsplash.com/photo-1633329712176-4751f52ccc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
							alt=''
						/>
						<div class='p-3'>
							<span class='text-sm text-primary'>November 19, 2022</span>
							<h3 class='font-semibold text-xl leading-6 text-gray-700 my-2'>
								International Women's Day 2022: Date, history, significance,
								theme this year
							</h3>
							<p class='paragraph-normal text-gray-600'>
								Happy Women's Day 2022: Read on to know all about the history
								and significance...
							</p>
							<a class='mt-3 block' href='#'>
								Read More >>
							</a>
						</div>
					</div>
				</div>
			</section>
		</Page>
	);
}

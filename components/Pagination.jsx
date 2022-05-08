import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Pagination = ({ currentPage, numPages }) => {
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage = `/blog/page/${currentPage - 1}`;
	const nextPage = `/blog/page/${currentPage + 1}`;

	if (numPages === 1) return <></>;

	return (
		<nav
			className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
			aria-label='Pagination'
		>
			<a
				href='#'
				className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
			>
				<span className='sr-only'>Previous</span>
				<FaArrowLeft className='h-5 w-5' aria-hidden='true' />
			</a>
			{/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
			<a
				href='#'
				aria-current='page'
				className='z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
			>
				1
			</a>
			<a
				href='#'
				className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
			>
				2
			</a>
			<a
				href='#'
				className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium'
			>
				3
			</a>
			<span className='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700'>
				...
			</span>
			<a
				href='#'
				className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium'
			>
				8
			</a>
			<a
				href='#'
				className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
			>
				9
			</a>
			<a
				href='#'
				className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
			>
				10
			</a>
			<a
				href='#'
				className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
			>
				<span className='sr-only'>Next</span>
				<FaArrowRight className='h-5 w-5' aria-hidden='true' />
			</a>
		</nav>
	);
};

{
	/* <div className='mt-6'>
	<ul className='flex pl-0 list-none my-2'>
		{!isFirst && (
			<Link href={prevPage}>
				<li className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer'>
					Previous
				</li>
			</Link>
		)}
		{Array.from({ length: numPages }, (_, i) => (
			<Link href={`/blog/page/${i + 1}`} key={`page-${i}`}>
				<li className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer'>
					{i + 1}
				</li>
			</Link>
		))}

		{!isLast && (
			<Link href={nextPage}>
				<li className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer'>
					Next
				</li>
			</Link>
		)}
	</ul>
</div>; */
}

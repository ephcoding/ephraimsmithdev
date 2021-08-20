import Link from 'next/link';

export default function Pagination({ currentPage, numPages }) {
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage = `/blog/page/${currentPage - 1}`;
	const nextPage = `/blog/page/${currentPage + 1}`;

	if (numPages === 1) return <></>;

	return (
		<div id='Pagination' className=''>
			<ul className=''>
				{!isFirst && (
					<Link href={prevPage}>
						<li className=''>Previous</li>
					</Link>
				)}
				{Array.from({ length: numPages }, (_, i) => (
					<Link href={`/blog/page/${i + 1}`}>
						<li className=''>{i + 1}</li>
					</Link>
				))}

				{!isLast && (
					<Link href={nextPage}>
						<li className=''>Next</li>
					</Link>
				)}
			</ul>
		</div>
	);
}

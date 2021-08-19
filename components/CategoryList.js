import Link from 'next/link';

export default function CategoryList({ categories }) {
	return (
		<div id='categorly-list' className=''>
			<h3 className=''>Blog Categories</h3>
			<ul className=''>
				{categories.map((category, index) => (
					<Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
						<li className=''>{category}</li>
					</Link>
				))}
			</ul>
		</div>
	);
}

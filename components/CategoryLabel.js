import Link from 'next/link';

export default function CategoryLabel({ children }) {
	const colorKey = {
		HTML: '',
		CSS: 'blue',
		JavaScript: 'yellow',
		TypeScript: '',
		Node: '',
		React: '',
		ReactNative: '',
		Git: '',
	};

	return (
		<div id='category-label' className={`bg-${colorKey[children]}`}>
			<Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
		</div>
	);
}

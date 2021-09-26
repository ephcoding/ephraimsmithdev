import PostPreviewCard from './PostPreviewCard';

export default function SearchResults({ results }) {
	if (results.length === 0) return <></>;

	return (
		<div id='SearchResults' className='search-results'>
			<div className='search-results__container'>
				<h2 className='search-results__h2'>{results.length} Results</h2>
				{results.map((result, index) => (
					<PostPreviewCard key={index} post={result} compact={true} />
				))}
			</div>
		</div>
	);
}

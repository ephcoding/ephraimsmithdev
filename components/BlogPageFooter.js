import Pagination from './Pagination';
import SearchInputField from './SearchInputField';

export default function BlogPageFooter() {
	return (
		<div id='BlogPostFooter' className='bp-footer'>
			<Pagination />
			<SearchInputField />
		</div>
	);
}

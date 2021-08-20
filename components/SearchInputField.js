import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import SearchResults from './SearchResults';

export default function SearchInputField() {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		const getResults = async () => {
			if (searchTerm === '') {
				setSearchResults([]);
			} else {
				const res = await fetch(`/api/search?q=${searchTerm}`);
				const { results } = await res.json();
				setSearchResults(results);
			}
		};

		getResults();
	}, [searchTerm]);

	return (
		<div id='SearchInputField' className='search'>
			<div className=''>
				<div className=''>
					<form>
						<input
							type='search'
							name='search'
							id='SearchInputField'
							className='search__input'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							placeholder='Search Posts...'
						/>

						<FaSearch className='icon icon--search' />
					</form>
				</div>
			</div>

			<SearchResults results={searchResults} />
		</div>
	);
}

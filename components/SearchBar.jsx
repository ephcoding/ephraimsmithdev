import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ setResultsCallback }) => {
	// TODO: make debounce() to prevent api-hit on every keyPress
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const getSearchResults = async () => {
			if (searchTerm === "") {
				setResultsCallback([]);
			} else {
				const res = await fetch(`/api/search?q=${searchTerm}`);
				const searchResultsJSON = await res.json();
				const { filteredBlogPosts } = JSON.parse(searchResultsJSON);

				setResultsCallback(filteredBlogPosts);
			}
		};

		getSearchResults();
	}, [searchTerm]);

	return (
		<div className='container mx-auto flex items-center justify-center'>
			<div className='relative text-gray-600 w-72 mx-auto'>
				<form>
					<input
						type='search'
						name='search'
						id='search'
						className='bg-white h-10 px-5 pr-10 rounded text-sm focus:outline-none w-72'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder='Search Posts...'
					/>

					<FaSearch className='absolute top-0 right-0 text-black mt-3 mr-4' />
				</form>
			</div>
		</div>
	);
};

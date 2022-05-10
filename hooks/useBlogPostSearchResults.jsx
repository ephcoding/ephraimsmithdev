import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export const useBlogPostSearchResults = (searchBarTerm) => {
	const [results, setSearchResults] = useState([]);

	useEffect(() => {
		const getSearchResults = async (searchTerm) => {
			if (searchTerm === "") {
				setSearchResults([]);
			} else {
				const res = await fetch(`/api/search?q=${searchTerm}`);

				const resultsFromAPI = await res.json();

				console.log(">> useSearchResults.jsx: [results] >>\n", results);

				setSearchResults(resultsFromAPI);
			}
		};

		getSearchResults(searchBarTerm);
	}, [searchBarTerm]);

	return { results };
};

import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export const useSearchInput = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		const getResults = async () => {
			if (searchTerm === "") {
				setSearchResults([]);
			} else {
				const res = await fetch(`/api/search?q=${searchTerm}`);

				const results = await res.json();

				console.log(">> SearchBar.jsx: [results] >>\n", results);

				setSearchResults(results);
			}
		};

		getResults();
	}, [searchTerm]);

	return { setSearchTerm, setSearchResults };
};

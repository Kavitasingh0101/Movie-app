// src/pages/SearchResults.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import "../App.css"; // Ensure styles are imported

const SearchResults = () => {
	const { query } = useParams();
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	useEffect(() => {
		const fetchMovies = async () => {
			const res = await axios.get(
				`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${query}&page=${page}`
			);
			setMovies(res.data.results);
			setTotalPages(res.data.total_pages);
		};

		fetchMovies();
	}, [query, page]);

	return (
		<div className="Popular_container">
			<h1 className="Popular_heading">Search Results for "{query}"</h1>
			<div className="movie-grid">
				{movies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</div>
			<Pagination page={page} setPage={setPage} totalPages={totalPages} />
		</div>
	);
};

export default SearchResults;

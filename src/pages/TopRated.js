// src/pages/TopRated.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const TopRated = () => {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const res = await axios.get(
					`https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`
				);
				setMovies(res.data.results);
				setTotalPages(res.data.total_pages);
				setError(null); // Clear any previous errors
			} catch (err) {
				setError(
					"Failed to fetch top rated movies. Please try again later."
				);
			}
		};

		fetchMovies();
	}, [page]);

	return (
		<div className="Popular_container">
			<h1 className="Popular_heading">Top Rated Movies</h1>
			{error && <p className="error">{error}</p>}
			<div className="movie-grid">
				{movies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</div>
			<Pagination page={page} setPage={setPage} totalPages={totalPages} />
		</div>
	);
};

export default TopRated;

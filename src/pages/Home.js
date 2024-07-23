import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import "../styles/Home.css";

const Home = () => {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&page=${page}`
				);
				setMovies(response.data.results);
				setTotalPages(response.data.total_pages);
			} catch (err) {
				setError("Failed to fetch movies. Please try again later.");
			}
		};

		fetchMovies();
	}, [page]);

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div className="Popular_container">
			<h1 className="Popular_heading">Popular Movies</h1>
			<div className="movie-grid">
				{movies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</div>
			<Pagination page={page} setPage={setPage} totalPages={totalPages} />
		</div>
	);
};

export default Home;

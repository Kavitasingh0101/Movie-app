import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/MovieDetail.css";

const MovieDetail = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMovie = async () => {
			try {
				const response = await axios.get(
					`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&append_to_response=credits`
				);
				setMovie(response.data);
			} catch (err) {
				setError(
					"Failed to fetch movie details. Please try again later."
				);
			}
		};

		fetchMovie();
	}, [id]);

	if (error) {
		return <div>{error}</div>;
	}

	if (!movie) {
		return <div>Loading...</div>;
	}

	return (
		<div className="movie-detail-container">
			<div className="movie-detail-header">
				<h1>{movie.title}</h1>
				<img
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title}
				/>
			</div>
			<div className="content">
				<div className="innerData">
					<h2>Overview</h2>
					<p>{movie.overview}</p>
					<p className="rating">Rating: {movie.vote_average}</p>
					<p>Release Date: {movie.release_date}</p>
				</div>
			</div>
			<h2 className="cast-header">Cast</h2>
			<div className="cast-list">
				{movie.credits &&
					movie.credits.cast.map((actor) => (
						<div key={actor.id} className="cast-member">
							<img
								src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
								alt={actor.name}
							/>
							<p className="cast-name">{actor.name}</p>
							<p className="cast-character">{actor.character}</p>
						</div>
					))}
			</div>
		</div>
	);
};

export default MovieDetail;

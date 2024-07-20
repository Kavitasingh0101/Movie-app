// src/pages/MovieDetail.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);
	const [cast, setCast] = useState([]);

	useEffect(() => {
		const fetchMovie = async () => {
			const res = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
			);
			setMovie(res.data);
		};

		const fetchCast = async () => {
			const res = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
			);
			setCast(res.data.cast);
		};

		fetchMovie();
		fetchCast();
	}, [id]);

	if (!movie) return <div>Loading...</div>;

	return (
		<div className="movie-detail-container">
			<div className="movie-detail-header">
				<div className="content">
					<div>
						<img
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							alt={movie.title}
							className="Mainimg"
						/>
					</div>
					<div className="innerData">
						<h1>{movie.title}</h1>
						<h2 className="rating">Rating: {movie.vote_average}</h2>
						<p>Release Date: {movie.release_date}</p>
						<p>Vote Count: {movie.vote_count}</p>
					</div>
				</div>
				<div className="movie-overview">
					<h2>Overview</h2>
					<p>{movie.overview}</p>
				</div>
			</div>
			<h1 className="cast-header">Cast</h1>
			<div className="cast-list">
				{cast.map((member) => (
					<div className="cast-member" key={member.cast_id}>
						<img
							src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
							alt={member.name}
						/>
						<p className="cast-name">{member.name}</p>
						<p className="cast-character">as {member.character}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default MovieDetail;

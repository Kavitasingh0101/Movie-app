import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	const handleSearch = (e) => {
		e.preventDefault();
		if (query) {
			navigate(`/search/${query}`);
		}
	};

	return (
		<nav>
			<div>
				<Link to="/">Home</Link>
				<Link to="/top-rated">Top Rated</Link>
				<Link to="/upcoming">Upcoming</Link>
			</div>
			<form onSubmit={handleSearch}>
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search for movies..."
				/>
				<button type="submit">Search</button>
			</form>
		</nav>
	);
};

export default Navbar;

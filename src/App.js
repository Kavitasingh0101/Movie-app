// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import MovieDetail from "./pages/MovieDetail";
import SearchResults from "./pages/SearchResults";
import "./App.css";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/top-rated" element={<TopRated />} />
				<Route path="/upcoming" element={<Upcoming />} />
				<Route path="/movie/:id" element={<MovieDetail />} />
				<Route path="/search/:query" element={<SearchResults />} />
			</Routes>
		</>
	);
};

export default App;

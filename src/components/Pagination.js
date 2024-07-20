// src/components/Pagination.js
import React from "react";

const Pagination = ({ page, setPage, totalPages }) => {
	return (
		<div className="pagination">
			<button onClick={() => setPage(page - 1)} disabled={page === 1}>
				Previous
			</button>
			<span>
				{page} / {totalPages}
			</span>
			<button
				onClick={() => setPage(page + 1)}
				disabled={page === totalPages}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;

import React, { useState } from "react";
import { MovieDetails } from "../data/MoviesData";
import { MovieCard } from "./MovieCard";
import "./Pagination.css";

interface PaginationProps {
  data: MovieDetails[];
  perPage: number;
  onMovieClick: (movie: MovieDetails) => void;
}

const Pagination = ({ data, perPage = 12, onMovieClick }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(data.length / perPage);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const currentData = data.slice(start, end);

  return (
    <>
      <div className="movie-grid">
        {currentData.map((movie, index) => (
          <MovieCard
            title={movie.title}
            key={index}
            imageUrl={`${movie.imageUrl}${index + 1}`}
            onClick={() => {
              onMovieClick(movie);
            }}
          />
        ))}
      </div>
      <div className="button-group">
        <button
          className="button-outlined"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="button-filled"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;

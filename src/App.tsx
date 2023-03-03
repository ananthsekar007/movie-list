import { useState } from "react";
import { NavBar } from "./components/Navbar";
import { MovieCard } from "./components/MovieCard";
import { MovieDetails, movies } from "./data/MoviesData";
import "./App.css";
import { DetailsModal } from "./components/DetailsModal";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails>();

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <NavBar />
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <MovieCard
            title={movie.title}
            key={index}
            imageUrl={`${movie.imageUrl}${index + 1}`}
            onClick={() => {
              setSelectedMovie(movie);
              setIsOpen(true);
            }}
          />
        ))}
      </div>
      <DetailsModal
        isOpen={isOpen}
        onClose={closeModal}
        movie={selectedMovie}
      />
    </>
  );
}

export default App;

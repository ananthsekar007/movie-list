import React from "react";
import ReactModal, { Styles } from "react-modal";
import { MovieDetails } from "../data/MoviesData";
import RatingComponent from "react-star-rating-component";
import "./detailsmodal.css";

export interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  movie: MovieDetails | undefined;
}

const customStyles: Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 600,
  },
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0, 0.75)",
  },
};

export function DetailsModal({ isOpen, onClose, movie }: DetailsModalProps) {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={movie?.imageUrl} alt="Movie Poster" />
        <h2>{movie?.title}</h2>
        <p>{movie?.summary}</p>
        <p>
          {" "}
          <strong>Director :</strong> {movie?.director}{" "}
        </p>
        <p>
          {" "}
          <strong>Rating :</strong>{" "}
          <RatingComponent name="rating" value={movie?.rating || 0} />{" "}
        </p>
      </div>
    </ReactModal>
  );
}

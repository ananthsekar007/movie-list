import React from "react";
import "./moviecard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

interface MovieProps {
  title: string;
  imageUrl?: string;
  onClick: () => void;
}

export function MovieCard(props: MovieProps) {
  return (
    <div className="movie-card">
      <img
        src={
          props.imageUrl || "https://source.unsplash.com/random/200x200?sig=1"
        }
        alt="Movie Poster"
        className="movie-poster"
      />
      <div className="movie-details">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4 className="movie-title">{props.title}</h4>
          <button className="button-outlined" onClick={props.onClick}>
            View
          </button>
        </div>
      </div>
      <div className="card-icons">
        <a href="#">
          <FontAwesomeIcon
            icon={faEdit}
            onClick={() => {
              console.log("Edit Button clicked");
            }}
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => {
              console.log("Delete Button clicked");
            }}
          />
        </a>
      </div>
    </div>
  );
}

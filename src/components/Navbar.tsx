import React from "react";
import "./navbar.css";

export function NavBar() {
  return (
    <>
      <nav className="navbar">
        <h2>Movies</h2>
        <button
          className="button-filled"
          style={{
            marginTop: 15,
          }}
        >
          Go to Admin
        </button>
      </nav>
    </>
  );
}

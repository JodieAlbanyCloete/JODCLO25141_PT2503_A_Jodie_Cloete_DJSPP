import React from "react";
import { useFavourites } from "../../context/FavouritesContext";

export default function FavouritePodcast({ episode, season, podcast }) {
  const { favourites, toggleFavourite } = useFavourites();

  const isFav = favourites.find((e) => e.id === episode.id);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "0.5rem",
        marginBottom: "0.5rem",
        position: "relative",
      }}
    >
      <h3>
        {podcast.title} - {season.title}
      </h3>
      <p>{episode.title}</p>

      <button
        onClick={() => toggleFavourite(episode, season, podcast)}
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "1.5rem",
          color: isFav ? "red" : "#ccc",
        }}
      >
        {isFav ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

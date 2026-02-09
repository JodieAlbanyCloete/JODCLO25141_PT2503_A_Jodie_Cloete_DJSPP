import React from "react";
import { useFavourites } from "../context/FavouritesContext";
import FavouritePodcast from "../components/Podcasts/FavouritePodcasts";

export default function FavouritesPage() {
  const { favourites } = useFavourites();

  if (!favourites.length) {
    return <p style={{ padding: "1rem" }}>No favourites yet 🎧</p>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>My Favourites</h2>
      {favourites.map((ep) => (
        <FavouritePodcast
          key={ep.id}
          episode={ep}
          season={{ title: ep.seasonTitle }}
          podcast={{ title: ep.podcastTitle, image: ep.podcastImage }}
        />
      ))}
    </div>
  );
}

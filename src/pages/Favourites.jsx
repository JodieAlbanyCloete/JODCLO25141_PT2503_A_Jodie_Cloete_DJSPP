import React, { useContext } from "react";
import { useFavourites } from "../context/FavouritesContext";
import { PodcastContext } from "../context/PodcastContext";

import FavouritePodcast from "../components/Podcasts/FavouritePodcasts";
import SortSelect from "../components/Filters/SortSelect";

export default function FavouritesPage() {
  const { favourites } = useFavourites();
  const { sortKey } = useContext(PodcastContext);

  if (!favourites.length) {
    return <p style={{ padding: "1rem" }}>No favourites yet 🎧</p>;
  }

  const data = [...favourites];

  switch (sortKey) {
    case "title-asc":
      data.sort((a, b) => a.title.localeCompare(b.title));
      break;

    case "title-desc":
      data.sort((a, b) => b.title.localeCompare(a.title));
      break;

    case "date-asc":
      data.sort((a, b) => a.episode - b.episode);
      break;

    case "date-desc":
      data.sort((a, b) => b.episode - a.episode);
      break;

    case "default":
    default:
      break;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>My Favourites</h2>
      <h3>Your saved episodes from all shows</h3>

      <SortSelect />

      {data.map((ep) => (
        <FavouritePodcast
          key={`${ep.id}-${ep.episode}`}
          episode={ep}
          season={{ title: ep.seasonTitle }}
          podcast={{ title: ep.podcastTitle, image: ep.podcastImage }}
        />
      ))}
    </div>
  );
}

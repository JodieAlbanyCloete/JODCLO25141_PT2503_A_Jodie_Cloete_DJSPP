import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  // 1️⃣ Load initial state from localStorage
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (podcast, season, episode) => {
    const favouriteEpisode = {
      id: `${podcast.id}-${season.season}-${episode.episode}`,
      title: episode.title,
      description: episode.description,
      file: episode.file,
      episodeNumber: episode.episode,
      seasonTitle: season.title,
      podcastTitle: podcast.title,
    };

    setFavourites((prev) => {
      const exists = prev.some((e) => e.id === favouriteEpisode.id);
      if (exists) {
        return prev.filter((e) => e.id !== favouriteEpisode.id);
      }
      return [...prev, favouriteEpisode];
    });
  };

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  return useContext(FavouritesContext);
}

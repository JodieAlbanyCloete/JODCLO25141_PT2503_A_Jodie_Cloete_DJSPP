import { createContext, useContext, useState } from "react";

const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (episode, season, podcast) => {
    setFavourites((prev) => {
      const exists = prev.find((e) => e.id === episode.id);
      if (exists) return prev.filter((e) => e.id !== episode.id);
      return [
        ...prev,
        { ...episode, seasonTitle: season.title, podcastTitle: podcast.title },
      ];
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

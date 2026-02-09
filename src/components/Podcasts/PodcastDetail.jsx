import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PodcastDetail.module.css";
import { formatDate } from "../../utils/formatDate";
import GenreTags from "../UI/GenreTags";
import { useFavourites } from "../../context/FavouritesContext";

export default function PodcastDetail({ podcast, genres }) {
  const [selectedSeasonIndex, setSelectedSeasonIndex] = useState(0);
  const season = podcast.seasons[selectedSeasonIndex];
  const navigate = useNavigate();

  // Favorites state
  // const [favorites, setFavorites] = useState({});

  // // Toggle favorite
  // const toggleFavorite = (index) => {
  //   setFavorites((prev) => ({
  //     ...prev,
  //     [index]: !prev[index],
  //   }));
  // };

  const { favourites, toggleFavourite } = useFavourites();

  return (
    <div className={styles.container}>
      {/* Back Button */}
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Header */}
      <div className={styles.header}>
        <img src={podcast.image} alt="Podcast Cover" className={styles.cover} />
        <div>
          <h1 className={styles.title}>{podcast.title}</h1>
          <p className={styles.description}>{podcast.description}</p>

          <div className={styles.metaInfo}>
            <div className={styles.seasonInfo}>
              <div>
                <p>Genres</p>
                <GenreTags genres={genres} />
              </div>

              <div>
                <p>Last Updated:</p>
                <strong>{formatDate(podcast.updated)}</strong>
              </div>

              <div>
                <p>Total Seasons:</p>
                <strong>{podcast.seasons.length} Seasons</strong>
              </div>

              <div>
                <p>Total Episodes:</p>
                <strong>
                  {podcast.seasons.reduce(
                    (acc, s) => acc + s.episodes.length,
                    0,
                  )}{" "}
                  Episodes
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Season Details */}
      <div className={styles.seasonDetails}>
        <div className={styles.seasonIntro}>
          <div className={styles.left}>
            <img className={styles.seasonCover} src={season.image} />
            <div>
              <h3>
                Season {selectedSeasonIndex + 1}: {season.title}
              </h3>
              <p>{season.description}</p>
              <p className={styles.releaseInfo}>
                {season.episodes.length} Episodes
              </p>
            </div>
          </div>
          <select
            value={selectedSeasonIndex}
            onChange={(e) => setSelectedSeasonIndex(Number(e.target.value))}
            className={styles.dropdown}
          >
            {podcast.seasons.map((s, i) => (
              <option key={i} value={i}>
                Season {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.episodeList}>
          {season.episodes.map((ep) => {
            const favId = `${podcast.id}-${season.season}-${ep.episode}`;
            const isFavourite = favourites.some((f) => f.id === favId);

            return (
              <div
                key={favId}
                className={styles.episodeCard}
                style={{ position: "relative" }}
              >
                <img
                  className={styles.episodeCover}
                  src={season.image}
                  alt=""
                />

                <div className={styles.episodeInfo}>
                  <p className={styles.episodeTitle}>
                    Episode {ep.episode}: {ep.title}
                  </p>
                  <p className={styles.episodeDesc}>{ep.description}</p>
                </div>

                <button
                  onClick={() => toggleFavourite(podcast, season, ep)}
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "8px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1.5rem",
                    color: isFavourite ? "red" : "#ccc",
                    transition: "transform 0.2s",
                  }}
                >
                  {isFavourite ? "❤️" : "🤍"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

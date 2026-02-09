import styles from "./Favourites.module.css";

export default function FavouritePodcast({ episode, season, podcast }) {
  return (
    <div className={styles.favouriteCard}>
      {/* Left: Cover + Info */}
      <div className={styles.favouriteCardLeft}>
        <img
          className={styles.favouriteCardCover}
          src={podcast.image}
          alt={podcast.title}
        />
        <div className={styles.favouriteCardInfo}>
          <h4>
            Episode {episode.episodeNumber}: {episode.title}
          </h4>
          <p className={styles.meta}>
            {season.title} • Episode {episode.episodeNumber}
          </p>
          <p>{episode.description}</p>
          <p className={styles.meta}>Added to favourites</p>
        </div>
      </div>

      {/* Right: Play button */}
      <div className={styles.favouriteCardRight}>
        <button className={styles.playBtn}>Play</button>
      </div>
    </div>
  );
}

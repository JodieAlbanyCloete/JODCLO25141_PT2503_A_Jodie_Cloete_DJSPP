export default function FavouritePodcast({ episode, season, podcast }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <h3>{episode.title}</h3>
      <p>
        {podcast.title} — {season.title}
      </p>

      <audio controls src={episode.file} />
    </div>
  );
}

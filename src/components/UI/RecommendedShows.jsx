import { Link } from "react-router-dom";

export default function RecommendedShows({ shows = [] }) {
  if (!shows.length) return <p>No recommended shows yet 🎧</p>;

  return (
    <section style={{ padding: "1rem" }}>
      <h2>👍 Recommended Shows</h2>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          overflowX: "auto",
          padding: "1rem 0",
        }}
      >
        {shows.map((show) => (
          <Link
            key={show.id}
            to={`/show/${show.id}`}
            style={{
              minWidth: "200px",
              textDecoration: "none",
              color: "black",
              border: "1px solid #ccc",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <img
              src={show.image}
              alt={show.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <div style={{ padding: "0.5rem" }}>
              <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1rem" }}>
                {show.title}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                {show.genres?.map((genre) => (
                  <span
                    key={genre}
                    style={{
                      fontSize: "0.7rem",
                      background: "#eee",
                      padding: "0.2rem 0.4rem",
                      borderRadius: "4px",
                    }}
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

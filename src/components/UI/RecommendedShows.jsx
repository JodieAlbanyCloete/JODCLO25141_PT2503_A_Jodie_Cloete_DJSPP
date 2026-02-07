import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RecommendedShows({ shows = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4); // default for desktop

  // Update cardsPerView on window resize
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640)
        setCardsPerView(1); // mobile
      else if (width < 900)
        setCardsPerView(2); // tablet
      else if (width < 1200)
        setCardsPerView(3); // small desktop
      else setCardsPerView(4); // large desktop
    };

    updateCardsPerView(); // initial check
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  if (!shows.length) return <p>No recommended shows yet 🎧</p>;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % shows.length);
  };
  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + shows.length) % shows.length);
  };

  return (
    <section style={{ padding: "1rem" }}>
      <h2>👍 Recommended Shows</h2>
      <div style={{ position: "relative", width: "100%", margin: "auto" }}>
        {/* Carousel wrapper */}
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              transition: "transform 0.3s ease-in-out",
              transform: `translateX(-${currentIndex * 220}px)`,
            }}
          >
            {shows.map((show) => (
              <Link
                key={show.id}
                to={`/show/${show.id}`}
                style={{
                  minWidth: "200px",
                  marginRight: "20px",
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
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}
                  >
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
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prev}
          style={{
            position: "absolute",
            top: "50%",
            left: "-30px",
            transform: "translateY(-50%)",
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            cursor: "pointer",
          }}
        >
          ◀
        </button>
        <button
          onClick={next}
          style={{
            position: "absolute",
            top: "50%",
            right: "-30px",
            transform: "translateY(-50%)",
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            cursor: "pointer",
          }}
        >
          ▶
        </button>
      </div>
    </section>
  );
}

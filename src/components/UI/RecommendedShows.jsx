import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RecommendedShows({ shows = [] }) {
  const [cards, setCards] = useState(shows);
  const [cardsPerView, setCardsPerView] = useState(4);

  // Update cardsPerView based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerView(1);
      else if (width < 900) setCardsPerView(2);
      else if (width < 1200) setCardsPerView(3);
      else setCardsPerView(4);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    setCards(shows); // Reset cards if shows prop changes
  }, [shows]);

  if (!cards.length) return <p>No recommended shows yet 🎧</p>;

  const next = () => {
    // Move first card(s) to the end
    setCards((prev) => {
      const newCards = [...prev];
      const moved = newCards.splice(0, cardsPerView); // take first N cards
      return [...newCards, ...moved];
    });
  };

  const prev = () => {
    // Move last card(s) to the start
    setCards((prev) => {
      const newCards = [...prev];
      const moved = newCards.splice(-cardsPerView); // take last N cards
      return [...moved, ...newCards];
    });
  };

  return (
    <section style={{ padding: "1rem" }}>
      <h2>👍 Recommended Shows</h2>
      <div style={{ position: "relative", overflow: "hidden", width: "100%" }}>
        {/* Carousel track */}
        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            width: "100%",
          }}
        >
          {cards.map((show, index) => (
            <div
              key={show.id}
              style={{
                flex: `0 0 ${100 / cardsPerView}%`,
                padding: "0 0.5rem",
              }}
            >
              <Link
                to={`/show/${show.id}`}
                style={{
                  display: "block",
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
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prev}
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
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
            right: "0",
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

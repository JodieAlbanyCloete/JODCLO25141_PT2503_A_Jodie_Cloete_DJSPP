import { useState, useEffect } from "react";
import RecommendedShows from "../components/UI/RecommendedShows";
import { fetchRecommendedPodcasts } from "../api/fetchPata.js";
// import { fetchRecommendedPodcasts } from "../api/fetchRecommended";

export default function RecommendedPage() {
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecommendedPodcasts(setRecommended, setError, setLoading);
  }, []);

  if (loading) return <p>Loading recommended shows...</p>;
  if (error) return <p>Error loading recommended shows: {error}</p>;

  return (
    <main>
      <RecommendedShows shows={recommended} />
    </main>
  );
}

console.log(
  "fetchRecommendedPodcasts exists:",
  typeof fetchRecommendedPodcasts,
);

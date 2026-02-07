/**
 * @function fetchPodcasts
 * Asynchronously fetches podcast data from the remote API and updates state accordingly.
 * Handles loading, error, and successful data response via provided state setters.
 *
 * @param {Function} setPodcasts - State setter function to update the podcasts array.
 * @param {Function} setError - State setter function to update the error message (string).
 * @param {Function} setLoading - State setter function to toggle the loading state (boolean).
 *
 *
 * @returns {Promise<void>} A promise that resolves when the fetch process completes.
 *
 **/

console.log("fetchPata.js loaded");
console.log(
  "fetchRecommendedPodcasts exists:",
  typeof fetchRecommendedPodcasts,
);

export async function fetchPodcasts(setPodcasts, setError, setLoading) {
  try {
    const res = await fetch("https://podcast-api.netlify.app");
    if (!res.ok) throw new Error(`${res.status}`);
    const data = await res.json();
    setPodcasts(data);
  } catch (err) {
    console.error("Failed to fetch podcasts:", err);
    setError(err.message);
  } finally {
    setLoading(false);
  }
}

export async function fetchSinglePodcast(id, setPodcast, setError, setLoading) {
  try {
    const res = await fetch(`https://podcast-api.netlify.app/id/${id}`);
    if (!res.ok) throw new Error(`${res.status}`);
    const data = await res.json();
    setPodcast(data);
  } catch (err) {
    console.error("Failed to fetch podcasts:", err);
    setError(err.message);
  } finally {
    setLoading(false);
  }
}

export async function fetchRecommendedPodcasts(
  setRecommended,
  setError,
  setLoading,
) {
  try {
    const res = await fetch("https://podcast-api.netlify.app");
    if (!res.ok) throw new Error(`${res.status}`);

    const data = await res.json();

    // Example recommendation logic:
    // Top 10 shows OR filter by rating if your API provides it
    const recommended = data.slice(0, 10); // or data.filter(show => show.rating >= 4.5);

    setRecommended(recommended);
  } catch (err) {
    console.error("Failed to fetch recommended podcasts:", err);
    setError(err.message);
  } finally {
    setLoading(false);
  }
}

export async function fetchPodcastAudio(id) {
  try {
    const res = await fetch(
      `https://podcast-api.netlify.app/placeholder-audio.mp3`,
    );
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();

    // Return only the audio and title
    return {
      audio: data.audio,
      title: data.title,
    };
  } catch (err) {
    console.error("Failed to fetch podcast audio:", err);
    throw err;
  }
}

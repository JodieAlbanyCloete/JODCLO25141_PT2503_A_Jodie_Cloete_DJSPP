🎧 **Podcast App**

A modern React podcast application that allows users to browse, explore, favourite, and play podcasts. The app includes light/dark theme support, a global audio player, sorting and filtering, and a favourites management system.

🚀 **Features**

🎙️ Browse podcasts from an external API

🔎 View detailed podcast information (seasons & episodes)

❤️ Add and remove episodes from favourites

📁 Dedicated Favourites page

🌙 Light/Dark theme toggle

🔊 Global audio player with:
- Play / Pause
- Progress tracking
- Volume control
 - Mute Toggle

📅 Formatted episode release dates

🔁 Sorting and filtering functionality

👍 Recommended podcasts page

🛠️ **Built With**

React

React Router

Context API (Favourites + Theme management)

CSS Modules

Fetch API

External Podcast API:
https://podcast-api.netlify.app

⚙️ **Installation & Setup**
- Clone DJS05 Solution repo
- npm install
- npm install react-router-dom
- npm run dev

📂 **Project Structure**
🔹 src/

The src folder contains all the main application code. Everything that runs the app lives inside this folder.

🔹 api/

This folder contains files responsible for fetching data from the external podcast API.

fetchPata.js handles API requests.

Separating API logic keeps data fetching clean and reusable across the app.

🔹 components/

This folder contains all reusable UI and feature components. It is divided into three main sections:

1️⃣ Filters/

Contains components responsible for filtering and sorting podcasts.

2️⃣ Podcasts/

Contains podcast-specific components.

- PodcastCard.jsx – Displays a single podcast preview.

- PodcastGrid.jsx – Displays a list/grid of podcasts.

- PodcastDetail.jsx – Shows detailed information about a podcast, including seasons and episodes.

- FavouritePodcast.jsx – Displays a favourited episode.

- RecommendedShows.jsx – Displays recommended podcasts.

These components are responsible for rendering podcast content.

3️⃣ UI/

Contains reusable interface components used across multiple pages.

🔹 pages/

Contains top-level page components used by React Router.

Home.jsx – Main landing page showing podcasts.

Favourites.jsx – Displays saved favourite episodes.

RecommendedPage.jsx – Displays recommended shows.

ShowDetail.jsx – Displays full podcast details.

🔹 utils/

Contains helper functions.

formatDate.js – Formats episode release dates.

🔹 Root Files

App.jsx – Main application component. Handles routing and layout structure.

main.jsx – Entry point that renders the app to the DOM.

index.css – Global styles.

favicon.png – App favicon.



🧠 **How It Works**

🔹 Favourites System

- Uses React Context API.
Episodes are stored with a unique ID:
podcast.id + season.title + episode.episode
Users can add/remove episodes from anywhere in the app.

🔹 Theme Toggle
Global theme state is managed via ThemeContext.
Applies dark/light CSS classes to the root container.
Persisted using localStorage (if implemented).

🔹 Global Audio Player
Controlled via useRef

Tracks:
- Playback state
- Progress
- Duration
- Volume
- Remains consistent across page navigation.

📌 **Future Improvements**

🔐 User authentication

💾 Persist favourites to a database

📱 Improved mobile responsiveness

🎨 UI refinements & animations

🚀 **Vercel Link**

https://react-podcast-app-orpin.vercel.app/favourites


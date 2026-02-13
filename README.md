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

⚙️ Installation & Setup
- Clone DJS05 Solution repo
- npm install
- npm install react-router-dom
- npm run dev

📂 Project Structure
src/
│
├── api/
│   └── fetchPata.js
│
├── components/
│
│   ├── Filters/
│   │   ├── GenreFilter.jsx
│   │   ├── GenreFilter.module.css
│   │   ├── SearchBar.jsx
│   │   ├── SearchBar.module.css
│   │   ├── SortSelect.jsx
│   │   └── SortSelect.module.css
│
│   ├── Podcasts/
│   │   ├── PodcastCard.jsx
│   │   ├── PodcastCard.module.css
│   │   ├── PodcastGrid.jsx
│   │   ├── PodcastGrid.module.css
│   │   ├── PodcastDetail.jsx
│   │   ├── PodcastDetail.module.css
│   │   ├── FavouritePodcast.jsx
│   │   ├── Favourites.module.css
│   │   └── RecommendedShows.jsx
│
│   └── UI/
│       ├── Header.jsx
│       ├── Header.module.css
│       ├── GlobalAudioPlayer.jsx
│       ├── GlobalAudioPlayer.module.css
│       ├── GenreTags.jsx
│       ├── GenreTags.module.css
│       ├── Pagination.jsx
│       ├── Pagination.module.css
│       ├── Loading.jsx
│       ├── Loading.module.css
│       ├── Error.jsx
│       └── Error.module.css
│
├── context/
│   ├── PodcastContext.jsx
│   ├── FavouritesContext.jsx
│   └── ThemeContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Favourites.jsx
│   ├── RecommendedPage.jsx
│   └── ShowDetail.jsx
│
├── utils/
│   └── formatDate.js
│
├── App.jsx
├── main.jsx
├── index.css
├── data.js
└── favicon.png

🧠 **How It Works**
🔹 Favourites System

Uses React Context API.
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
Playback state
Progress
Duration
Volume
Remains consistent across page navigation.

📌 Future Improvements

🔐 User authentication
💾 Persist favourites to a database
📱 Improved mobile responsiveness
🎨 UI refinements & animations

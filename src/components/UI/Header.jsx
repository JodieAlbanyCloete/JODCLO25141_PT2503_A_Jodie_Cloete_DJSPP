import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

// export default function Header() {

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.appHeader}>
      <h1>
        {" "}
        <Link to="/">🎙️ Podcast App</Link>
      </h1>

      <div className={styles.headerActions}>
        <Link
          to="/recommended"
          className={styles.iconButton}
          title="Recommended shows"
        >
          👍
        </Link>

        <Link
          to="/favourites"
          className={styles.iconButton}
          title="Favourite shows"
        >
          ❤️
        </Link>

        <button
          onClick={toggleTheme}
          className={styles.themeToggle}
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌞" : "🌙"}
        </button>
      </div>
    </header>
  );
}

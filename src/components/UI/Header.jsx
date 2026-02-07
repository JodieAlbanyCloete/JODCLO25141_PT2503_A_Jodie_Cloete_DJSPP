import styles from "./Header.module.css";
import { Link } from "react-router-dom";
export default function Header() {
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
      </div>
    </header>
  );
}

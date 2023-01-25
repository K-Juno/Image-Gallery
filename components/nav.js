import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Nav() {
  return (
    <div className={styles.navContainer}>
      <Link href="/upload" legacyBehavior>
        <a className={styles.link}>UPLOAD</a>
      </Link>
    </div>
  );
}

export function NavBack() {
  return (
    <div className={styles.navContainer}>
      <Link href="/" legacyBehavior>
        <a className={styles.link}>GALLERY</a>
      </Link>
    </div>
  );
}

import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();

  return (
    <nav className={styles.navContainer}>
      {router.pathname === "/" ? <Link href='/upload' legacyBehavior><a className={styles.link}>UPLOAD</a></Link> : <Link href='/' legacyBehavior><a className={styles.link}>GALLERY</a></Link>}
    </nav>
  )
}

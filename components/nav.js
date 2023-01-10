import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Nav() {
    const router = useRouter();

return (
    <div className={styles.navContainer}>
    <Link href="/upload" legacyBehavior>
    <a className={styles.link}>UPLOAD</a>
    </Link>
    </div>
)
}

export function NavBack() {
    const router = useRouter();

return (
    <div className={styles.navContainer}>
    <Link href="/" legacyBehavior>
    <a className={styles.link}>GALLERY</a>
    </Link>
    </div>
)
}
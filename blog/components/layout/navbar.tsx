import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
                <Link href="/"><a>Home</a></Link>
                <Link href="/posts"><a>Posts</a></Link>
        </nav>
    )
}

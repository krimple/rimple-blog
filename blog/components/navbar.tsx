import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/posts"><a>Posts</a></Link></li>
            </ul>
        </nav>
    )
}

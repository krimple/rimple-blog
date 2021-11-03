import Head from 'next/head';
import Navbar from './navbar';
import Header from './header';
import Footer from './footer';
import styles from './layout.module.css';

// @ts-ignore
export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Ken's blog</title>
            </Head>

            <section className={styles.container}>
                <Header />
                <Navbar />
                <main className={styles.main}>{children}</main>
                <Footer />
            </section>
        </>
    );
}

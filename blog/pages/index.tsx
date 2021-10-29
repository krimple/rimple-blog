import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ken Rimple&apos; Blog</title>
      </Head>

      <main className={styles.main}>
        <p>Hiya</p>
      </main>

      <footer className={styles.footer}>
        <p>This is a footer.</p>
      </footer>
    </div>
  )
}

export default Home

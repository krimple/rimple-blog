import type { NextLayoutPage } from 'next'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';

const Home: NextLayoutPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <p>Hiya</p>
      </main>
    </div>
  )
}

// @ts-ignore
Home.getLayout = function getLayout(page) {
    return (
        <Layout>
            { page }
        </Layout>

    )
}

export default Home

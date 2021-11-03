import styles from '../styles/Home.module.css'
import Layout from '../components/layout/layout';


function Home () {
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

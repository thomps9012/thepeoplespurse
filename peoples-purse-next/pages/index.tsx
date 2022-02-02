import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to People's Purse!
        </h1>


        <div className={styles.grid}>

          <a href="signUp" className={styles.card}>
            <h2>SignUp &rarr;</h2>
          </a>
          <a href="/login" className={styles.card}>
            <h2>Login &rarr;</h2>
          </a>
          <a href="/budgetResults" className={styles.card}>
            <h2>Budget Results &rarr;</h2>
          </a>
          <a href="/voting" className={styles.card}>
            <h2>Voting Page &rarr;</h2>
          </a>
          <a href="/information" className={styles.card}>
            <h2>Information Page &rarr;</h2>
          </a>


        </div>
      </main>
    </div>
  )
}

export default Home

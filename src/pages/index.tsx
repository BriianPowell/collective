import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../assets/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Brian Powell</title>
        <meta
          name="description"
          content="Welcome to Brian's Personal Portfolio"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}></div>
      </main>
    </>
  )
}

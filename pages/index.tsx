import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GTR Hair</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hairdressing Portfolio</h1>

        <p className={styles.description}>Main page... some pictures, links, call to action</p>
        <Image
          src="/gtr_haircut0.jpg"
          alt="Cut, blowdry and balayage"
          width={280}
          height={400}
          className="mt-4"
        />
      </main>
      <Footer />
    </div>
  )
}

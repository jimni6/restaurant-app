import Layout from '../components/layout';
import Article from '../components/article';
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import imageMain from '../public/vitrine.jpg'


export default function Home() {
  return (
    <>
      <Layout>
        <div className={styles.imageMain}>
          <Image
            className={styles.imageFormat}
            src={imageMain}
            alt='Vitrine du Little Cocotte'
          />
        </div>
        <Article />
        <Article />
        <main className={styles.main}>
          <div className={styles.grid}>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <h2 className={inter.className}> */}
              <h2>
                Docs <span>-&gt;</span>
              </h2>
              <p>
                Find in-depth information about Next.js features and&nbsp;API.
              </p>
            </a>
          </div>
        </main>
      </Layout>
    </>
  )
}

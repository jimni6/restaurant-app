import '@/styles/globals.css'
import { Pacifico } from '@next/font/google';

const pacifico = Pacifico({ 
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={pacifico.className}>
      <Component {...pageProps} />
    </main>
  )
}

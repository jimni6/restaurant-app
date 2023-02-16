import '@/styles/globals.css'
import { Varela_Round, Pacifico } from '@next/font/google';

const varelaRound = Varela_Round({ 
  weight: '400',
  subsets: ['latin'],
})
export const pacifico = Pacifico({ 
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={varelaRound.className}>
      <Component {...pageProps} />
    </main>
  )
}

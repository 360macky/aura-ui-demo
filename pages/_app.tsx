import '../styles/globals.css'
import '../styles/styles.css'

import { Inter } from '@next/font/google'
import type { AppProps } from 'next/app'
import { AuraUIProvider } from '@guruhotel/aura-ui'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <main className={inter.className}><AuraUIProvider><Component {...pageProps} /></AuraUIProvider></main>
}

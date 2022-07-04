import '../src/view/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>NextAuth Introduction</title>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp

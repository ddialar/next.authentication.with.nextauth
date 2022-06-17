import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextAuth Introduction</title>
        <meta name="testing" content="whatever"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

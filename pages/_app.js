import "../styles/globals.css"
import Head from "next/head"
import Header from "./components/Header"
import Navbar from "./components/navbar"

function MyApp({ Component, pageProps }) {
  return (<>
      <Head>
        <title className="logo">histoy point</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Navbar />
    </>)
}

export default MyApp

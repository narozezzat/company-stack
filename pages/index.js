import Home from './home';
import Head from "next/head";


export default function home() {
  return (
    <>
      <Head>
          <title>Home</title>
      </Head>
      <dev>
        <Home />
      </dev>
    </>
  )
}